import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-neutral-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-[0.2em] leading-tight flex flex-col">
                <span>GET IN</span>
                <span>TOUCH</span>
              </h2>
              <div className="w-20 h-1 bg-neutral-800 rounded-full"></div>
            </div>

            <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
              Ready to start your next project? I&apos;d love to hear from you. Let&apos;s
              create something amazing together!
            </p>

            <div className="space-y-10">
              {[
                {
                  icon: <FaEnvelope className="text-white text-xl" />,
                  label: "EMAIL",
                  value: "shibanandarana.dev@gmail.com",
                },
                {
                  icon: <FaPhone className="text-white text-xl" />,
                  label: "PHONE",
                  value: "+91 9348355350",
                },
                {
                  icon: <FaMapMarkerAlt className="text-white text-xl" />,
                  label: "LOCATION",
                  value: "Bhubaneswar",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-lg group-hover:border-red-500/50 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-black tracking-[0.2em] text-sm mb-1">
                      {item.label}
                    </p>
                    <p className="text-neutral-400 font-medium group-hover:text-red-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-transparent border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 border border-red-500/0 group-hover:border-red-500/20 transition-all rounded-3xl pointer-events-none"></div>

            <h3 className="text-4xl font-black text-white tracking-[0.2em] mb-8">
              SEND MESSAGE
            </h3>

            <p className="text-neutral-400 text-sm mb-10 leading-relaxed font-medium">
              Your message will be forwarded directly to my email: <br />
              <span className="text-red-500 font-bold underline cursor-pointer">
                shibanandarana.dev@gmail.com
              </span>
              .
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {[
                { placeholder: "Your Name", type: "text" },
                { placeholder: "Your Email", type: "email" },
                { placeholder: "Subject", type: "text" },
              ].map((input, idx) => (
                <input
                  key={idx}
                  type={input.type}
                  placeholder={input.placeholder}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-500/50 transition-all placeholder:text-neutral-600 font-medium"
                />
              ))}

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-500/50 transition-all placeholder:text-neutral-600 font-medium resize-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-neutral-900 border border-neutral-800 text-white font-bold text-lg rounded-full shadow-xl hover:bg-black transition-all hover:border-red-500/30"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
