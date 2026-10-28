import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, Sparkles, CheckCircle2, Phone, Utensils, Shield, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Reservation({ onReservationSuccess }) {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    date: todayStr,
    time: '19:30',
    partySize: '2 Guests',
    seating: 'Main Dining Pavilion',
    name: '',
    email: '',
    phone: '',
    specialRequest: 'None',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const partyOptions = [
    '1 Guest',
    '2 Guests',
    '3 Guests',
    '4 Guests',
    '5 Guests',
    '6 Guests',
    '8+ Guests (VIP Room)'
  ];

  const seatingOptions = [
    "Chef's Hearth Counter",
    'Main Dining Pavilion',
    'Private Wine Cellar',
    'Veranda Garden (Seasonal)'
  ];

  const occasions = [
    'Fine Dining Dinner',
    'Anniversary Celebration',
    'Birthday Celebration',
    'Business Dinner',
    'Romantic Evening'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API booking validation
    setTimeout(() => {
      setIsSubmitting(false);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#FAF7EE', '#C5A880', '#E05A2B'],
        });
      } catch (err) {
        // Fallback gracefully
      }

      const bookingRef = `GR-${Math.floor(1000 + Math.random() * 9000)}`;
      onReservationSuccess({
        ...formData,
        reference: bookingRef,
      });
    }, 900);
  };

  return (
    <section id="reservation" className="relative py-28 overflow-hidden">
      {/* Blurred Dark Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="Atmospheric Luxury Dining Room"
          className="w-full h-full object-cover object-center filter blur-md brightness-[0.25] scale-105"
        />
        <div className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-800/80 border border-gold-400/20 text-gold-400 text-[11px] uppercase tracking-[0.3em] font-medium mb-4"
          >
            <CalendarIcon className="w-3 h-3" />
            <span>Table Reservation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100"
          >
            Reserve Your <span className="italic font-normal gold-gradient-text">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-stone-300/85 text-sm sm:text-base font-sans font-light leading-relaxed"
          >
            We invite you to reserve your dining sanctuary. Due to our limited seating and 
            specialized charcoal hearths, advanced reservations are highly recommended.
          </motion.p>
        </div>

        {/* Sleek Reservation Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border-gold-400/30 shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative overflow-hidden"
        >
          {/* Subtle top gold gradient border accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Primary Triad: Date, Time, Party Size */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Date Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-cinzel text-gold-300">
                  <CalendarIcon className="w-4 h-4 text-gold-400" />
                  <span>Select Date</span>
                </label>
                <input
                  type="date"
                  min={todayStr}
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-charcoal-900/90 border border-stone-700/80 text-stone-100 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-sans text-sm cursor-pointer"
                />
              </div>

              {/* Time Slot Select */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-cinzel text-gold-300">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>Seating Time</span>
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-charcoal-900/90 border border-stone-700/80 text-stone-100 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-sans text-sm cursor-pointer"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time} className="bg-charcoal-950 text-stone-200">
                      {time} PM
                    </option>
                  ))}
                </select>
              </div>

              {/* Party Size Select */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-cinzel text-gold-300">
                  <Users className="w-4 h-4 text-gold-400" />
                  <span>Party Size</span>
                </label>
                <select
                  value={formData.partySize}
                  onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-charcoal-900/90 border border-stone-700/80 text-stone-100 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-sans text-sm cursor-pointer"
                >
                  {partyOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-charcoal-950 text-stone-200">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Secondary Options: Seating Preference & Occasion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-cinzel text-gold-300">
                  <Utensils className="w-4 h-4 text-gold-400" />
                  <span>Seating Area Preference</span>
                </label>
                <select
                  value={formData.seating}
                  onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-charcoal-900/90 border border-stone-700/80 text-stone-100 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-sans text-sm cursor-pointer"
                >
                  {seatingOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-charcoal-950 text-stone-200">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-cinzel text-gold-300">
                  <Heart className="w-4 h-4 text-gold-400" />
                  <span>Occasion / Special Celebration</span>
                </label>
                <select
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-charcoal-900/90 border border-stone-700/80 text-stone-100 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-sans text-sm cursor-pointer"
                >
                  {occasions.map((occ) => (
                    <option key={occ} value={occ} className="bg-charcoal-950 text-stone-200">
                      {occ}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Guest Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-cinzel text-stone-400 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Alexander Wright"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-charcoal-900/90 border border-stone-700/80 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-gold-400 text-sm font-sans"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-cinzel text-stone-400 block">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alexander@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-charcoal-900/90 border border-stone-700/80 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-gold-400 text-sm font-sans"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-cinzel text-stone-400 block">
                  Mobile Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (212) 555-0192"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-charcoal-900/90 border border-stone-700/80 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-gold-400 text-sm font-sans"
                />
              </div>
            </div>

            {/* Submit Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-stone-800/90">
              <div className="flex items-center gap-3 text-stone-400 text-xs">
                <Shield className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Instant Confirmation & Dietary Concierge Care</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto btn-gold-luxury px-12 py-4 rounded-full text-xs uppercase tracking-[0.24em] font-bold flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                    <span>Securing Table...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-charcoal-950" />
                    <span>Find a Table</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Large Party Concierge Notice */}
          <div className="mt-8 pt-6 border-t border-stone-800/60 text-center">
            <p className="text-xs text-stone-400">
              For private dining buyouts or parties exceeding 8 guests, please reach our Head Maître d' at{' '}
              <a href="tel:+12125554745" className="text-gold-300 font-semibold underline underline-offset-2 hover:text-gold-200">
                +1 (212) 555-4745
              </a>{' '}
              or{' '}
              <a href="mailto:private-events@grillit-restaurant.com" className="text-gold-300 underline underline-offset-2 hover:text-gold-200">
                private-events@grillit-restaurant.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

