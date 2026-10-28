import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/dishes';

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-28 bg-charcoal-950 overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-800/80 border border-gold-400/20 text-gold-400 text-[11px] uppercase tracking-[0.3em] font-medium mb-4"
          >
            <Award className="w-3 h-3" />
            <span>Critical Acclaim</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-100"
          >
            Words of <span className="italic font-normal gold-gradient-text">Distinction</span>
          </motion.h2>

          <p className="mt-4 text-stone-300/80 text-sm sm:text-base font-light">
            Recognized by world-renowned culinary guides, discerning critics, and esteemed patrons.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between border-stone-800/80 relative group"
            >
              <div className="absolute top-6 right-6 text-gold-400/20 group-hover:text-gold-400/40 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 text-gold-400 fill-gold-400"
                    />
                  ))}
                </div>

                <p className="font-serif italic text-base sm:text-lg text-stone-200/95 leading-relaxed">
                  "{review.quote}"
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-gold-300">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-stone-500 font-sans mt-0.5">
                    {review.role}
                  </p>
                </div>
                <div className="w-2 h-2 rounded-full bg-gold-400/80" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

