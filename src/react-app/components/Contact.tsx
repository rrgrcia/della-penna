import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useLanguage } from "@/react-app/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0"
        style={{ scale }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(http://www.dellapenna.it/it/sites/default/files/banner%20dp%20last.jpg)",
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-orange-900/60"
          style={{ opacity }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          ref={inViewRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle light>{t("contact.title")}</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-10 mt-20">
            {/* Naples Office */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-white/20 overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-full" />
                
                {/* Office badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold mb-6 shadow-lg"
                >
                  <Building2 size={18} />
                  <span>{t("contact.naples")}</span>
                </motion.div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text mb-8">
                  Naples
                </h3>
                
                <div className="space-y-6 relative z-10">
                  <motion.div 
                    className="flex items-start group/item"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-gray-800">+39 081 561 4255</p>
                      <p className="text-gray-600 mt-1">Fax: +39 081 561 4242</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start group/item"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <a 
                      href="mailto:info@dellapenna.it" 
                      className="text-lg md:text-xl text-gray-800 hover:text-orange-600 transition-colors font-medium underline decoration-2 decoration-orange-400/30 hover:decoration-orange-600"
                    >
                      info@dellapenna.it
                    </a>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start group/item"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg">Via Argine, 506</p>
                      <p className="text-gray-800 text-lg">80147 Napoli, Italia</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Genoa Office */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-white/20 overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-transparent rounded-bl-full" />
                
                {/* Office badge */}
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold mb-6 shadow-lg"
                >
                  <Building2 size={18} />
                  <span>{t("contact.genova")}</span>
                </motion.div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text mb-8">
                  Genova
                </h3>
                
                <div className="space-y-6 relative z-10">
                  <motion.div 
                    className="flex items-start group/item"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-gray-800">+39 010 637 3176</p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start group/item"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <a 
                      href="mailto:infogenova@dellapenna.it" 
                      className="text-lg md:text-xl text-gray-800 hover:text-blue-600 transition-colors font-medium underline decoration-2 decoration-blue-400/30 hover:decoration-blue-600"
                    >
                      infogenova@dellapenna.it
                    </a>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start group/item"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg">Via Pionieri ed Aviatori d'Italia</p>
                      <p className="text-gray-800 text-lg">16154 Genova, Italia</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-white/90 text-base mt-16 font-light tracking-wide"
          >
            {t("contact.vat")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
