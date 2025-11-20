"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useLanguage } from "./LanguageProvider";

const historyImages = [
  "http://www.dellapenna.it/it/sites/default/files/styles/people_650_500/public/00-dellaPenna-Fiat-18BL-Emilio%2520della%2520PENNA-1911.jpg",
  "http://www.dellapenna.it/it/sites/default/files/styles/people_650_500/public/01-dellaPenna-Linee-Aeree-Italiane-1946.jpg",
  "http://www.dellapenna.it/it/sites/default/files/styles/people_650_500/public/02-dellaPenna-Amalfi-1954.jpg",
  "http://www.dellapenna.it/it/sites/default/files/styles/people_650_500/public/06-dellaPenna-MercedesBenz-O303-Orlandi-Globus_0.jpg",
  "http://www.dellapenna.it/it/sites/default/files/styles/people_650_500/public/03-dellaPenna-Fiat-309DS-Alitalia.jpg",
  "http://www.dellapenna.it/it/sites/default/files/styles/people_650_500/public/07-dellaPenna-MercedesBenz-O303-Padane-Globus.jpg",
  "http://www.dellapenna.it/it/sites/default/files/styles/people_650_500/public/29-dellaPenna-IRIZAR-CENTURY%2B.jpg",
  "http://www.dellapenna.it/it/sites/default/files/styles/people_650_500/public/11-dellaPenna-Volvo-B12-Kuoni-FLR.jpg",
  "http://www.dellapenna.it/it/sites/default/files/styles/people_650_500/public/17-dellaPenna-Neoplan-S315-FLR_0.jpg",
];

export default function History() {
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

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} id="history" className="relative py-24 md:py-40 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
      }} />

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/3 right-10 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-1/3 left-10 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          ref={inViewRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>{t("history.title")}</SectionTitle>
          
          {/* Timeline accent */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="flex items-center justify-center mb-16 gap-4"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-xs" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg"
            >
              <Clock className="w-6 h-6 text-white" />
            </motion.div>
            <div className="h-px bg-gradient-to-r from-orange-400 via-orange-400 to-transparent flex-1 max-w-xs" />
          </motion.div>

          {/* Photo grid with stagger and 3D effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {historyImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -15, 
                  rotateY: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Vintage photo shadow */}
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-400/20 via-orange-400/20 to-red-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Photo frame */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 aspect-[4/3] bg-gradient-to-br from-amber-50 to-orange-50 p-3">
                  {/* Inner frame */}
                  <div className="relative h-full overflow-hidden rounded-lg bg-white shadow-inner">
                    <motion.img
                      src={image}
                      alt={`Historical photo ${index + 1}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Vintage overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-orange-900/10 opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
                    
                    {/* Sepia tone on hover */}
                    <motion.div
                      className="absolute inset-0 bg-amber-100/0 group-hover:bg-amber-100/20 transition-all duration-500"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  </div>
                  
                  {/* Photo number badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                    className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg text-white font-bold text-sm z-10"
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Tape effect on corners */}
                <div className="absolute -top-1 left-8 w-16 h-6 bg-amber-100/60 backdrop-blur-sm rotate-[-5deg] shadow-sm" />
                <div className="absolute -top-1 right-8 w-16 h-6 bg-amber-100/60 backdrop-blur-sm rotate-[5deg] shadow-sm" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

