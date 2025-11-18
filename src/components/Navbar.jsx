import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-yellow-400">Julian Nieto</h1>

        {/* NAV DESKTOP */}
        <ul className="hidden md:flex gap-10 text-lg">
          <li>
            <a href="#about" className="hover:text-yellow-400 transition">Sobre mí</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-400 transition">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400 transition">Proyectos</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">Contacto</a>
          </li>
        </ul>

        {/* BOTÓN MENÚ (MÓVIL) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl py-6 px-6 space-y-6 text-lg text-center">
          <a 
            href="#about" 
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Sobre mí
          </a>

          <a 
            href="#skills" 
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>

          <a 
            href="#projects" 
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Proyectos
          </a>

          <a 
            href="#contact" 
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}

