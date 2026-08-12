import { motion } from "framer-motion";
import { FaCode, FaBrain, FaServer, FaChartPie } from "react-icons/fa";
import { achievementsData } from "../data/portfolioData";

const Achievements = () => {
  return (
    <section id="mastery" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-[140px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-red-500 uppercase block mb-2">
            TECHNICAL_MASTERY
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight uppercase">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              Mastery
            </span>
          </h2>
        </motion.div>

        {/* 3 Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((item, index) => {
            const isLeetCode = item.id === "leetcode";
            const iconMap = {
              code: <FaCode className="text-red-500 text-xl" />,
              ai: <FaBrain className="text-purple-400 text-xl" />,
              production: <FaServer className="text-cyan-400 text-xl" />,
            };

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-neutral-900/30 backdrop-blur-xl border border-neutral-800/80 rounded-3xl p-8 relative flex flex-col justify-between overflow-hidden shadow-2xl group hover:border-red-500/40 transition-all duration-500"
              >
                {/* Glowing top-right background accent */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-25 transition-opacity"
                  style={{ backgroundColor: item.color }}
                ></div>

                <div>
                  {/* Top Metadata Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-inner group-hover:border-red-500/30 transition-colors">
                      {iconMap[item.iconType]}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-red-500/90 uppercase px-3 py-1 bg-red-500/5 border border-red-500/20 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-white tracking-tight mb-4 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* LeetCode Custom Visual Breakdown */}
                  {isLeetCode ? (
                    <div className="mb-6 space-y-4">
                      {/* Overall Progress Gauge/Bar */}
                      <div className="p-4 bg-neutral-950/80 border border-neutral-800/90 rounded-2xl">
                        <div className="flex justify-between items-baseline mb-2">
                          <span className="text-3xl font-black text-white tracking-tight flex items-baseline gap-1">
                            {item.totalSolved}
                            <span className="text-xs font-mono text-neutral-500 font-normal">
                              /{item.totalQuestions}
                            </span>
                          </span>
                          <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                            <FaChartPie size={10} /> SOLVED
                          </span>
                        </div>

                        {/* Combined Progress Bar */}
                        <div className="w-full h-2.5 bg-neutral-900 rounded-full overflow-hidden flex">
                          <div
                            style={{ width: `${(90 / 214) * 100}%` }}
                            className="bg-emerald-500 h-full"
                            title="Easy: 90"
                          ></div>
                          <div
                            style={{ width: `${(99 / 214) * 100}%` }}
                            className="bg-amber-500 h-full"
                            title="Medium: 99"
                          ></div>
                          <div
                            style={{ width: `${(25 / 214) * 100}%` }}
                            className="bg-red-500 h-full"
                            title="Hard: 25"
                          ></div>
                        </div>
                      </div>

                      {/* Difficulty Stat Chips */}
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {item.breakdown.map((b) => (
                          <div
                            key={b.level}
                            className="p-2.5 bg-neutral-950/60 border border-neutral-800/60 rounded-xl"
                          >
                            <div
                              className="text-xs font-bold uppercase tracking-wider mb-0.5"
                              style={{ color: b.color }}
                            >
                              {b.level}
                            </div>
                            <div className="text-sm font-black text-white font-mono">
                              {b.solved}
                              <span className="text-[9px] text-neutral-500 block font-normal">
                                /{b.total}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {/* Description */}
                  <p className="text-neutral-400 text-sm leading-relaxed font-light mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Metadata Label */}
                <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
                    {item.badge}
                  </span>
                  <span className="text-red-500/60 text-xs font-mono">✦</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
