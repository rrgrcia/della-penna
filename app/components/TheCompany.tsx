"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Compass, Users2, Languages } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useLanguage } from "../contexts/LanguageContext";

export default function TheCompany() {
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

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: MapPin,
      titleKey: "company.feature1.title",
      descKey: "company.feature1.desc",
    },
    {
      icon: Compass,
      titleKey: "company.feature2.title",
      descKey: "company.feature2.desc",
    },
    {
      icon: Users2,
      titleKey: "company.feature3.title",
      descKey: "company.feature3.desc",
    },
    {
      icon: Languages,
      titleKey: "company.feature4.title",
      descKey: "company.feature4.desc",
    },
  ];

  return (
    <section ref={ref} id="the-company" className="relative py-24 md:py-40 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-orange-50/20 to-gray-50" />
        
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <motion.div
          ref={inViewRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>{t("company.title")}</SectionTitle>
          
          {/* Feature icons grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-bold text-gray-900 mb-2">{t(feature.titleKey)}</h3>
                <p className="text-sm text-gray-600">{t(feature.descKey)}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Content with stagger animation */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {["company.p1", "company.p2", "company.p3"].map((textKey, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                className="relative group"
              >
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-orange-400/0 via-orange-400/5 to-orange-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.02 }}
                />
                <p className="relative text-lg md:text-xl text-gray-700 leading-relaxed p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300">
                  <span className="text-4xl font-bold text-orange-600/20 absolute -left-2 -top-2">{index + 1}</span>
                  <span className="relative z-10">{t(textKey)}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

