import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaUser, 
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle 
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Ingresa un email válido";
    }

    if (!form.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus("sending");

    
    const templateParams = {
      to_name: "Julian", 
      from_name: form.name.trim(), 
      from_email: form.email.trim(),
      message: form.message.trim(),
      reply_to: form.email.trim(), 
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_8i1p3ks",
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ddqknrm", 
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "spy_VAjpBIawoCAx9"
      )
      .then(
        (response) => {
          console.log("Email enviado:", response);
          setStatus("success");
          setForm({ name: "", email: "", message: "" });
          setErrors({});
          
          setTimeout(() => {
            setStatus("");
          }, 5000);
        },
        (error) => {
          console.error("Error enviando email:", error);
          setStatus("error");
          
          setTimeout(() => {
            setStatus("");
          }, 5000);
        }
      );
  };

  const handleInputChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Contácta<span className="text-yellow-400">me</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
           
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700"
          >
            <form onSubmit={sendEmail} className="space-y-6">
              {/* Campo Nombre */}
              <div>
                <label className="block text-lg font-medium mb-2 flex items-center gap-2">
                  <FaUser className="text-yellow-400" />
                  Nombre
                </label>
                <input
                  type="text"
                  className={`w-full p-4 rounded-xl bg-gray-700 border-2 transition-all duration-200 text-white placeholder-gray-400 ${
                    errors.name 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-gray-600 focus:border-yellow-400"
                  }`}
                  placeholder="Escribe tu nombre completo"
                  value={form.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-2"
                    >
                      <FaExclamationTriangle />
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Campo Email */}
              <div>
                <label className="block text-lg font-medium mb-2 flex items-center gap-2">
                  <FaEnvelope className="text-yellow-400" />
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className={`w-full p-4 rounded-xl bg-gray-700 border-2 transition-all duration-200 text-white placeholder-gray-400 ${
                    errors.email 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-gray-600 focus:border-yellow-400"
                  }`}
                  placeholder="ingresa tu email"
                  value={form.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-2"
                    >
                      <FaExclamationTriangle />
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Campo Mensaje */}
              <div>
                <label className="block text-lg font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  rows="6"
                  className={`w-full p-4 rounded-xl bg-gray-700 border-2 transition-all duration-200 text-white placeholder-gray-400 resize-none ${
                    errors.message 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-gray-600 focus:border-yellow-400"
                  }`}
                  placeholder="..."
                  value={form.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-2"
                    >
                      <FaExclamationTriangle />
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Botón de Envío */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status !== "sending" ? 1.02 : 1 }}
                whileTap={{ scale: status !== "sending" ? 0.98 : 1 }}
                className={`w-full py-4 font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-3 ${
                  status === "sending" 
                    ? "bg-gray-600 cursor-not-allowed" 
                    : "bg-yellow-500 hover:bg-yellow-400 text-gray-900"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>

              {/* Alertas de Estado */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-green-900/50 border border-green-500 rounded-xl flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-green-400 text-xl" />
                    <div>
                      <p className="text-green-400 font-medium">¡Mensaje enviado exitosamente!</p>
                      <p className="text-green-300 text-sm">Te responderé a <strong>{form.email}</strong> pronto.</p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-900/50 border border-red-500 rounded-xl flex items-center gap-3"
                  >
                    <FaExclamationTriangle className="text-red-400 text-xl" />
                    <div>
                      <p className="text-red-400 font-medium">Error al enviar el mensaje</p>
                      <p className="text-red-300 text-sm">Por favor, intenta de nuevo o usa WhatsApp.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Información de Contacto Alternativo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                Contacto Directo
              </h3>
              <p className="text-gray-300 mb-6">
                ¿Prefieres contactarme directamente? Usa cualquiera de estos métodos:
              </p>

              {/* Botón WhatsApp */}
              <motion.a
                href="https://wa.me/573214604442?text=Hola%20Julian,%20vi%20tu%20portafolio%20y%20quiero%20contactarte."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors duration-200 mb-4"
              >
                <FaWhatsapp size={24} />
                Enviar mensaje por WhatsApp
              </motion.a>

              {/* Email Directo */}
              <motion.a
                href="mailto:juliansantlag8@gmail.com"
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-3 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors duration-200"
              >
                <FaEnvelope size={20} />
                Enviar Email Directo a
                juliansantiag8@gmail.com
              </motion.a>
            </div>

            {/* Información Adicional */}
             <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
              <h4 className="text-lg font-semibold mb-3 text-yellow-400">
                Recuerda que estoy ubicado en la Villa de San Diego de Ubaté, Cundinamarca.
              </h4>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
  

