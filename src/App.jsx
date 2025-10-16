import React, { useState } from 'react';

// --- Datos ---
const profileData = {
  name: "ALFONZO MAESTRE", 
  title: "SOY ESTUDIANTE DE INGENIERÍA DE SISTEMAS Y DESARROLLADOR WEB,  APASIONADO POR LA TECNOLOGÍA, LA PROGRAMACION Y EL APRENDIZAJE CONTINUO", 
  email: "ALFONZGABRIEL@GMAIL.COM",
  linkedin: "https://www.linkedin.com/in/alfonzo-maestre-73945436b/",
  github: "https://github.com/AlfonzoPro",
  behance: "https://www.facebook.com/alfonzogabriel.maestrebarrios", // Se usará para el ícono de Facebook
  whatsapp: "https://wa.me/+584124500597",
  instagram: "https://www.instagram.com/alfonzo_998/",
  welcomeMessage: "BIENVENIDO A MI PORTAFOLIO COMO DESARROLLADOR WEB",
  contactMessage: "Si quieres ponerte en contacto conmigo escríbeme a ",
  // Placeholder con el nuevo color de fondo del sidebar
  image: "src/fotoperfil.jpg" 
};

const skillsData = [
  { icon: '🐍', name: "PYTHON", level: 90 },
  { icon: '⚙️', name: "JAVASCRIPT", level: 50 },
  { icon: '🎨', name: "Tailwind CSS & Estilos", level: 50 },
  { icon: '💻', name: "C/C++", level: 70 },
];

const projectsData = [
  { 
    id: 1, 
    title: "Textnspector", 
    desc: "Una aplicación web que analiza archivos de texto, contando líneas, palabras y caracteres, y genera un resumen con esta información.", 
    link: "https://github.com/AlfonzoPro/TextInspector",
    technologies: ["Python", "HTML/CSS", "Flask",],
    challenges: ["📝 Analiza archivos de texto (.txt)", "Cuenta: Número de líneas, Número de palabras, Número de caracteres", "Genera un archivo de resumen"]
  },
  { 
    id: 2, 
    title: "VirtualAsistent", 
    desc: "Asistente virtual de voz basico, propulsado por API de Gemini 2.5.", 
    link: "https://github.com/AlfonzoPro/Asistente-de-voz-ia/blob/main/app.py",
    technologies: ["Python", "HTML", "CSS", "AI"],
    challenges: ["Mejorar la recepcion de respuestas.", "Recordar conversaciones anteriores para contexto."]
  },
  { 
    id: 3, 
    title: "Integrante de BufferRing", 
    desc: "Organizacion de programadores, Especializados en plataformas de marketplace y soluciones automotrices.", 
    link: "https://github.com/bufferring",
    technologies: ["Vite", "React", "Tailwind", "Python", "JavaScript", "HTML/CSS", "SQL", "TypeScript"],
    challenges: [" Crear soluciones de software robustas, escalables y fáciles de usar", "Crear una arquitectura de componentes escalables y faciles de usar."]
  },
];

// --- Componentes SVG para Redes Sociales ---

const LinkedInIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.23,0H1.77C0.79,0,0,0.79,0,1.77v20.46C0,23.21,0.79,24,1.77,24h20.46c0.98,0,1.77-0.79,1.77-1.77V1.77C24,0.79,23.21,0,22.23,0zM7.18,20.45H3.59V9H7.18V20.45zM5.38,7.43c-1.19,0-1.93-0.8-1.93-1.87c0-1.07,0.74-1.87,1.93-1.87c1.19,0,1.93,0.8,1.93,1.87C7.31,6.63,6.57,7.43,5.38,7.43zM20.45,20.45h-3.59v-5.6c0-1.33-0.5-2.24-1.68-2.24c-0.91,0-1.47,0.61-1.71,1.21c-0.08,0.21-0.1,0.5-0.1,0.79v5.84h-3.59s0.05-9.69,0-10.61h3.59v1.5c0.48-0.73,1.3-1.76,3.19-1.76c2.34,0,4.09,1.5,4.09,4.72V20.45z"/></svg>
);
const GitHubIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.067 3.633 17.7 3.633 17.7c-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.793 1.305 3.476.998.108-.775.421-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.221-.12-.3-.538-1.52.144-3.178 0 0 1.006-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.682 1.658.264 2.879.143 3.178.771.84 1.235 1.911 1.235 3.221 0 4.611-2.801 5.621-5.476 5.92.42.36.81 1.096.81 2.218 0 1.595-.015 2.87-.015 3.257 0 .32.21.692.825.575C20.565 21.79 24 17.29 24 12 24 5.373 18.627 0 12 0z"/></svg>
);
const InstagramIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.013 4.85.07c3.275.148 4.674 1.632 4.867 4.867.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.193 3.235-1.592 4.634-4.867 4.867-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-3.275-.193-4.674-1.632-4.867-4.867-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.193-3.235 1.592-4.634 4.867-4.867 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.623-6.98 6.98-.059 1.28-.073 1.688-.073 4.948s.014 3.668.073 4.948c.2 4.357 2.623 6.78 6.98 6.98 1.28.058 1.688.072 4.947.072s3.668-.014 4.947-.072c4.358-.2 6.78-2.623 6.98-6.98.059-1.28.073-1.688.073-4.948s-.014-3.667-.073-4.947c-.2-4.358-2.623-6.78-6.98-6.98-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.796 0 1.441-.645 1.441-1.44s-.645-1.44-1.441-1.44z"/></svg>
);
const FacebookIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.542-1.333h2.458v-4h-3.208c-3.636 0-4.792 2.523-4.792 4.545v2.455z"/></svg>
);

