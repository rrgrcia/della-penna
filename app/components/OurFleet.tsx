"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Wifi, Snowflake, Video, Navigation, Shield, Wrench } from "lucide-react";
import SectionTitle from "./SectionTitle";
import FleetGallery from "./FleetGallery";
import { useLanguage } from "../contexts/LanguageContext";

export default function OurFleet() {
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

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const amenities = [
    { icon: Snowflake, labelKey: "fleet.amenity1", color: "from-blue-500 to-cyan-500" },
    { icon: Video, labelKey: "fleet.amenity2", color: "from-purple-500 to-pink-500" },
    { icon: Wifi, labelKey: "fleet.amenity3", color: "from-orange-500 to-red-500" },
    { icon: Navigation, labelKey: "fleet.amenity4", color: "from-green-500 to-emerald-500" },
    { icon: Shield, labelKey: "fleet.amenity5", color: "from-indigo-500 to-blue-500" },
    { icon: Wrench, labelKey: "fleet.amenity6", color: "from-amber-500 to-orange-500" },
  ];

  return (
    <section ref={ref} id="our-fleet" className="relative py-24 md:py-40 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-red-300/20 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/15 to-purple-300/15 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          ref={inViewRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>{t("fleet.title")}</SectionTitle>
          
          {/* Description cards with slide-in animation */}
          <div className="max-w-5xl mx-auto mb-20 space-y-6">
            {["fleet.p1", "fleet.p2", "fleet.p3", "fleet.p4"].map((textKey, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, type: "spring" }}
                className="relative group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/0 via-orange-400/10 to-orange-400/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <p className="relative text-center text-lg md:text-xl text-gray-700 leading-relaxed p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {t(textKey)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Amenities showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              {t("fleet.amenities")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -8 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${amenity.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                  <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${amenity.color} flex items-center justify-center mb-3`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <amenity.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <p className="text-sm font-semibold text-gray-900 text-center">{t(amenity.labelKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fleet gallery */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <FleetGallery />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

