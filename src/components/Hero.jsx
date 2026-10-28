import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, UtensilsCrossed } from 'lucide-react';

export default function Hero({ onOpenReservation }) {
  const scrollToMenu = (e) => {
    e.preventDefault();
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToReservation = (e) => {
    e.preventDefault();
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Vivid, Mouth-Watering Grilled Meat - Bright & Appetizing */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2400&q=90"
          alt="Luxury Wood-Fired Grilled Wagyu Steak"
          className="w-full h-full object-cover object-[72%_center] filter brightness-[1.02] contrast-[1.08] saturate-[1.14]"
        />

        {/* Subtle Left-Side Gradient Mask to Keep Text Readable While Right Side Meat Pops */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[70%] md:w-[58%] lg:w-[50%] bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-transparent z-[1] pointer-events-none" />

        {/* Subtle Bottom Transition Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-charcoal-950 to-transparent z-[1] pointer-events-none" />
      </div>

      {/* Content positioned on the LEFT side of the screen, moved HIGHER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-32">
        <div className="max-w-xl text-left">
          {/* Main Title at the TOP - Biggest Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-100 leading-[1.06]"
          >
            Where Elegance <br />
            <span className="font-serif italic font-normal gold-gradient-text">
              Meets Flavor
            </span>
          </motion.h1>

          {/* Paragraph DIRECTLY UNDER the Title - Noticeably Smaller */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-5 text-xs sm:text-sm text-stone-300 font-sans font-light leading-relaxed max-w-md"
          >
            An extraordinary culinary ritual where certified Japanese A5 Kobe beef, 
            45-day dry-aged cuts, and artisanal binchotan charcoal harmonize into pure mastery.
          </motion.p>
        </div>
      </div>

      {/* Hero Buttons: Dead Center Horizontally Across the Entire Screen at Absolute Bottom */}
      <div className="absolute bottom-8 sm:bottom-10 inset-x-0 z-20 flex items-center justify-center pointer-events-none hero-buttons-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-row items-center justify-center gap-4 pointer-events-auto px-4 hero-cta-container hero-buttons-container hero-buttons"
        >
          <a
            href="#menu"
            onClick={scrollToMenu}
            className="btn-gold-luxury px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2.5 cursor-pointer shadow-gold-sm hero-btn hero-btn-menu"
          >
            <UtensilsCrossed className="w-4 h-4 text-charcoal-950 flex-shrink-0" />
            <span>Explore Menu</span>
          </a>

          <button
            onClick={scrollToReservation}
            className="px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-stone-200 glass-panel hover:text-gold-300 hover:border-gold-400/50 transition-all flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-md hero-btn hero-btn-reserve"
          >
            <Calendar className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>Reserve a Table</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
