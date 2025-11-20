"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSpacerProps {
  imageUrl: string;
}

export default function ParallaxSpacer({ imageUrl }: ParallaxSpacerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div ref={ref} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Parallax image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, scale }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-orange-900/40"
          style={{ opacity }}
        />
      </motion.div>

      {/* Animated overlay pattern */}
      {windowSize.width > 0 && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
                scale: 0.5 + Math.random() * 0.5,
              }}
              animate={{
                y: [null, Math.random() * windowSize.height],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            >
              <div className="w-2 h-2 bg-white/20 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}

