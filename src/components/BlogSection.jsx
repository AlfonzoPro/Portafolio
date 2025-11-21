import React, { useState, useEffect } from 'react';

// URL de ejemplo para obtener artículos de Dev.to etiquetados con 'react'
// Limitamos a 6 artículos para que sea rápido y manejable
const DEV_TO_API_URL = 'https://dev.to/api/articles?tag=react&per_page=6';

const BlogSection = () => {
    // 1. MANEJO DE ESTADOS
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. FUNCIÓN PARA OBTENER DATOS DE LA API
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(DEV_TO_API_URL);
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                const data = await response.json();
                setArticles(data);
                setError(null); // Limpiar errores si la carga es exitosa
            } catch (err) {
                console.error("Fallo al obtener artículos:", err);
                setError("Error al cargar los artículos. Por favor, inténtalo más tarde.");
                setArticles([]); // Asegurar que no hay datos antiguos
            } finally {
                setIsLoading(false); // Siempre terminar el estado de carga
            }
        };

        fetchArticles();
    }, []); // El array vacío asegura que la llamada solo se haga al montar el componente

    // 3. ESTADOS VISUALES (Carga y Error)
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-48">
                {/* Spinner simple de Tailwind */}
                <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent border-solid rounded-full animate-spin"></div>
                <p className="ml-3 text-cyan-400">Cargando artículos...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center p-8 bg-red-900/20 text-red-400 border border-red-400 rounded-lg">
                <p className="font-bold">¡Ocurrió un error!</p>
                <p>{error}</p>
            </div>
        );
    }

    // 4. VISTA DE DATOS (Si la carga fue exitosa)
    return (
        <section id="blog" className="pt-8">
            <h3 className="text-3xl font-bold text-gray-100 mb-8 border-b border-[#2D3440] pb-3">
                Blog Técnico (React)
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <a 
                        key={article.id} 
                        href={article.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block bg-[#0D121B] p-5 rounded-xl shadow-lg transition duration-300 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-400/20 border-t-4 border-cyan-400"
                    >
                        <h4 className="text-lg font-semibold text-gray-100 mb-2 line-clamp-2">
                            {article.title}
                        </h4>
                        <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                            {article.description}
                        </p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <span>{new Date(article.published_at).toLocaleDateString()}</span>
                            <span className="text-sky-400">@{article.user.username}</span>
                        </div>
                    </a>
                ))}
            </div>
            
            {articles.length === 0 && !isLoading && (
                <p className="text-center text-gray-400 mt-8">No se encontraron artículos.</p>
            )}
        </section>
    );
};

export default BlogSection;