import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Flame, Volume2, Sparkles } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 video-modal-overlay modal-overlay popup-modal video-popup">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-charcoal-950/90 backdrop-blur-2xl video-modal-backdrop"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl glass-panel rounded-3xl overflow-hidden border-gold-400/40 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 video-modal-dialog video-modal-window video-modal modal-dialog modal-container popup-modal-content"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 flex items-center justify-between border-b border-stone-800/80 bg-charcoal-900/60 video-modal-header relative">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-gold-400" />
              <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-gold-300 font-bold">
                Cinematic Short Film — The Art of Fire
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-stone-100 transition-colors video-close-btn video-close-button close-btn close-button modal-close-btn modal-close-button"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Video Container (Cinematic Video Presentation) */}
          <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden video-container modal-video-container">
            {/* HTML5 video preview / background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-with-fire-in-a-kitchen-42861-large.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Video overlay watermark badge */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-gold-400/30 text-[11px] text-stone-200 video-overlay-badge video-watermark-badge video-badge video-overlay-text">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>4K Master Cut</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-charcoal-950/70 backdrop-blur-md p-3 rounded-xl border border-stone-800/80 video-text-box video-info-box modal-text-box video-caption-box video-overlay-caption video-overlay-text">
              <div>
                <p className="text-xs font-semibold text-stone-200">Executive Chef Marcus Vance</p>
                <p className="text-[10px] text-stone-400">Live seared at Grill It Manhattan Hearth</p>
              </div>
              <div className="flex items-center gap-2 text-gold-400 text-xs">
                <Sparkles className="w-4 h-4" />
                <span className="font-cinzel text-[10px] uppercase tracking-wider">A5 Wagyu & Smoke</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

