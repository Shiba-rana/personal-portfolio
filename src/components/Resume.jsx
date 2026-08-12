import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaDownload,
  FaEye,
  FaFileAlt,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Resume = () => {
  const [showPdfModal, setShowPdfModal] = useState(false);
  const resumeUrl = "/resume_shibananda.pdf";

  return (
    <section
      id="resume"
      className="py-24 bg-neutral-950 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-neutral-900/20 backdrop-blur-3xl border border-neutral-800/50 rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-6 right-8 text-4xl text-neutral-800/20 pointer-events-none select-none">
            <FaFileAlt />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight"
          >
            Interested in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              working together?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-neutral-400 mb-10 max-w-xl mx-auto text-base md:text-lg leading-relaxed font-light"
          >
            I&apos;m currently seeking new opportunities. View or download my official resume below to learn more about my background and skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            {/* View Resume Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowPdfModal(true)}
              className="inline-flex items-center gap-2 px-7 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-full transition-all shadow-lg shadow-red-900/30 cursor-pointer"
            >
              <FaEye size={16} />
              <span>View Resume</span>
            </motion.button>

            {/* Download Resume Button */}
            <motion.a
              href={resumeUrl}
              download="Shibananda_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-3 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-red-500/50 font-bold text-sm rounded-full transition-all shadow-lg cursor-pointer"
            >
              <FaDownload size={15} />
              <span>Download PDF</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {showPdfModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPdfModal(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            ></motion.div>

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-5xl h-[85vh] bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-2xl flex flex-col z-10 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-600/10 text-red-500 rounded-xl">
                    <FaFileAlt size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-none">
                      Shibananda&apos;s Resume
                    </h3>
                    <p className="text-neutral-500 text-xs mt-1">
                      resume_shibananda.pdf
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded-xl transition-colors text-xs flex items-center gap-2 font-semibold"
                    title="Open PDF in new tab"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span className="hidden sm:inline">Open in Tab</span>
                  </a>

                  <a
                    href={resumeUrl}
                    download="Shibananda_Resume.pdf"
                    className="p-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl transition-colors text-xs flex items-center gap-2 font-semibold shadow-lg shadow-red-900/20"
                    title="Download PDF"
                  >
                    <FaDownload size={14} />
                    <span className="hidden sm:inline">Download</span>
                  </a>

                  <button
                    onClick={() => setShowPdfModal(false)}
                    className="p-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white rounded-xl transition-colors"
                    title="Close"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>
              </div>

              {/* PDF Preview Frame */}
              <div className="flex-grow w-full bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800/60">
                <iframe
                  src={`${resumeUrl}#toolbar=1&navpanes=0`}
                  title="Resume Preview"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;
