import { motion } from "framer-motion";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython 
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiGit, SiGithub } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
  { name: "Git", icon: <SiGit />, color: "text-red-500" },
  { name: "GitHub", icon: <SiGithub />, color: "text-white" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-black">


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white">
          Mis <span className="text-yellow-500">Skills</span>
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Tecnologías y herramientas con las que trabajo
        </p>
      </motion.div>

      {/* Tarjetas */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-100 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer"
          >
            <div className={`text-5xl mb-3 ${skill.color}`}>
              {skill.icon}
            </div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
