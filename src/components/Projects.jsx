import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaUsersCog,
  FaHotel,
  FaCar,
  FaCreditCard,
  FaClipboardList,
  FaCheckCircle,
} from "react-icons/fa";
import { projectsData } from "../data/portfolioData";

const Projects = () => {
  const iconMap = [
    <FaUsersCog key="crm" />,
    <FaHotel key="hotel" />,
    <FaCar key="car" />,
    <FaCreditCard key="dues" />,
    <FaClipboardList key="complaint" />,
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-neutral-950 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-red-500 uppercase block mb-2">
            PRODUCTION_APPLICATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-800 mx-auto rounded-full shadow-[0_0_15px_rgba(220,38,38,0.4)]"></div>
          <p className="text-neutral-400 mt-8 max-w-2xl mx-auto text-base md:text-lg font-light">
            Full-stack production applications built across Java, Spring Boot, and MERN ecosystems.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full"
            >
              <motion.div
                whileHover={{ y: -6 }}
                style={{ "--card-color": project.color }}
                className="h-full bg-neutral-900/30 backdrop-blur-xl border border-neutral-800/80 p-1.5 rounded-3xl transition-all duration-500 hover:border-[var(--card-color)] hover:shadow-[0_0_30px_-10px_var(--card-color)] relative overflow-hidden flex flex-col"
              >
                {/* Header Container */}
                <div className="h-48 bg-neutral-950/80 rounded-2xl relative overflow-hidden border border-neutral-800/50 group-hover:border-[var(--card-color)]/30 transition-colors flex items-center justify-center">
                  <div
                    className="text-6xl text-neutral-600 group-hover:text-[var(--card-color)] transition-colors duration-500 transform group-hover:scale-110"
                    style={{
                      filter: `drop-shadow(0 0 12px ${project.color}66)`,
                    }}
                  >
                    {iconMap[index % iconMap.length]}
                  </div>

                  {/* Hover Overlay with Action Buttons */}
                  <div className="absolute inset-0 bg-neutral-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-md p-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 bg-neutral-900 text-white rounded-full hover:scale-105 transition-transform border border-neutral-700 hover:border-red-500 hover:bg-red-600 shadow-xl flex items-center gap-2 text-xs font-bold"
                      >
                        <FaGithub size={16} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 bg-red-600 text-white rounded-full hover:scale-105 transition-transform shadow-xl hover:bg-red-500 flex items-center gap-2 text-xs font-bold"
                      >
                        <FaExternalLinkAlt size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-[var(--card-color)] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>

                    {/* Features List */}
                    {project.features && (
                      <div className="mb-6 space-y-1.5 p-3 bg-neutral-950/60 border border-neutral-800/60 rounded-xl">
                        <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase block mb-1">
                          KEY FEATURES
                        </span>
                        {project.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                            <FaCheckCircle className="text-red-500 text-[10px] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-950/80 text-neutral-400 border border-neutral-800/80 font-mono font-bold uppercase tracking-wider group-hover:border-[var(--card-color)]/40 group-hover:text-neutral-200 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
