import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Wine, Flame, MapPin, AlertCircle, Calendar } from 'lucide-react';

export default function DishModal({ dish, onClose, onOpenReservation }) {
  if (!dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-charcoal-950/90 backdrop-blur-2xl"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl glass-panel rounded-3xl overflow-hidden border-gold-400/40 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Top Image Banner */}
          <div className="relative h-64 sm:h-72 overflow-hidden bg-charcoal-950">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-stone-700 text-stone-300 hover:text-stone-100 flex items-center justify-center transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Dish Titles on Image */}
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-cinzel block">
                  {dish.subname}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
                  {dish.name}
                </h3>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-charcoal-950/90 border border-gold-400/40 shadow-lg">
                <span className="font-serif text-2xl font-bold text-gold-300">
                  ${dish.price}
                </span>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-cinzel text-gold-400 font-semibold mb-2">
                Culinary Description
              </h4>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                {dish.description}
              </p>
            </div>

            {/* Provenance & Preparation Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-xl border-stone-800">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold-400 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Ingredient Provenance</span>
                </div>
                <p className="text-sm text-stone-200 font-medium">
                  {dish.details?.origin || 'Specially Foraged & Sourced'}
                </p>
              </div>

              <div className="glass-panel p-4 rounded-xl border-stone-800">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold-400 mb-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Fire & Technique</span>
                </div>
                <p className="text-sm text-stone-200 font-medium">
                  {dish.details?.prepTime || 'Cooked to Order over Binchotan'}
                </p>
              </div>
            </div>

            {/* Sommelier Recommendation */}
            <div className="p-4 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-start gap-3.5">
              <Wine className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-cinzel font-semibold block">
                  Sommelier Pairing Suggestion
                </span>
                <p className="text-sm text-stone-200 font-serif italic mt-0.5">
                  {dish.details?.pairing || 'Consult Sommelier upon arrival'}
                </p>
              </div>
            </div>

            {/* Allergen Notice */}
            {dish.details?.allergens && (
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <AlertCircle className="w-3.5 h-3.5 text-stone-500" />
                <span>Contains: {dish.details.allergens}. Dietary accommodations available.</span>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-stone-800 flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider text-stone-400 hover:text-stone-200"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenReservation();
                }}
                className="btn-gold-luxury px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-2 cursor-pointer shadow-gold-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-charcoal-950" />
                <span>Reserve Table for This Dish</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

