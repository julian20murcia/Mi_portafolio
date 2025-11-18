import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Sistema de Gestión de Cursos — Programmers JSF",
    description:
      "Desarrollo de un sistema de gestión de cursos enfocados en programación en línea utilizando Laravel, React, Node.js, PHP y MongoDB.",
    tech: ["Laravel", "React", "Node.js", "PHP", "MongoDB"],
    image: "https://minelatino.com/wp-content/uploads/2022/09/Presentacion-proyecto-fin-de-grado-profesional-en-color-azul-1024x576-1.png",
    github: "https://github.com/julian20murcia/PGC_programmers_jsf",
    demo: "https://github.com/julian20murcia/PGC_programmers_jsf"
  },
  {
    title: "Red Empresarial — Cisco Packet Tracer",
    description:
      "Implementación de una red empresarial en Cisco Packet Tracer con reglas de acceso, segmentación y seguridad.",
    tech: ["Cisco Packet Tracer", "Networking", "ACLs"],
    image: "https://facialix.com/wp-content/uploads/2024/12/curso-cisco-seguridad-redes-gratis.webp",
    github: null,
    demo: null
  },
  {
    title: "Aplicativo Web para Enseñanza de Inglés",
    description:
      "Creación de un aplicativo web educativo utilizando Node.js, React, PostgreSQL y Postman.",
    tech: ["Node.js", "React", "PostgreSQL", "Postman"],
    image: "https://www.aauniv.com/s/blog/wp-content/uploads/2020/12/ventajas-estudiar-maestria-ensenanza-ingles.jpg",
    github: "https://github.com/BradleyBallen/Page_React",
    demo: "https://github.com/BradleyBallen/Page_React"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Mis <span className="text-yellow-500">Proyectos</span>
        </motion.h2>

        <p className="text-gray-600 mt-3 text-lg">
          Algunos de los desarrollos que he construido
        </p>
      </div>

      {/* Tarjetas */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer 
                       transform transition-all hover:scale-[1.05] hover:-rotate-1 active:scale-100"
          >
            {/* Imagen */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Contenido */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex justify-between items-center mt-4">

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-gray-800 hover:text-black transition"
                  >
                    <FaGithub /> Código
                  </a>
                ) : (
                  <span className="text-gray-400 italic">Sin repositorio</span>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 transition"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                ) : (
                  <span className="text-gray-400 italic">Sin demo</span>
                )}

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


