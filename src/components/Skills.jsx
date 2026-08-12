import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaCode,
  FaDatabase,
  FaJava,
  FaPython,
  FaAws,
  FaUserShield,
  FaCubes,
  FaProjectDiagram,
  FaDesktop,
  FaNetworkWired,
  FaSync,
  FaLayerGroup,
  FaUsersCog,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiBootstrap,
  SiExpress,
  SiPostman,
  SiGithub,
  SiTypescript,
  SiSpringboot,
  SiJsonwebtokens,
  SiNextdotjs,
  SiMui,
  SiMysql,
  SiVercel,
} from "react-icons/si";
import { skillsCategoriesData } from "../data/portfolioData";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const iconComponentMap = {
    FaJava: <FaJava className="text-red-500" />,
    FaJs: <FaJs className="text-yellow-400" />,
    SiTypescript: <SiTypescript className="text-blue-500" />,
    FaPython: <FaPython className="text-blue-400" />,
    SiSpringboot: <SiSpringboot className="text-green-500" />,
    FaNodeJs: <FaNodeJs className="text-green-500" />,
    SiExpress: <SiExpress className="text-neutral-300" />,
    FaCode: <FaCode className="text-blue-400" />,
    SiJsonwebtokens: <SiJsonwebtokens className="text-pink-500" />,
    FaUserShield: <FaUserShield className="text-purple-400" />,
    FaReact: <FaReact className="text-cyan-400" />,
    SiNextdotjs: <SiNextdotjs className="text-white" />,
    FaHtml5: <FaHtml5 className="text-orange-500" />,
    FaCss3Alt: <FaCss3Alt className="text-blue-500" />,
    SiTailwindcss: <SiTailwindcss className="text-cyan-300" />,
    SiBootstrap: <SiBootstrap className="text-purple-500" />,
    SiMui: <SiMui className="text-blue-400" />,
    SiMongodb: <SiMongodb className="text-green-400" />,
    SiMysql: <SiMysql className="text-blue-500" />,
    FaGitAlt: <FaGitAlt className="text-orange-600" />,
    SiGithub: <SiGithub className="text-white" />,
    SiPostman: <SiPostman className="text-orange-400" />,
    FaAws: <FaAws className="text-yellow-500" />,
    SiVercel: <SiVercel className="text-white" />,
    FaCubes: <FaCubes className="text-indigo-400" />,
    FaProjectDiagram: <FaProjectDiagram className="text-teal-400" />,
    FaDatabase: <FaDatabase className="text-cyan-500" />,
    FaDesktop: <FaDesktop className="text-purple-400" />,
    FaNetworkWired: <FaNetworkWired className="text-rose-400" />,
    FaSync: <FaSync className="text-amber-400" />,
    FaUsersCog: <FaUsersCog className="text-rose-500" />,
    FaLayerGroup: <FaLayerGroup className="text-emerald-400" />,
  };

  const categories = ["All", ...skillsCategoriesData.map((c) => c.category)];

  const allSkills = skillsCategoriesData.flatMap((cat) =>
    cat.skills.map((skill) => ({ ...skill, category: cat.category }))
  );

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-red-500 uppercase block mb-2">
            CORE_COMPETENCIES
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase">
            TECHNICAL <span className="text-red-500">SKILLS</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto font-light text-base md:text-lg">
            Languages, frameworks, databases, tools, and computer science concepts matching my professional profile.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-red-600 text-white border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                  : "bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="flex flex-wrap justify-center gap-6 md:gap-8 py-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{
                    scale: 1.12,
                    zIndex: 50,
                    transition: { duration: 0.2 },
                  }}
                  style={{
                    "--hover-color": skill.color,
                  }}
                  className="w-32 h-36 md:w-36 md:h-40 bg-neutral-900/60 backdrop-blur-xl border border-neutral-800/80 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-neutral-800/80 transition-all duration-300 shadow-xl cursor-pointer group-hover:border-[var(--hover-color)] hover:shadow-[0_0_25px_var(--hover-color)]"
                >
                  <div
                    className="text-4xl md:text-5xl transform group-hover:scale-110 transition-transform duration-300"
                    style={{ filter: `drop-shadow(0 0 10px ${skill.color}55)` }}
                  >
                    {iconComponentMap[skill.icon] || <FaCode className="text-white" />}
                  </div>
                  <span className="text-neutral-300 font-bold text-xs md:text-sm text-center tracking-wide group-hover:text-white transition-colors line-clamp-2">
                    {skill.name}
                  </span>

                  <div
                    className="absolute inset-0 rounded-2xl -z-10 opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{ backgroundColor: skill.color }}
                  ></div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
