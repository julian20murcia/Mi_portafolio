export default function Education() {
  const educationData = [
    {
      id: 1,
      title: "Ingeniería de Sistemas",
      institution: "Universidad de Cundinamarca - Seccional Ubaté",
      period: "2021 - 2025",
      status: "En progreso (noveno semestre)",
      icon: "🎓"
    },
    {
      id: 2,
      title: "Inglés - Diplomado",
      institution: "English for Management - Grupo universitario St. Mary's College",
      level: "A1, A2, B1 y B2",
      period: "2019 - 2020",
      icon: "🌎"
    },
    {
      id: 3,
      title: "Bachiller Académico",
      institution: "I.E.D Bolívar de Ubaté",
      period: "2018",
      icon: "📚"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Formación Académica
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Mi trayectoria educativa 
          </p>
        </div>

        {/* Timeline visual */}
        <div className="relative">
          {/* Línea de tiempo */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-8 md:space-y-12">
            {educationData.map((item, index) => (
              <div 
                key={item.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Punto en la línea de tiempo */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-2 z-10 hidden md:block"></div>
                
                {/* Contenido de la tarjeta */}
                <div className="ml-12 md:ml-0 md:w-5/12">
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg">
                    {/* Icono y encabezado */}
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{item.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        
                        {/* Información de la institución */}
                        <div className="flex items-center text-gray-300 mb-1">
                          <span className="text-yellow-400 mr-2">🏛️</span>
                          <span>{item.institution}</span>
                        </div>
                        
                        {/* Período y estado */}
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center text-gray-400 text-sm">
                            <span className="text-yellow-400 mr-2">📅</span>
                            <span>{item.period}</span>
                          </div>
                          
                          {item.status && (
                            <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                              {item.status}
                            </span>
                          )}
                          
                          {item.level && (
                            <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                              {item.level}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Espacio para el lado opuesto en desktop */}
                <div className="md:w-5/12 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Nota adicional */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Educación continua y actualización constante en tecnologías emergentes
          </p>
        </div>
      </div>
    </section>
  );
}
