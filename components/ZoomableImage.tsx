"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function ZoomableImage({ src, alt, width, height, className }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock scroll when the overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const overlay = mounted ? createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setIsOpen(false)}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="absolute top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative flex items-center justify-center max-h-full max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* We use a standard img tag here so it dynamically fits the screen without Next.js Image constraints */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src}`}
              alt={alt}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  ) : null;

  return (
    <>
      <div 
        className="cursor-zoom-in transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg" 
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </div>
      {overlay}
    </>
  );
}
