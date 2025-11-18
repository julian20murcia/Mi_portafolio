import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center relative overflow-hidden">

      {/* FONDO DEGRADADO DETRÁS DE LA FOTO */}
      <div className="absolute top-1/2 -left-10 w-72 h-72 bg-yellow-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >

        {/* FOTO CON EFECTO HOVER + SHADOW + BORDER ANIMADO */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative group">
            <img
              src={profile}
              alt="Foto de Julian Nieto"
              className="
                w-44 h-44 md:w-56 md:h-56 
                rounded-full object-cover border-4 border-yellow-400 
                shadow-[0_0_35px_rgba(255,215,0,0.45)]
                transition-all duration-300 group-hover:shadow-[0_0_55px_rgba(255,215,0,0.7)]
              "
            />

            {/* Glow extra al pasar el mouse */}
            <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition bg-yellow-400"></div>
          </div>
        </motion.div>

        {/* TÍTULO ANIMADO */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
          Hola, soy <span className="text-yellow-400">Julian Nieto</span>
        </h1>

        {/* EFECTO TYPING */}
        <TypeAnimation
          sequence={[
            "Ingeniero de Sistemas", 2000,
            "Developer", 2000,
            "Network Engineer", 2000,
            "Pregrado en formación (Noveno semestre)", 2000,
          ]}
          wrapper="span"
          speed={55}
          repeat={Infinity}
          className="text-xl md:text-2xl text-yellow-300 font-semibold"
        />

        {/* DESCRIPCIÓN */}
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
          Me apasiona crear soluciones digitales, aprender nuevas tecnologías,
          trabajar en equipo y enfrentar retos que me permitan crecer tanto
          profesional como personalmente.
        </p>

        {/* BOTONES */}
        <div className="mt-10 flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="bg-yellow-400 px-6 py-3 rounded-lg text-black font-bold hover:bg-yellow-300 transition"
          >
            Contactar
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/julian20murcia"
            target="_blank"
            className="border border-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

