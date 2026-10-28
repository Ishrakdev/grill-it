import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Clock, Sparkles } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      step: '01',
      title: 'Kishu Binchotan Hearth',
      subtitle: '1,000°F Pure Radiant Heat',
      description:
        'Crafted from Japanese Ubame oak, Kishu charcoal burns with infrared intensity and zero sulfur fumes, caramelizing crust while leaving center velvety.',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=85',
      icon: Flame,
    },
    {
      step: '02',
      title: 'Himalayan Salt Aging Vault',
      subtitle: '45 to 60 Days Maturation',
      description:
        'Our sub-zero chamber lined with glowing pink salt bricks regulates ambient microflora, concentrating intense umami and yielding buttery tenderness.',
      image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=85',
      icon: Clock,
    },
  ];

  return (
    <section id="craft" className="relative py-28 bg-charcoal-900 border-t border-b border-stone-800/60 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-700/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-800/80 border border-gold-400/20 text-gold-400 text-[11px] uppercase tracking-[0.3em] font-medium mb-4"
          >
            <Sparkles className="w-3 h-3" />
            <span>Master Fire Craft</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100"
          >
            The Sacred <span className="italic font-normal gold-gradient-text">Elements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-stone-300/85 text-base sm:text-lg font-sans font-light leading-relaxed"
          >
            Beyond culinary execution lies an obsessive mastery of time, flame, and wood. 
            Discover the cornerstones of the Grill It sanctuary.
          </motion.p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group glass-panel glass-panel-hover rounded-2xl overflow-hidden border-stone-800/80 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-charcoal-950">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.15] transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />

                  {/* Step Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs font-bold text-gold-300 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-gold-400/30">
                      Phase {exp.step}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-gold-400/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-cinzel block mb-1">
                      {exp.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-stone-100 group-hover:text-gold-200 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="mt-3 text-stone-300/80 text-sm leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                    <span className="uppercase tracking-widest text-[10px] text-gold-400/80 font-cinzel">
                      Three Star Standard
                    </span>
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

