import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Info, ArrowUpRight, Wine } from 'lucide-react';
import { SIGNATURE_DISHES, CATEGORIES } from '../data/dishes';

export default function Menu({ onSelectDish, onOpenReservation }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // "Our Creations" shows the 4 primary signature dishes, perfectly matching the 4-card structure of other tabs
  const filteredDishes =
    activeCategory === 'all'
      ? SIGNATURE_DISHES.filter((d) => d.isPrimary)
      : SIGNATURE_DISHES.filter((d) => d.category === activeCategory);

  const categorySubtitles = {
    all: 'Our Master Chef’s four iconic signature creations seared to perfection over open flames.',
    steaks: 'Certified Japanese A5 Miyazaki Wagyu and 45-day Himalayan salt dry-aged cuts.',
    starters: 'Hand-seared Hokkaido scallops, lobster bisque flambée, and delicate raw preparations.',
    desserts: 'Grand Cru Valrhona chocolate, burnt Basque cheesecake, and artisanal warm pastries.',
    drinks: 'Smoked vintage cocktails, rare Japanese whiskies, and handcrafted botanical elixirs.',
  };

  const handleCategorySelect = (e, catId) => {
    e.preventDefault();
    const currentY = window.scrollY;
    setActiveCategory(catId);

    // Lock scroll position instantly so "Our Creations" never scrolls or jumps
    requestAnimationFrame(() => {
      window.scrollTo({ top: currentY, behavior: 'instant' });
    });
  };

  return (
    <section id="menu" className="relative py-28 bg-charcoal-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gold-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-800/80 border border-gold-400/20 text-gold-400 text-[11px] uppercase tracking-[0.3em] font-medium mb-4"
          >
            <Sparkles className="w-3 h-3" />
            <span>Chef's Carte Blanche</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100"
          >
            Signature <span className="italic font-normal gold-gradient-text">Dishes</span>
          </motion.h2>

          <p className="mt-4 text-stone-300/85 text-sm sm:text-base font-sans font-light leading-relaxed">
            Seared over 1,000°F binchotan embers and plated with meticulous precision.
          </p>
        </div>

        {/* Category Tabs with Cute Subtle Hover Effect */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={(e) => handleCategorySelect(e, cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'btn-gold-luxury shadow-gold-sm font-bold scale-[1.03]'
                    : 'glass-panel text-stone-300 hover:text-gold-300 hover:border-gold-400/50 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(212,175,55,0.15)] active:scale-95'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Active Category Description Note */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-gold-400/80 font-cinzel">
            {categorySubtitles[activeCategory] || ''}
          </p>
        </div>

        {/* Clean, Instant Grid - No Sliding Glitch, Stays In Place */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between border-stone-800/80 relative transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image Container with Zoom and Badge */}
              <div className="relative h-64 overflow-hidden bg-charcoal-900">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.06] transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />

                {/* Top Tag */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-charcoal-950/85 backdrop-blur-md border border-gold-400/30 text-gold-300 shadow-md">
                    <Sparkles className="w-2.5 h-2.5 text-gold-400" />
                    {dish.tag}
                  </span>
                </div>

                {/* Price Tag Floating in Gold Pill */}
                <div className="absolute bottom-3 right-3">
                  <div className="px-3.5 py-1.5 rounded-full bg-charcoal-950/90 backdrop-blur-md border border-gold-400/40 shadow-lg">
                    <span className="font-serif text-lg font-bold text-gold-300">
                      ${dish.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-cinzel block mb-1">
                    {dish.subname}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100 group-hover:text-gold-200 transition-colors">
                    {dish.name}
                  </h3>
                  <p className="mt-3 text-stone-300/80 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                    {dish.description}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectDish(dish)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-stone-300 hover:text-gold-300 transition-colors group/btn cursor-pointer py-1"
                  >
                    <Info className="w-3.5 h-3.5 text-gold-400" />
                    <span>Tasting Notes</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  <button
                    onClick={onOpenReservation}
                    className="px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-gold-400 hover:text-charcoal-950 text-gold-300 border border-gold-400/30 text-[11px] uppercase tracking-wider font-semibold transition-all cursor-pointer"
                    title="Reserve for this dish"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sommelier Pairing Callout Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl glass-panel border-gold-400/25 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-charcoal-800 border border-gold-400/30 flex items-center justify-center shrink-0 shadow-gold-sm">
              <Wine className="w-7 h-7 text-gold-400" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-cinzel font-semibold">
                Sommelier & Cellar Program
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
                Curated Pairings & Rare Vintages
              </h4>
              <p className="text-stone-300/80 text-xs sm:text-sm max-w-xl font-light mt-1">
                Our Head Sommelier has paired each signature cut with rare vintages and bespoke cocktails.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenReservation}
            className="btn-gold-luxury px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-bold shrink-0 cursor-pointer shadow-gold-sm"
          >
            Inquire Pairings
          </button>
        </div>
      </div>
    </section>
  );
}
