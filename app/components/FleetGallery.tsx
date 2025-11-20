"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const fleetImages = [
  {
    thumb: "http://www.dellapenna.it/it/sites/default/files/styles/project_660_495/public/1%20della%20Penna%20-%20Mercedes%20Benz%20Tourismo%2B.jpg",
    full: "http://www.dellapenna.it/it/sites/default/files/1%20-%20dP%20Mercedes%20Benz%20Tourismo.jpg",
    title: "Mercedes Benz Tourismo",
  },
  {
    thumb: "http://www.dellapenna.it/it/sites/default/files/styles/project_660_495/public/3%20della%20Penna%20-%20Mercedes%20Benz%20Travego.jpg",
    full: "http://www.dellapenna.it/it/sites/default/files/19-dellaPenna-MB580Travego%2B.jpg",
    title: "Mercedes Benz Travego",
  },
  {
    thumb: "http://www.dellapenna.it/it/sites/default/files/styles/project_660_495/public/della%20Penna%20-%20Man%20Lion%20Coach.jpg",
    full: "http://www.dellapenna.it/it/sites/default/files/15-dellaPenna-ManLionsCoach%2B.jpg",
    title: "Man Lions Coach",
  },
  {
    thumb: "http://www.dellapenna.it/it/sites/default/files/styles/project_660_495/public/9%20della%20Penna%20-%20Iveco%20New%20Domino_0.jpg",
    full: "http://www.dellapenna.it/it/sites/default/files/20-dellaPenna-IrisbusDomino.jpg",
    title: "Iveco New Domino",
  },
  {
    thumb: "http://www.dellapenna.it/it/sites/default/files/styles/project_660_495/public/della%20Penna%20-%20Iveco%20Magelys.jpg",
    full: "http://www.dellapenna.it/it/sites/default/files/21-dellaPenna-IrisbusMagelys%2B.jpg",
    title: "Iveco Magelys",
  },
  {
    thumb: "http://www.dellapenna.it/it/sites/default/files/styles/project_660_495/public/della%20Penna%20-%20Irizar%20Scania%20i6%20new_0.jpg",
    full: "http://www.dellapenna.it/it/sites/default/files/16-dellaPenna-IrizarI6%2B%2B.jpg",
    title: "Irizar Scania i6",
  },
  {
    thumb: "http://www.dellapenna.it/it/sites/default/files/styles/project_660_495/public/della%20Penna%20-%20King%20Long%20XQM_0.jpg",
    full: "http://www.dellapenna.it/it/sites/default/files/23-dellapenna-KingLong%2B.jpg",
    title: "King Long XQM",
  },
  {
    thumb: "http://www.dellapenna.it/it/sites/default/files/styles/project_660_495/public/della%20Penna%20-%20Mercedes%20Benz%20new%20Sprinter%20519%2B.jpg",
    full: "http://www.dellapenna.it/it/sites/default/files/25-dellaPenna-MBSprinter519%2B.jpg",
    title: "Mercedes Benz New Sprinter",
  },
  {
    thumb: "http://www.dellapenna.it/it/sites/default/files/styles/project_660_495/public/24della%20Penna-%20Mecedes%20Benz%20Sprinter%2B%2B%2B%2B.jpg",
    full: "http://www.dellapenna.it/it/sites/default/files/25-dellaPenna-MBSprinter313%2B%2B.jpg",
    title: "Mercedes Benz Sprinter",
  },
];

export default function FleetGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    if (selectedIndex !== null) {
      setDirection(1);
      setSelectedIndex((selectedIndex + 1) % fleetImages.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setDirection(-1);
      setSelectedIndex((selectedIndex - 1 + fleetImages.length) % fleetImages.length);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {fleetImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -12 }}
            className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer aspect-[4/3] bg-gray-100"
            onClick={() => {
              setSelectedIndex(index);
              setDirection(0);
            }}
          >
            {/* Image glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            
            <div className="relative h-full overflow-hidden rounded-2xl">
              <motion.img
                src={image.thumb}
                alt={image.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white font-bold text-xl mb-3">{image.title}</h3>
                  <div className="flex items-center text-orange-400 font-semibold">
                    <ZoomIn size={20} className="mr-2" />
                    <span>View Details</span>
                  </div>
                </motion.div>
              </div>

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{
                  background: [
                    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 50%, transparent 100%)',
                    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                  ],
                  backgroundPosition: ['-200%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced lightbox modal with horizontal slide */}
      <AnimatePresence mode="wait">
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/97 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute top-6 right-6 z-10 text-white hover:text-orange-400 transition-colors p-2 rounded-full bg-white/10 backdrop-blur-md"
            >
              <X size={32} />
            </motion.button>

            {/* Navigation buttons */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              whileHover={{ scale: 1.1, x: -5 }}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-white hover:text-orange-400 transition-colors p-3 rounded-full bg-white/10 backdrop-blur-md"
            >
              <ChevronLeft size={32} />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              whileHover={{ scale: 1.1, x: 5 }}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 text-white hover:text-orange-400 transition-colors p-3 rounded-full bg-white/10 backdrop-blur-md"
            >
              <ChevronRight size={32} />
            </motion.button>

            {/* Image container with fixed aspect ratio */}
            <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center">
              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.div
                  key={selectedIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Fixed size container */}
                  <div className="relative w-full max-h-full flex flex-col items-center">
                    {/* Image with fixed aspect ratio and consistent sizing */}
                    <div className="relative w-full max-w-4xl" style={{ aspectRatio: '4/3' }}>
                      <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl bg-black flex items-center justify-center">
                        <img
                          src={fleetImages[selectedIndex].full}
                          alt={fleetImages[selectedIndex].title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Image info */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 px-6 py-4 bg-black/60 backdrop-blur-md rounded-lg"
                    >
                      <h3 className="text-white text-2xl md:text-3xl font-bold text-center">
                        {fleetImages[selectedIndex].title}
                      </h3>
                      <p className="text-white/70 text-center mt-2">
                        {selectedIndex + 1} / {fleetImages.length}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