// Ícono de teléfono para WhatsApp (📞)
const PhoneReceiverIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.4 2.88 3.82 5.29 6.7 6.7l2.14-2.14c.24-.24.59-.31.89-.18.91.35 1.94.55 3 .55.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C10.74 23 1 13.26 1 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.06.2 2.09.55 3 .13.3.06.65-.18.89l-2.14 2.14z"/></svg>
);


// Componente de Icono Social (Ajustado para el efecto glow y para usar SVGs)
const SocialIcon = ({ href, platform, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    // Ahora con sombra y color azul neón
    className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 transition duration-150 hover:bg-sky-400 hover:shadow-sky-400/50"
    aria-label={`Enlace a mi perfil de ${platform}`}
  >
    {/* El contenido (SVG) se inyecta como children y usa el color del círculo para el fill */}
    <span className="text-gray-900">
      {children}
    </span>
  </a>
);

// Componente para la barra de progreso de Habilidades
const SkillBar = ({ icon, name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-300 font-medium text-sm">{icon} {name}</span>
      <span className="text-sky-400 font-bold text-sm">{level}%</span>
    </div>
    <div className="w-full bg-[#2D3440] rounded-full h-2.5">
      <div 
        // La barra de progreso con glow azul
        className="bg-cyan-400 h-2.5 rounded-full transition-all duration-1000 ease-out shadow-md shadow-cyan-400/50" 
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

// Componente Modal para mostrar los detalles del proyecto
const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center p-4 z-50"
      onClick={onClose} 
    >
      <div 
        // Fondo del modal adaptado a la paleta gris oscura
        className="bg-[#1D232C] text-gray-100 rounded-xl max-w-lg w-full p-8 shadow-2xl overflow-y-auto max-h-[90vh] border border-cyan-400"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-3xl font-bold text-sky-400">{project.title}</h2>
          <button 
            onClick={onClose} 
            className="text-cyan-400 hover:text-cyan-200 transition duration-150 p-1"
            aria-label="Cerrar detalles del proyecto"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <p className="text-gray-400 mb-6 border-b border-[#2D3440] pb-4">{project.desc}</p>
        
        <div className="space-y-6">
          
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 flex items-center">
                <span className="mr-2 text-2xl">🛠️</span> Tecnologías Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-[#1D232C] text-sky-400 text-sm font-medium px-3 py-1 rounded-full border border-sky-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 flex items-center">
                <span className="mr-2 text-2xl">🧠</span> Retos y Aprendizajes
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              {project.challenges.map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          // Botón principal de acción en color secundario
          className="mt-6 inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-sky-400 text-gray-900 font-black uppercase hover:bg-sky-300 transition duration-150 sm:text-sm shadow-lg shadow-sky-400/50"
        >
          Ir al Repositorio
        </a>
      </div>
    </div>
  );
};

// Componente para tarjetas de Proyecto
const ProjectCard = ({ title, desc, onDetailsClick }) => (
  <div 
    // Fondo de las tarjetas más oscuro que el contenido principal, pero no tanto como el sidebar
    className="bg-[#0D121B] p-6 rounded-xl shadow-lg transition duration-300 cursor-pointer border-t-4 border-cyan-400 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-400/20"
    onClick={onDetailsClick}
  >
    <h3 className="text-xl font-semibold text-gray-100 mb-2">{title}</h3>
    <p className="text-gray-400 mb-4 text-sm">{desc}</p>
    <button className="text-sky-400 hover:text-cyan-400 font-medium flex items-center mt-2">
      Más detalle 
      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </button>
  </div>
);

// --- Componente Principal (Mini Portafolio) ---
const App = () => {
  // --- DECLARACIÓN DEL ESTADO ---
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    // Contenedor principal con fondo oscuro
    <div className="min-h-screen bg-[#0D121B] text-gray-100 font-sans p-0 md:p-8">
      
      {/* Contenedor Grid Principal */}
      <main className="max-w-7xl mx-auto min-h-screen md:min-h-[90vh] grid md:grid-cols-4 rounded-none md:rounded-3xl shadow-2xl overflow-hidden bg-[#1D232C]">
        
        {/* Columna 1: Sidebar / Navegación */}
        <aside className="col-span-4 md:col-span-1 bg-[#0D121B] p-6 flex flex-col items-center border-b md:border-b-0 md:border-r border-[#2D3440]">
          
          {/* Contenedor del Perfil */}
          <div className="flex flex-col items-start w-full mb-12">
            
            {/* Foto Circular */}
            <div className="mx-auto md:mx-0 mb-6">
                <img 
                className="w-60 h-60 rounded-full object-cover border-4 border-cyan-400 shadow-xl shadow-cyan-400/50"
                src={profileData.image} 
                alt="Foto de perfil de Alfonzo Maestre"
                />
            </div>

          </div>
          
          {/* Navegación (Alineada a la izquierda) */}
          <nav className="space-y-6 text-left w-full mt-8">
            {['SOBRE MÍ', 'SKILLS', 'PORTAFOLIO', 'CONTACTO'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/á/g, 'a').replace(/\s/g, '-')}`} 
                className="block text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-sky-400 transition"
              >
                {item}
              </a>
            ))}
          </nav>

        </aside>

        {/* Columna 2: Contenido Principal */}
        <div className="md:col-span-3 p-8 sm:p-12 overflow-y-auto bg-[#1D232C]">
          
          {/* Sección 1: Hero */}
          <section id="sobre-mi" className="pb-10 mb-10 border-b border-[#2D3440] text-left">
            
            {/* Nombre Grande con Color Neón y tipografía dramática */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-none mb-8">
              <span className="text-cyan-400 uppercase tracking-tighter drop-shadow-lg shadow-cyan-400">{profileData.name.split(' ')[0]}</span>{' '}
              <span className="text-sky-400 uppercase tracking-tighter drop-shadow-lg shadow-sky-400">{profileData.name.split(' ')[1]}</span>
            </h2>

            {/* Mensaje de Bienvenida */}
            <p className="text-lg tracking-wider text-gray-200 mb-6 max-w-2xl font-bold">
              {profileData.welcomeMessage}
            </p>
            
            {/* Título/Rol */}
            <p className="text-xl tracking-wide text-gray-400 mb-8 max-w-2xl">
              **{profileData.title}**
            </p>

            {/* Enlaces Sociales */}
            <div className="flex space-x-4 mt-10">
                <SocialIcon href={profileData.linkedin} platform="LinkedIn"><LinkedInIcon /></SocialIcon>
                <SocialIcon href={profileData.github} platform="GitHub"><GitHubIcon /></SocialIcon>
                <SocialIcon href={profileData.instagram} platform="Instagram"><InstagramIcon /></SocialIcon>
                {/* Usando el campo 'behance' como placeholder para el enlace de Facebook */}
                <SocialIcon href={profileData.behance} platform="Facebook"><FacebookIcon /></SocialIcon> 
                {/* Usando el nuevo icono de teléfono para WhatsApp */}
                <SocialIcon href={profileData.whatsapp} platform="WhatsApp"><PhoneReceiverIcon /></SocialIcon>
            </div>

          </section>

          {/* Sección 2: Habilidades Técnicas */}
          <section id="skills" className="mb-10">
            <h3 className="text-3xl font-bold text-gray-100 mb-6 border-b border-[#2D3440] pb-3">Habilidades</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skillsData.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </section>
          
          {/* Sección 3: Proyectos Destacados */}
          <section id="portafolio">
            <h3 className="text-3xl font-bold text-gray-100 mb-6 border-b border-[#2D3440] pb-3">Proyectos</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {projectsData.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  title={project.title} 
                  desc={project.desc}
                  onDetailsClick={() => openModal(project)} 
                />
              ))}
            </div>
          </section>

          {/* Sección 4: Contacto */}
          <section id="contacto" className="pt-10 mt-10 border-t border-[#2D3440] text-center">
            <p className="text-xl tracking-wide text-gray-300 mb-4 max-w-2xl mx-auto">
                {profileData.contactMessage}
            </p>
            <a href={`mailto:${profileData.email}`} className="text-3xl font-black text-cyan-400 hover:text-sky-400 transition underline tracking-wider">
                {profileData.email}
            </a>
          </section>
          
        </div>
      </main>

      {/* RENDERIZADO DEL MODAL */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={closeModal} 
      />

    </div>
  );
};

export default App;