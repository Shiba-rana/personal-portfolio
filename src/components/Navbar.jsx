import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
  FaLaptopCode,
  FaBriefcase,
  FaAward,
  FaTrophy,
} from "react-icons/fa";

const Navbar = () => {
  const links = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Mastery", href: "#mastery", icon: <FaTrophy /> },
    { name: "Experience", href: "#experience", icon: <FaBriefcase /> },
    { name: "Skills", href: "#skills", icon: <FaLaptopCode /> },
    { name: "Projects", href: "#projects", icon: <FaFolderOpen /> },
    { name: "Certifications", href: "#certifications", icon: <FaAward /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 md:top-1/2 md:right-8 md:bottom-auto md:left-auto md:translate-x-0 -translate-y-0 md:-translate-y-1/2 z-50">
      <div className="flex flex-row md:flex-col gap-1.5 sm:gap-2 md:gap-4 p-1.5 md:p-0 bg-neutral-950/80 md:bg-transparent backdrop-blur-2xl md:backdrop-blur-none border md:border-0 border-neutral-800/80 rounded-full shadow-2xl">
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -3, 0],
            }}
            transition={{
              opacity: { duration: 0.4, delay: 0.1 + index * 0.04 },
              scale: { duration: 0.4, delay: 0.1 + index * 0.04 },
              y: {
                duration: 2 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
                delay: index * 0.1,
              },
            }}
            className="relative group p-2 sm:p-3 md:p-3.5 bg-neutral-900/50 md:bg-neutral-900/40 backdrop-blur-2xl border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:bg-red-500/10 hover:border-red-500/30 transition-all shadow-xl hover:shadow-red-500/20 active:scale-95"
          >
            <span className="text-sm sm:text-base md:text-lg relative z-10 block">{link.icon}</span>

            <div className="absolute inset-0 rounded-full bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md scale-150"></div>

            {/* Desktop Tooltip */}
            <span className="hidden md:block absolute right-full mr-5 top-1/2 -translate-y-1/2 px-3.5 py-1.5 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-xl text-xs font-black uppercase tracking-[0.2em] text-red-500 opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none shadow-[0_0_20px_rgba(0,0,0,0.5)] transform translate-x-4 group-hover:translate-x-0">
              {link.name}
            </span>
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
