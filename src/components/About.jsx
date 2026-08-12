import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden bg-neutral-950"
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950 opacity-80"></div>
        {/* Red light accents */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000"></div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight uppercase">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              Me
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-800 mx-auto rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="idle"
            whileHover="hover"
            className="relative h-[500px] flex items-center justify-center perspective-1000 group w-full"
          >
            <motion.div
              variants={{
                idle: { x: 0, y: 0, rotate: -8, zIndex: 10 },
                hover: { x: -160, y: 30, rotate: -15, zIndex: 50 },
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="absolute w-64 h-80 cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden hover:border-red-500/50 transition-colors relative group/card"
              >
                <img
                  src="/port_img3.jpeg"
                  alt="Portfolio Image 3"
                  className="w-full h-full object-cover opacity-90 group-hover/card:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none"></div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{
                idle: { x: 0, y: 0, rotate: 5, zIndex: 20 },
                hover: { x: 0, y: -80, rotate: 0, zIndex: 50 },
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="absolute w-64 h-80 cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -25, 0], rotate: [0, -2, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-full h-full bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden hover:border-red-600/50 transition-colors relative group/card"
              >
                <img
                  src="/port_img2.jpeg"
                  alt="Portfolio Image 2"
                  className="w-full h-full object-cover opacity-90 group-hover/card:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none"></div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{
                idle: { x: 0, y: 0, rotate: -2, zIndex: 30 },
                hover: { x: 160, y: 30, rotate: 15, zIndex: 50 },
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="absolute w-64 h-80 cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="w-full h-full bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden hover:border-red-500/50 transition-colors relative group/card"
              >
                <img
                  src="/port_img1.jpeg"
                  alt="Portfolio Image 1"
                  className="w-full h-full object-cover opacity-90 group-hover/card:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent flex items-end p-4 pointer-events-none">
                  <p className="text-neutral-300 font-mono text-xs uppercase tracking-widest font-bold">
                    SOFTWARE DEVELOPER
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-900/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-red-500/0 via-red-600/50 to-red-500/0 hidden md:block"></div>

            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
              Crafting digital experiences with{" "}
              <span className="text-red-500">passion</span> and{" "}
              <span className="text-neutral-500">precision</span>.
            </h3>

            <div className="prose prose-invert max-w-none text-neutral-300">
              <p className="mb-6 text-lg leading-relaxed border-l-4 border-red-500/30 pl-4 text-balanced">
                I turn complex problems into simple, beautiful, and intuitive
                designs. My code is my craft, and I strive for excellence in
                every pixel.
              </p>
              <p className="mb-8 leading-relaxed text-neutral-400">
                Beyond the screen, I&apos;m a lifelong learner. I specialize in the Java &amp; MERN stack, building robust and scalable web applications that
                solve real-world problems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl border border-neutral-700/50 shadow-lg hover:shadow-red-900/20 group transition-all"
              >
                <h4 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-1">
                  1+
                </h4>
                <p className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">
                  Years of Experience
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl border border-neutral-700/50 shadow-lg hover:shadow-red-900/20 group transition-all"
              >
                <h4 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-red-600 mb-1">
                  10+
                </h4>
                <p className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">
                  Successful Projects
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
