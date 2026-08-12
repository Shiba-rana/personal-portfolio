import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaStar, FaCodeBranch, FaCaretDown } from "react-icons/fa";

const OpenSource = () => {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Red & Dark color palette for GitHub heatmap matching portfolio
  const shades = [
    "bg-[#161b22] border-[#21262d]", // level 0 (empty)
    "bg-red-950/80 border-red-900/40 shadow-[0_0_5px_rgba(239,68,68,0.15)]", // level 1
    "bg-red-800/90 border-red-700/50 shadow-[0_0_8px_rgba(239,68,68,0.35)]", // level 2
    "bg-red-600 border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.55)]", // level 3
    "bg-red-500 border-red-400 shadow-[0_0_15px_rgba(248,113,113,0.85)]", // level 4 (highest)
  ];

  // Exact 22-column x 7-row matrix matching the reference image layout pattern
  const gridData = [
    [0, 0, 0, 3, 0, 3, 3, 0, 0, 1, 0, 0, 3, 0, 0, 3, 3, 3, 4, 1, 1, 3],
    [0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 4, 0, 1, 0, 0, 0, 3, 3, 3, 3, 3, 0],
    [0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 0, 3, 4, 4, 3, 3, 3],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 0, 3, 3, 3, 3, 3, 1, 4],
    [0, 0, 0, 3, 0, 0, 0, 0, 3, 3, 0, 3, 0, 1, 2, 1, 0, 0, 4, 3, 3, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 3, 2, 3, 0, 0, 0, 3, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 0, 0, 0, 0, 2, 2, 1, 1],
  ];

  return (
    <section id="opensource" className="py-16 md:py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-red-600/5 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 md:w-96 md:h-96 bg-red-900/5 rounded-full blur-[140px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0c0d0e]/95 backdrop-blur-2xl border border-neutral-800/90 rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12"
        >
          {/* Left Text & Stats Column */}
          <div className="w-full lg:flex-1 space-y-6 md:space-y-8">
            {/* Header Title */}
            <div className="flex items-center gap-3.5 md:gap-4">
              <div className="p-2.5 sm:p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                <FaGithub size={28} className="md:w-8 md:h-8" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-2xl font-black text-white tracking-tight flex items-center gap-2 sm:gap-3">
                <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                  Open Source
                </span>{" "}
                Contribution
              </h2>
            </div>

            {/* Description */}
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-xl">
              My repository activity reflects a consistency in{" "}
              <strong className="text-white font-bold">Daily Commits</strong>. I treat every push as a step towards better optimization.
            </p>

            {/* Metrics */}
            <div className="flex items-center gap-8 sm:gap-12 pt-1 sm:pt-2">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                  100%
                </div>
                <div className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mt-1">
                  Consistency
                </div>
              </div>
              <div className="h-8 sm:h-10 w-[1px] bg-neutral-800"></div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                  25+
                </div>
                <div className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mt-1">
                  Public Repos
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2 sm:pt-4">
              <motion.a
                href="https://github.com/Shiba-rana"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-white hover:bg-neutral-200 text-neutral-950 font-bold text-xs sm:text-sm rounded-full transition-all shadow-xl hover:shadow-[0_0_25px_rgba(220,38,38,0.3)] group cursor-pointer"
              >
                <span>Visit Lab Archive</span>
                <FaGithub size={18} className="group-hover:rotate-12 transition-transform" />
              </motion.a>
            </div>
          </div>

          {/* Center Heatmap Card (Replicating Reference Image Pattern) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-xl bg-[#0d1117]/95 border border-[#30363d] rounded-2xl md:rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden group/card"
          >
            {/* System Status & Settings Header */}
            <div className="flex items-center justify-between mb-4 border-b border-[#21262d] pb-3">
              <span className="text-xs font-mono font-bold tracking-wider text-red-500/90 uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0"></span>
                <span>Shiba-rana</span>
              </span>

              <div className="flex items-center gap-1 text-xs text-neutral-400 font-sans hover:text-white transition-colors cursor-pointer select-none">
                <span>{hoveredCell ? `${hoveredCell.level > 0 ? hoveredCell.level * 3 : 'No'} contributions` : 'Contribution settings'}</span>
                <FaCaretDown size={10} />
              </div>
            </div>

            {/* Month Labels Header aligned with 22 columns */}
            <div className="flex justify-between text-[11px] font-sans text-neutral-400 mb-2 px-1">
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
            </div>

            {/* Heatmap Grid (22 Columns x 7 Rows matching reference image) */}
            <div
              className="gap-1 sm:gap-1.5 mb-4 justify-center"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(22, minmax(0, 1fr))",
              }}
            >
              {gridData.map((row, rIdx) =>
                row.map((level, cIdx) => {
                  const cellId = `${rIdx}-${cIdx}`;
                  return (
                    <motion.div
                      key={cellId}
                      onMouseEnter={() => setHoveredCell({ rIdx, cIdx, level })}
                      onMouseLeave={() => setHoveredCell(null)}
                      whileHover={{ scale: 1.35, zIndex: 20 }}
                      className={`aspect-square w-full max-w-[16px] rounded-[3px] border transition-all duration-300 cursor-pointer ${shades[level]}`}
                    />
                  );
                })
              )}
            </div>

            {/* Footer Stats & Less / More Legend (Matching Reference Image) */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-sans text-neutral-400 border-t border-[#21262d] pt-3">
              <div className="flex items-center gap-3 font-mono text-xs text-red-500/80">
                <span className="flex items-center gap-1 hover:text-red-400 transition-colors">
                  <FaStar size={11} /> 42 STARS
                </span>
                <span className="flex items-center gap-1 hover:text-red-400 transition-colors">
                  <FaCodeBranch size={11} /> 12 FORKS
                </span>
              </div>

              {/* Less / More Legend */}
              <div className="flex items-center gap-1.5 text-xs text-neutral-400 ml-auto">
                <span>Less</span>
                <div className="flex gap-1 items-center">
                  {shades.map((shadeClass, idx) => (
                    <span
                      key={idx}
                      className={`w-2.5 h-2.5 rounded-[2px] border ${shadeClass}`}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
