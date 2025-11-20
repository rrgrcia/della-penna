import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  imageUrl: string;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  imageUrl, 
  speed = 0.5,
  className = ""
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y,
          scale,
        }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundAttachment: "fixed",
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-orange-900/40"
          style={{ opacity }}
        />
      </motion.div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
