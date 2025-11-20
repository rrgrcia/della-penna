"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Award, Globe, Users, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ scale }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(http://www.dellapenna.it/it/sites/all/themes/wunderkind/img/cover.jpg)",
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-orange-900/50"
          style={{ opacity }}
        />
      </motion.div>
      
      {/* Floating geometric shapes */}
      {windowSize.width > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
                rotate: Math.random() * 360,
                scale: 0.5 + Math.random() * 0.5,
              }}
              animate={{
                y: [null, Math.random() * windowSize.height],
                rotate: [null, (Math.random() - 0.5) * 720],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            >
              {i % 3 === 0 ? (
                <div className="w-4 h-4 border-2 border-orange-400/40 rounded-full" />
              ) : i % 3 === 1 ? (
                <div className="w-3 h-3 bg-white/20 rounded-sm rotate-45" />
              ) : (
                <div className="w-6 h-1 bg-gradient-to-r from-orange-400/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      )}

      <motion.div 
        className="relative z-10 text-center px-4 max-w-7xl mx-auto"
        style={{ y }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Premium badge with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 mb-10 shadow-2xl shadow-orange-500/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-orange-400" />
            </motion.div>
            <span className="text-white text-base font-semibold tracking-wider">{t("hero.badge")}</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-5 h-5 text-orange-400" />
            </motion.div>
          </motion.div>

          {/* Main title with advanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1 
              className="text-7xl md:text-9xl lg:text-[12rem] font-bold mb-8 leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.span
                className="inline-block relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 bg-clip-text text-transparent blur-xl opacity-50"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  <em>della PENNA</em>
                </motion.span>
                <motion.span
                  className="relative bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  <em>della PENNA</em>
                </motion.span>
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Subtitle with stagger animation */}
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-16 tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.span 
              className="inline-block border-b-4 border-orange-400 pb-3 px-8"
              whileHover={{ scale: 1.05, borderColor: "#fb923c" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {t("hero.subtitle")}
            </motion.span>
          </motion.h2>
          
          {/* Tagline with fade in */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-2xl md:text-4xl text-white/95 font-light tracking-wide mb-20 max-w-4xl mx-auto leading-relaxed"
          >
            <span className="relative">
              {t("hero.tagline")}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
              />
            </span>
          </motion.p>

          {/* Enhanced stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { icon: Globe, labelKey: "hero.stat1.label", valueKey: "hero.stat1.value", unitKey: "hero.stat1.unit" },
              { icon: Users, labelKey: "hero.stat2.label", valueKey: "hero.stat2.value", unitKey: "hero.stat2.unit" },
              { icon: Award, labelKey: "hero.stat3.label", valueKey: "hero.stat3.value", unitKey: "hero.stat3.unit" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.08, y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative glass-card p-8 rounded-3xl border-2 border-white/20 group-hover:border-orange-400/50 transition-all duration-500">
                  <motion.div
                    className="mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <stat.icon className="w-12 h-12 text-orange-400 mx-auto group-hover:text-orange-300 transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {t(stat.valueKey)}
                  </h3>
                  <p className="text-orange-300 text-sm font-semibold mb-1">{t(stat.unitKey)}</p>
                  <p className="text-white/70 text-sm tracking-wide">{t(stat.labelKey)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.a
        href="#about-us"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white hover:text-orange-400 transition-colors cursor-pointer group z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity font-semibold">{t("hero.scroll")}</span>
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-orange-400/30 rounded-full blur-lg"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <ChevronDown size={44} className="drop-shadow-2xl relative z-10" />
          </div>
        </motion.div>
      </motion.a>
    </section>
  );
}

