import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaTimes, FaInfoCircle } from "react-icons/fa";

const Hero = () => {
  const [showDetails, setShowDetails] = useState(false);

  const detailsText =
    "Welcome! I'm a passionate creative professional with expertise in web development. I specialize in creating beautiful, functional digital experiences that bring ideas to life through innovative design and clean code.";

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center bg-neutral-950 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/5 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/[0.02] rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <h2 className="text-xs md:text-sm text-red-500 font-bold tracking-[0.5em] uppercase mb-6 px-4 py-2 border border-red-500/20 rounded-full bg-red-500/5 backdrop-blur-sm">
            MERN STACK & JAVA BACKEND DEVELOPER
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-9xl font-black tracking-tight text-white mb-8 group flex justify-center"
        >
          Hi, I&apos;m&nbsp;
          <span className="flex">
            {"Shiva".split("").map((letter, index) => (
              <motion.span
                key={index}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: 0,
                  scale: 1.2,
                  color: "#ef4444",
                  transition: { type: "spring", stiffness: 300, duration: 0.2 },
                }}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-600 to-neutral-900 cursor-default"
                style={{
                  WebkitBackgroundClip: "text",
                  display: "inline-block",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-xl md:text-3xl text-neutral-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          Building{" "}
          <span className="text-white font-bold border-b border-red-600/50 pb-1">
            scalable
          </span>{" "}
          ,{" "}
          <span className="text-white font-bold border-b border-red-600/50 pb-1">
            modern
          </span>{" "}
          And{" "}
          <span className="text-white font-bold border-b border-red-600/50 pb-1">
            production-ready
          </span>{" "}
          across the MERN and Java ecosystems.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => setShowDetails(true)}
          className="mb-12 flex items-center gap-2 mx-auto text-xs font-black tracking-[0.2em] text-neutral-500 hover:text-red-500 transition-colors uppercase group"
        >
          <FaInfoCircle className="text-lg group-hover:rotate-12 transition-transform" />
          My Details
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-8 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="group relative flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full overflow-hidden transition-all duration-500 shadow-xl shadow-red-900/20"
            initial={{ width: "64px", height: "64px" }}
            whileHover={{
              width: "240px",
              boxShadow: "0 0 30px rgba(220, 38, 38, 0.3)",
            }}
          >
            <div className="flex items-center justify-center w-full px-6">
              <motion.span className="whitespace-nowrap font-black tracking-wide ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                EXPLORE MY WORK
              </motion.span>
            </div>
          </motion.a>

          <motion.a
            href="#contact"
            className="group relative flex items-center justify-center bg-transparent border-2 border-neutral-800 text-white rounded-full overflow-hidden transition-all duration-500 hover:border-red-600/50"
            initial={{ width: "64px", height: "64px" }}
            whileHover={{
              width: "180px",
              backgroundColor: "rgba(220, 38, 38, 0.05)",
            }}
          >
            <div className="flex items-center justify-center w-full px-6">
              <FaPaperPlane className="text-xl min-w-[32px]" />
              <motion.span className="whitespace-nowrap font-black tracking-wide ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                LET&apos;S TALK
              </motion.span>
            </div>
          </motion.a>
        </motion.div>
      </div>

      <AnimatePresence>
        {showDetails && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDetails(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-lg bg-[#1e293b] rounded-3xl p-10 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-neutral-800/50 overflow-hidden"
            >
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>

              <div className="space-y-4 mb-8">
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-[0.1em] leading-tight flex flex-col">
                  <span>PROFESSIONAL</span>
                  <span className="text-red-500">PROFILE</span>
                </h3>
                <div className="w-16 h-1 bg-red-600/30 rounded-full"></div>
              </div>

              <p className="text-white text-lg leading-relaxed font-medium">
                {detailsText}
              </p>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neutral-950 to-transparent"></div>
    </div>
  );
};

export default Hero;
