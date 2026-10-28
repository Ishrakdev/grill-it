import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Sparkles, Wine, Play, ShieldCheck, Flame, Compass, Award } from 'lucide-react';

export default function About({ onOpenVideo }) {
  const features = [
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      subtitle: 'Michelin Star Artistry',
      description:
        'Led by Executive Chef Marcus Vance, our pitmasters trained at Tokyo’s premier robata hearths and Paris butcheries to command open-flame alchemy.'
    },
    {
      icon: Sparkles,
      title: 'Premium Ingredients',
      subtitle: 'Certified A5 & Rare Foraged',
      description:
        'Exclusive allocations of Japanese Miyazaki A5 Wagyu, Brittany sea scallops, Périgord black truffles, and fleur de sel harvested from Guérande.'
    },
    {
      icon: Wine,
      title: 'Luxury Ambience',
      subtitle: 'Intimate Architectural Design',
      description:
        'Bespoke hand-stitched saddle leather booths, charred yakisugi wood, obsidian stone tables, and a 2,500-bottle glass wine atrium.'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-charcoal-900/60 overflow-hidden border-t border-stone-800/50">
      {/* Decorative subtle background aura */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ember-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badges Bar - Single horizontal row (flex-row flex-nowrap) decorated with elegant glassmorphic gold borders and padding */}
        <div className="w-full pb-14 mb-16 border-b border-stone-800/80">
          <div className="max-w-5xl mx-auto px-2 flex flex-row flex-nowrap items-center justify-center gap-3 sm:gap-6 overflow-x-auto py-2">
            {/* Badge 1: Michelin Selected */}
            <div className="glass-panel border border-gold-400/35 bg-charcoal-900/85 backdrop-blur-md rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-gold-sm hover:border-gold-400/60 transition-all shrink-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
              <span className="font-cinzel text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-white font-semibold whitespace-nowrap">
                Michelin Selected
              </span>
            </div>

            {/* Badge 2: A5 Miyazaki Wagyu */}
            <div className="glass-panel border border-gold-400/35 bg-charcoal-900/85 backdrop-blur-md rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-gold-sm hover:border-gold-400/60 transition-all shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
              <span className="font-cinzel text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-white font-semibold whitespace-nowrap">
                A5 Miyazaki Wagyu
              </span>
            </div>

            {/* Badge 3: 1,000° Binchotan */}
            <div className="glass-panel border border-gold-400/35 bg-charcoal-900/85 backdrop-blur-md rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-gold-sm hover:border-gold-400/60 transition-all shrink-0">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
              <span className="font-cinzel text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-white font-semibold whitespace-nowrap">
                1,000° Binchotan
              </span>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-800/80 border border-gold-400/20 text-gold-400 text-[11px] uppercase tracking-[0.3em] font-medium mb-4"
          >
            <Compass className="w-3 h-3" />
            <span>Our Philosophy & Heritage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100"
          >
            A Passion for <span className="italic font-normal gold-gradient-text">Perfection</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-stone-300/85 text-base sm:text-lg font-sans font-light leading-relaxed"
          >
            Fire is not merely our method—it is our philosophy. We honor every cut of meat through 
            centuries-old dry-aging techniques, bespoke Japanese binchotan coals, and unwavering respect for source and season.
          </motion.p>
        </div>

        {/* Video Thumbnail with Interactive Play Button & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          {/* Video Thumbnail (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold-400/20 shadow-2xl bg-charcoal-950 aspect-video sm:aspect-[16/10] video-card-container">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85"
                alt="Executive Chef preparing luxury steak over open flame"
                className="w-full h-full object-cover filter brightness-[0.65] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />

              {/* Pulsing Interactive Play Button */}
              <div className="absolute inset-0 flex items-center justify-center play-button-wrapper video-play-wrapper">
                <button
                  onClick={(e) => {
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                      e?.preventDefault();
                      e?.stopPropagation();
                      return;
                    }
                    onOpenVideo?.();
                  }}
                  className="relative group/btn p-5 sm:p-6 rounded-full cursor-pointer focus:outline-none video-play-btn video-play-button play-btn play-button"
                  aria-label="Play Grill It Cinematic Story"
                >
                  <span className="absolute inset-0 rounded-full bg-gold-400/20 animate-ping" />
                  <span className="absolute inset-0 rounded-full bg-gold-400/30 scale-125 transition-transform duration-500 group-hover/btn:scale-150" />
                  
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-gold-300 via-gold-400 to-amber-600 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-transform duration-300 group-hover/btn:scale-110 yellow-play-button">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-charcoal-950 fill-charcoal-950 translate-x-0.5 play-icon" />
                  </div>
                </button>
              </div>

              {/* Video Overlay Caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-cinzel">
                    Watch the Cinematic Film
                  </span>
                  <h4 className="text-stone-100 font-serif text-lg sm:text-xl font-semibold mt-0.5">
                    The Alchemy of Fire & Smoke
                  </h4>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-950/80 border border-gold-400/30 text-[11px] text-stone-300">
                  <Flame className="w-3.5 h-3.5 text-gold-400" />
                  <span>2:45 Mini-Doc</span>
                </div>
              </div>
            </div>

            <div className="absolute -inset-2 rounded-3xl border border-gold-400/15 -z-10 pointer-events-none hidden sm:block" />
          </motion.div>

          {/* Story Narrative & Stat Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-cinzel font-semibold">
                Dry-Aging Vault & Robata Hearth
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-100 font-bold leading-tight">
                Where Artisanal Fire Meets Modern Luxury
              </h3>
              <p className="text-stone-300/80 text-sm sm:text-base leading-relaxed font-light">
                Every steak at Grill It undergoes a rigorous maturation process inside our custom 
                Himalayan pink salt dry-aging room. Over 45 to 60 days, moisture evaporates to intensely 
                concentrate natural umami notes while enzymatic action yields unmatched tenderness.
              </p>
              <p className="text-stone-300/80 text-sm sm:text-base leading-relaxed font-light">
                When seared over white Kishu binchotan charcoal reaching 1,000°F, the caramelized crust 
                seals in unctuous marbling for an indelible tasting memory.
              </p>
            </div>

            {/* Stat Badges */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="glass-panel p-4 rounded-xl border-stone-800">
                <span className="font-serif text-3xl font-bold gold-gradient-text block">
                  45-60
                </span>
                <span className="text-[11px] text-stone-400 uppercase tracking-wider block mt-1">
                  Days Himalayan Salt Aging
                </span>
              </div>
              <div className="glass-panel p-4 rounded-xl border-stone-800">
                <span className="font-serif text-3xl font-bold gold-gradient-text block">
                  1,000°F
                </span>
                <span className="text-[11px] text-stone-400 uppercase tracking-wider block mt-1">
                  Binchotan Charcoal Heat
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2 text-stone-400 text-xs">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Authorized Purveyor of Certified Miyazaki & Kobe Japanese Beef</span>
            </div>
          </motion.div>
        </div>

        {/* 3 Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-bl-full pointer-events-none group-hover:bg-gold-400/10 transition-colors" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-charcoal-800 border border-gold-400/30 flex items-center justify-center mb-6 shadow-gold-sm group-hover:border-gold-400/60 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-gold-400" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400/90 font-cinzel block mb-1">
                    {feature.subtitle}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-stone-100 mb-3 group-hover:text-gold-200 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-stone-300/80 text-sm leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 uppercase tracking-widest font-mono">
                    Pillar 0{index + 1}
                  </span>
                  <span className="w-8 h-[1px] bg-gold-400/40 group-hover:w-16 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
