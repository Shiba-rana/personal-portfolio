import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <div>
            <span className="text-3xl font-black bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent tracking-tighter">
              PORTFOLIO.
            </span>
            <p className="text-neutral-500 mt-4 text-balanced max-w-xs mx-auto md:mx-0">
              Designing and developing digital solutions with high-end
              aesthetics and clean, scalable code.
            </p>
          </div>

          <div className="flex justify-center space-x-8">
            {[
              { icon: <FaGithub />, link: "https://github.com/Silurana", color: "hover:text-white" },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/shiba-rana-a08590290",
                color: "hover:text-[#0077B5]",
                
              },
              { icon: <FaTwitter />, link: "#", color: "hover:text-[#1DA1F2]" },
              {
                icon: <FaInstagram />,
                link: "#",
                color: "hover:text-[#E4405F]",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={social.link}
                className={`text-2xl text-neutral-600 transition-colors ${social.color}` }
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* <div className="text-neutral-600 md:text-right">
            <p className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">
              Based in
            </p>
            <p className="text-lg">Greater Mars Area, Space</p>
          </div> */}
        </div>

        <div className="border-t border-neutral-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium tracking-wide text-neutral-600">
          <p className="hover:text-neutral-400 transition-colors">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved. |
            Designed By <span className="text-red-500 font-bold">Shiva</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
