import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Calendar, Clock, Users, MapPin, Sparkles, Share2, Download } from 'lucide-react';

export default function ReservationModal({ reservation, onClose }) {
  if (!reservation) return null;

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

        {/* Modal Window (VIP Reservation Ticket) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-lg glass-panel rounded-3xl overflow-hidden border-gold-400/50 shadow-[0_30px_90px_rgba(0,0,0,0.95)] z-10"
        >
          {/* Top Gold Header */}
          <div className="bg-gradient-to-r from-gold-500 via-gold-400 to-amber-600 p-6 text-charcoal-950 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-charcoal-950/20 backdrop-blur-md flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-charcoal-950" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel font-bold block">
                  Confirmed Table
                </span>
                <h3 className="font-serif text-xl font-bold leading-tight">
                  Grill It VIP Pass
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-black/10 transition-colors"
              aria-label="Close pass"
            >
              <X className="w-6 h-6 text-charcoal-950" />
            </button>
          </div>

          {/* Ticket Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-stone-400 font-cinzel">
                  Reservation Reference
                </p>
                <p className="font-mono text-lg font-bold text-gold-300">
                  {reservation.reference || '#GR-4982'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-wider text-stone-400 font-cinzel">
                  Guest Name
                </p>
                <p className="text-sm font-semibold text-stone-100">
                  {reservation.name || 'Honored Guest'}
                </p>
              </div>
            </div>

            {/* Grid of details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-3.5 rounded-xl border-stone-800">
                <div className="flex items-center gap-2 text-stone-400 text-xs mb-1">
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  <span>Date</span>
                </div>
                <p className="text-sm font-semibold text-stone-200">
                  {reservation.date}
                </p>
              </div>

              <div className="glass-panel p-3.5 rounded-xl border-stone-800">
                <div className="flex items-center gap-2 text-stone-400 text-xs mb-1">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>Seating Time</span>
                </div>
                <p className="text-sm font-semibold text-stone-200">
                  {reservation.time} PM
                </p>
              </div>

              <div className="glass-panel p-3.5 rounded-xl border-stone-800">
                <div className="flex items-center gap-2 text-stone-400 text-xs mb-1">
                  <Users className="w-3.5 h-3.5 text-gold-400" />
                  <span>Party Size</span>
                </div>
                <p className="text-sm font-semibold text-stone-200">
                  {reservation.partySize}
                </p>
              </div>

              <div className="glass-panel p-3.5 rounded-xl border-stone-800">
                <div className="flex items-center gap-2 text-stone-400 text-xs mb-1">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>Dining Section</span>
                </div>
                <p className="text-xs font-semibold text-stone-200 truncate">
                  {reservation.seating}
                </p>
              </div>
            </div>

            {/* Confirmation Note */}
            <div className="p-4 rounded-xl bg-charcoal-900 border border-stone-800 text-xs text-stone-400 space-y-1.5 leading-relaxed">
              <div className="flex items-center gap-2 text-gold-300 font-semibold font-cinzel">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hospitality Guarantee</span>
              </div>
              <p>
                A confirmation SMS and calendar invite have been dispatched to{' '}
                <span className="text-stone-200 font-medium">{reservation.email || 'your email'}</span>. 
                Your table will be held for 15 minutes past your reserved time.
              </p>
              <p className="text-[11px] text-stone-500 pt-1">
                Dress code: Smart Elegant. Jackets recommended for gentlemen.
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                onClick={onClose}
                className="w-full btn-gold-luxury py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

