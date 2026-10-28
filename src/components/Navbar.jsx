import React, { useState, useEffect } from 'react';
import { Flame, Menu as MenuIcon, X, Calendar, Phone, Sparkles, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Signature Dishes', href: '#menu' },
    { name: 'The Craft', href: '#craft' },
    { name: 'Reservations', href: '#reservation' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b border-gold-400/20'
            : 'bg-gradient-to-b from-charcoal-950/90 via-charcoal-950/40 to-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-amber-700 p-0.5 shadow-gold-sm flex items-center justify-center">
              <div className="w-full h-full bg-charcoal-950 rounded-full flex items-center justify-center group-hover:bg-charcoal-900 transition-colors">
                <Flame className="w-5 h-5 text-gold-400 transition-transform group-hover:scale-110" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.25em] gold-gradient-text">
                GRILL IT
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-sans -mt-0.5">
                Steakhouse & Flame
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-xs uppercase tracking-[0.2em] font-medium text-stone-300 hover:text-gold-300 transition-colors py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold-400 to-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+12125554745"
              className="hidden xl:flex items-center gap-2 text-xs uppercase tracking-wider text-stone-300 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>(212) 555-4745</span>
            </a>

            <button
              onClick={onOpenReservation}
              className="btn-gold-luxury px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2 cursor-pointer shadow-gold-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Find a Table</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-300 hover:text-gold-400 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 text-gold-400" />
            ) : (
              <MenuIcon className="w-7 h-7" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[68px] z-40 lg:hidden bg-charcoal-950/95 backdrop-blur-2xl border-b border-gold-400/20 px-6 py-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-cinzel mb-2">
                Gastronomy Navigation
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-base uppercase tracking-[0.18em] font-serif py-3 border-b border-stone-800/60 text-stone-200 hover:text-gold-400 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gold-400/60" />
                </a>
              ))}
            </div>

            <div className="pt-8 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full btn-gold-luxury py-3.5 rounded-xl text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <div className="p-4 rounded-xl glass-panel text-center space-y-1">
                <p className="text-xs text-stone-400">Concierge & Inquiries</p>
                <p className="text-sm font-serif text-gold-300 font-medium">+1 (212) 555-4745</p>
                <p className="text-[11px] text-stone-500">450 Lexington Ave, Manhattan, NY</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

