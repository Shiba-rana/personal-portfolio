import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaCertificate,
  FaAward,
  FaCheckCircle,
  FaTimes,
  FaExternalLinkAlt,
  FaEye,
} from "react-icons/fa";
import { certificationsData } from "../data/portfolioData";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background light glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-red-500 uppercase block mb-2">
            CREDENTIALS_AND_ACCREDITATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Certifications.
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-800 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.4)]"></div>
          <p className="text-neutral-400 mt-6 max-w-xl mx-auto text-base font-light">
            Verified certifications and technical bootcamps validating skill proficiency.
          </p>
        </motion.div>

        {/* Data-driven grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-neutral-900/30 backdrop-blur-xl border border-neutral-800/80 rounded-3xl p-6 flex flex-col justify-between hover:border-red-500/40 transition-all duration-300 shadow-2xl group relative overflow-hidden"
            >
              {/* Top Card Media / Clickable Image Box */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="h-48 bg-neutral-950/80 rounded-2xl border border-neutral-800/80 relative flex items-center justify-center overflow-hidden mb-6 group-hover:border-red-500/30 transition-colors cursor-pointer"
              >
                {cert.image && cert.image !== "/" ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-neutral-600 group-hover:text-red-500 transition-colors duration-500">
                    <FaAward className="text-5xl drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]" />
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                      OFFICIAL_CREDENTIAL
                    </span>
                  </div>
                )}

                {/* Hover overlay with eye icon */}
                <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="px-4 py-2 bg-red-600 text-white rounded-full font-bold text-xs flex items-center gap-2 shadow-lg scale-90 group-hover:scale-100 transition-transform">
                    <FaEye size={14} />
                    <span>View Certificate</span>
                  </span>
                </div>

                <span className="absolute top-3 right-3 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full backdrop-blur-md z-10">
                  {cert.category}
                </span>
              </div>

              {/* Certificate Details */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-white tracking-tight mb-2 group-hover:text-red-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-neutral-400 font-medium text-sm mb-4">
                    Issued by <span className="text-white font-semibold">{cert.issuer}</span>
                  </p>

                  <div className="space-y-2 mb-6 p-3 bg-neutral-950/60 border border-neutral-800/60 rounded-xl text-xs font-mono">
                    <div className="flex justify-between text-neutral-400">
                      <span>DATE ISSUED:</span>
                      <span className="text-white font-bold">{cert.date}</span>
                    </div>
                    {cert.credentialId && (
                      <div className="flex justify-between text-neutral-400">
                        <span>CREDENTIAL ID:</span>
                        <span className="text-red-400 font-bold tracking-wider">{cert.credentialId}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 py-2.5 px-4 bg-neutral-900 hover:bg-red-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-neutral-800 hover:border-red-500 transition-all shadow-md cursor-pointer"
                  >
                    <FaCertificate size={12} />
                    <span>View Certificate</span>
                  </button>

                  <button
                    type="button"
                    className="p-2.5 bg-neutral-900/60 border border-neutral-800 text-emerald-400 hover:text-white rounded-xl text-xs flex items-center justify-center"
                    title="Verified Credential"
                  >
                    <FaCheckCircle size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            ></motion.div>

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-2xl flex flex-col z-10 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-600/10 text-red-500 rounded-xl">
                    <FaCertificate size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-none">
                      {selectedCert.title}
                    </h3>
                    <p className="text-neutral-400 text-xs mt-1">
                      Issued by {selectedCert.issuer} • {selectedCert.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {selectedCert.link && selectedCert.link !== "#" && (
                    <a
                      href={selectedCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded-xl transition-colors text-xs flex items-center gap-2 font-semibold"
                      title="Open Certificate Link"
                    >
                      <FaExternalLinkAlt size={12} />
                      <span className="hidden sm:inline">Open Link</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white rounded-xl transition-colors"
                    title="Close preview"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>
              </div>

              {/* Certificate Full Image Viewer Area */}
              <div className="flex-grow w-full bg-neutral-950 rounded-2xl overflow-auto border border-neutral-800/60 flex items-center justify-center p-4 min-h-[350px]">
                {selectedCert.image && selectedCert.image !== "/" ? (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-w-full max-h-[65vh] object-contain rounded-xl shadow-2xl border border-neutral-800"
                  />
                ) : (
                  <div className="text-center p-8">
                    <FaAward className="text-6xl text-red-500 mx-auto mb-4 animate-bounce" />
                    <h4 className="text-xl font-bold text-white mb-2">{selectedCert.title}</h4>
                    <p className="text-neutral-400 text-sm max-w-md mx-auto mb-2">
                      Issued by {selectedCert.issuer}
                    </p>
                    <p className="text-xs text-red-400 font-mono">
                      Credential ID: {selectedCert.credentialId}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
