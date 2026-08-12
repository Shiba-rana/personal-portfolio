import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import { experiencesData, educationData } from "../data/portfolioData";

const ExperienceEducation = () => {
  return (
    <section id="experience" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-red-900/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Neural Trajectory (Experience Timeline) */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-xs font-mono font-bold tracking-[0.3em] text-red-500 uppercase block mb-2">
                REALTIME 
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight uppercase">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                  Experiences
                </span>
              </h2>
            </motion.div>

            {/* Vertical Timeline */}
            <div className="relative pl-6 md:pl-8 border-l border-neutral-800 space-y-12">
              {experiencesData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Timeline Node Icon/Dot */}
                  <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-neutral-950 border-2 border-red-500 flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.5)] group-hover:scale-125 transition-transform duration-300">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>

                  {/* Card Container */}
                  <div className="bg-neutral-900/30 backdrop-blur-xl border border-neutral-800/80 rounded-3xl p-6 sm:p-8 hover:border-red-500/40 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
                        {exp.duration}
                      </span>
                      <FaBriefcase className="text-neutral-600 text-sm group-hover:text-red-400 transition-colors" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-neutral-400 font-mono text-sm font-semibold mb-4">
                      {exp.company}
                    </p>

                    {/* Bullet List for Responsibilities */}
                    {exp.responsibilities && exp.responsibilities.length > 0 ? (
                      <ul className="space-y-2.5 mt-4 border-t border-neutral-800/60 pt-4">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm font-light">
                            <FaCheckCircle className="text-red-500 text-xs mt-1 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    ) : exp.description ? (
                      <p className="text-neutral-300 text-sm font-light leading-relaxed border-t border-neutral-800/60 pt-4">
                        {exp.description}
                      </p>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Base Foundation (Education) */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-xs font-mono font-bold tracking-[0.3em] text-red-500 uppercase block mb-2">
                BASE_FOUNDATION
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight uppercase">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                  Education
                </span>
              </h2>
            </motion.div>

            {/* Education Timeline - Compact & Sleek matching Experience */}
            <div className="relative pl-6 md:pl-8 border-l border-neutral-800 space-y-12">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  

                  {/* Card Container */}
                  <div className="bg-neutral-900/30 backdrop-blur-xl border border-neutral-800/80 rounded-3xl p-6 sm:p-8 hover:border-red-500/40 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
                        {edu.duration}
                      </span>
                      <FaGraduationCap className="text-neutral-600 text-sm group-hover:text-red-400 transition-colors" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-neutral-400 font-mono text-sm font-semibold mb-3">
                      {edu.institution}
                    </p>

                    {/* Score & Focus Chips */}
                    <div className="mt-4 pt-4 border-t border-neutral-800/60 flex flex-wrap items-center gap-2">
                      {edu.cgpa && (
                        <span className="text-xs px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 font-mono font-bold rounded-full">
                          SCORE: {edu.cgpa}
                        </span>
                      )}
                      {edu.focus &&
                        edu.focus.split("•").map((item, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 bg-neutral-950 border border-neutral-800/80 rounded-full text-neutral-300 font-medium"
                          >
                            {item.trim()}
                          </span>
                        ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
