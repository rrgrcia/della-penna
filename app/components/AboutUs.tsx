"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, TrendingUp, Shield, Star } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useLanguage } from "./LanguageProvider";

export default function AboutUs() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  const highlights = [
    {
      icon: Award,
      titleKey: "about.highlight1.title",
      descKey: "about.highlight1.desc",
      color: "from-orange-500 to-red-500",
      glowColor: "orange",
    },
    {
      icon: TrendingUp,
      titleKey: "about.highlight2.title",
      descKey: "about.highlight2.desc",
      color: "from-blue-500 to-cyan-500",
      glowColor: "blue",
    },
    {
      icon: Shield,
      titleKey: "about.highlight3.title",
      descKey: "about.highlight3.desc",
      color: "from-green-500 to-emerald-500",
      glowColor: "green",
    },
    {
      icon: Star,
      titleKey: "about.highlight4.title",
      descKey: "about.highlight4.desc",
      color: "from-purple-500 to-pink-500",
      glowColor: "purple",
    },
  ];

  return (
    <section 
      ref={ref}
      id="about-us" 
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-white" />
      
      {/* Floating decorative elements with parallax */}
      <motion.div 
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-200 rounded-full blur-3xl opacity-20"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      />
      <motion.div 
        className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-blue-200 rounded-full blur-3xl opacity-15"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          ref={inViewRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>{t("about.title")}</SectionTitle>
          
          {/* Main content card with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 20 }}
            animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            style={{ 
              rotateX,
              transformPerspective: 1200,
              transformStyle: "preserve-3d"
            }}
            className="relative mb-20 group"
          >
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
            
            <div className="relative bg-white rounded-[2rem] shadow-2xl p-10 md:p-16 overflow-hidden border border-gray-100">
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-400/10 via-red-400/5 to-transparent rounded-full -translate-y-48 translate-x-48" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-400/10 via-cyan-400/5 to-transparent rounded-full translate-y-40 -translate-x-40" />
              
              <div className="relative prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-8">
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-transparent first-letter:bg-gradient-to-br first-letter:from-orange-600 first-letter:to-red-600 first-letter:bg-clip-text first-letter:mr-2 first-letter:float-left first-letter:mt-2"
                >
                  {t("about.p1")}
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl md:text-2xl text-gray-700 font-light"
                >
                  {t("about.p2")}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative group/quote"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 rounded-2xl blur-sm group-hover/quote:blur-md transition-all" />
                  <div className="relative bg-gradient-to-r from-orange-50/90 to-orange-100/70 backdrop-blur-sm border-l-4 border-orange-600 p-8 rounded-2xl shadow-lg">
                    <motion.div
                      className="absolute top-4 left-4 text-orange-600/20 text-6xl font-serif"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      "
                    </motion.div>
                    <p className="text-xl md:text-2xl text-gray-800 italic font-light relative z-10 pl-8">
                      {t("about.quote")}
                    </p>
                  </div>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-xl md:text-2xl text-gray-700 font-light"
                >
                  {t("about.p3")}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced highlight cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Card glow */}
                <motion.div 
                  className={`absolute -inset-1 bg-gradient-to-br ${highlight.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                  animate={{
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                
                <div className="relative h-full bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-orange-200 overflow-hidden">
                  {/* Animated background pattern */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    animate={{
                      background: [
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 50%, transparent 100%)',
                      ],
                      backgroundPosition: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="mb-6"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${highlight.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <highlight.icon className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                      {t(highlight.titleKey)}
                    </h3>
                    
                    <p className="text-gray-600 text-base leading-relaxed">
                      {t(highlight.descKey)}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-100/50 to-transparent rounded-tl-full group-hover:w-32 group-hover:h-32 transition-all duration-500" />
                  
                  {/* Particle effect on hover */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full ${
                          highlight.glowColor === "orange" ? "bg-orange-400" :
                          highlight.glowColor === "blue" ? "bg-blue-400" :
                          highlight.glowColor === "green" ? "bg-green-400" :
                          "bg-purple-400"
                        }`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: (Math.random() - 0.5) * 100,
                          y: (Math.random() - 0.5) * 100,
                        }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

