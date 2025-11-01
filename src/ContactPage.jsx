import React, { useState, useRef } from 'react';

const ContactPage = ({ onNavigate }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Forzar el envío tradicional del formulario
    setTimeout(() => {
      // Crear un formulario temporal
      const tempForm = document.createElement('form');
      tempForm.action = 'https://formsubmit.co/el/panemi';
      tempForm.method = 'POST';
      tempForm.style.display = 'none';
      
      // Agregar todos los campos del formulario original
      const formData = new FormData(formRef.current);
      for (let [name, value] of formData) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        tempForm.appendChild(input);
      }
      
      // Agregar campos adicionales de FormSubmit (CORRECTO)
      const additionalFields = [
        { name: '_captcha', value: 'false' },
        { name: '_template', value: 'table' },
        { name: '_subject', value: '🚀 NUEVO MENSAJE - Portafolio Alfonzo Maestre' },
        { name: '_next', value: window.location.href }
      ];
      
      additionalFields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value; // <--- Lógica Correcta
        tempForm.appendChild(input);
      });
      
      // Agregar al documento y enviar
      document.body.appendChild(tempForm);
      tempForm.submit();
      
      // Limpiar después de enviar
      setTimeout(() => {
        document.body.removeChild(tempForm);
        setIsSubmitting(false);
        // Resetear formulario
        formRef.current.reset();
      }, 1000);
      
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#0D121B] text-gray-100 font-sans p-0 md:p-8">
      
      <main className="max-w-7xl mx-auto min-h-screen md:min-h-[90vh] grid md:grid-cols-4 rounded-none md:rounded-3xl shadow-2xl overflow-hidden bg-[#1D232C]">
        
        <aside className="col-span-4 md:col-span-1 bg-[#0D121B] p-6 flex flex-col items-center border-b md:border-b-0 md:border-r border-[#2D3440]">
          
          <div className="flex flex-col items-start w-full mb-12">
            <div className="mx-auto md:mx-0 mb-6">
                <img 
                className="w-60 h-60 rounded-full object-cover border-4 border-cyan-400 shadow-xl shadow-cyan-400/50"
                src="src/fotoperfil.jpg" 
                alt="Foto de perfil de Alfonzo Maestre"
                />
            </div>
          </div>
          
          <nav className="space-y-6 text-left w-full mt-8">
            <button 
              onClick={() => onNavigate('home')}
              className="block text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-sky-400 transition text-left"
            >
              INICIO
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="block text-sm font-bold uppercase tracking-widest text-cyan-400 hover:text-sky-400 transition text-left"
            >
              CONTACTO
            </button>
          </nav>

        </aside>

        <div className="md:col-span-3 p-8 sm:p-12 overflow-y-auto bg-[#1D232C]">
          
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-black mb-6">
              <span className="text-cyan-400">CONTACTO</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? ¡Hablemos! Estoy aquí para ayudarte a hacerlo realidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#0D121B] p-6 rounded-xl border border-[#2D3440]">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="mr-3">📧</span> Email
              </h3>
              <p className="text-gray-300">ALFONZGABRIEL@GMAIL.COM</p>
              <p className="text-gray-400 text-sm mt-2">Respuesta en 24 horas</p>
            </div>
            
            <div className="bg-[#0D121B] p-6 rounded-xl border border-[#2D3440]">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="mr-3">📱</span> WhatsApp
              </h3>
              <p className="text-gray-300">+58 412-4500597</p>
              <p className="text-gray-400 text-sm mt-2">Disponible para llamadas y mensajes</p>
            </div>
          </div>

          {/* FORMULARIO FORMSUBMIT FUNCIONAL */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0D121B] p-8 rounded-xl border border-[#2D3440]">
              <h2 className="text-3xl font-bold text-gray-100 mb-2 text-center">
                Envíame un Mensaje
              </h2>
              <p className="text-gray-400 text-center mb-8">
                Completa el formulario y me pondré en contacto contigo lo antes posible
              </p>
              
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-[#1D232C] border border-[#2D3440] rounded-lg text-gray-100 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition duration-200"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[#1D232C] border border-[#2D3440] rounded-lg text-gray-100 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition duration-200"
                      placeholder="tu.email@ejemplo.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-[#1D232C] border border-[#2D3440] rounded-lg text-gray-100 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition duration-200"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-[#1D232C] border border-[#2D3440] rounded-lg text-gray-100 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition duration-200 resize-vertical"
                    placeholder="Cuéntame sobre tu proyecto, ideas o cualquier consulta que tengas..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-cyan-400 to-sky-400 text-gray-900 font-black uppercase rounded-lg shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    '📧 Enviar Mensaje'
                  )}
                </button>
                
                {isSubmitting && (
                  <div className="p-4 bg-blue-500/20 border border-blue-400 rounded-lg text-blue-400 text-center text-sm">
                    ⏳ Procesando envío... Serás redirigido momentáneamente.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
