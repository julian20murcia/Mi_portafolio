import { motion } from "framer-motion";
import foto from "../assets/profile.jpg"; // Usa tu imagen aquí

export default function About() {
  return (
  <section
  id="about"
  className="w-full min-h-screen flex justify-center items-center py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-6"
>



      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={foto}
            alt="Julian Nieto"
            className="w-72 h-72 object-cover rounded-2xl shadow-xl border border-gray-600"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Sobre <span className="text-yellow-400">mí</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            Soy Julian Nieto, estudiante de Ingeniería de Sistemas apasionado por el desarrollo web 
            y la creación de soluciones tecnológicas. Me especializo en construir aplicaciones modernas, 
            rápidas y funcionales, siempre buscando mejorar mis habilidades cada día.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            Me considero una persona organizada, proactiva y con gran capacidad para trabajar en equipo. 
            Disfruto asumir nuevos retos, aprender rápido y compartir mis conocimientos con otros.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Actualmente me enfoco en tecnologías como React, Node.js, MongoDB, y herramientas de gestión
            como Scrum y Packet Tracer. Busco oportunidades para crecer profesionalmente y aportar valor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

