import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Award
} from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer({ onOpenReservation }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setNewsletterEmail('');
    }, 700);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Our Heritage', href: '#about' },
    { name: 'Signature Dishes', href: '#menu' },
    { name: 'The Charcoal Hearth', href: '#craft' },
    { name: 'Reserve Table', href: '#reservation' },
    { name: 'Critic Reviews', href: '#reviews' },
  ];

  return (
    <footer id="contact" className="relative bg-charcoal-950 border-t border-gold-400/20 text-stone-300 pt-20 pb-12 overflow-hidden">
      {/* Decorative top gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-32 bg-gold-400/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800/80">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-amber-700 p-0.5 shadow-gold-sm flex items-center justify-center">
                <div className="w-full h-full bg-charcoal-950 rounded-full flex items-center justify-center">
                  <Flame className="w-5 h-5 text-gold-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-2xl font-bold tracking-[0.25em] gold-gradient-text">
                  GRILL IT
                </span>
                <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-sans -mt-0.5">
                  Steakhouse & Flame
                </span>
              </div>
            </a>

            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              The pinnacle of wood-fired gastronomy in Manhattan. Honoring the finest Miyazaki A5 Wagyu, 
              dry-aged cuts, and sacred binchotan flame since 2018.
            </p>

            <div className="flex items-center gap-2.5 text-xs text-gold-400/90 font-cinzel">
              <Award className="w-4 h-4 text-gold-400" />
              <span>Michelin Guide Selected 2024</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
                { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
                { icon: XIcon, href: 'https://twitter.com', label: 'X (Twitter)' },
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full glass-panel border-stone-800 flex items-center justify-center text-stone-400 hover:text-gold-300 hover:border-gold-400/50 hover:shadow-gold-sm transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-cinzel text-xs uppercase tracking-[0.25em] text-gold-400 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-stone-400 hover:text-gold-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-stone-700 group-hover:bg-gold-400 transition-colors" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-xs uppercase tracking-[0.25em] text-gold-400 font-bold">
              Hours & Location
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-stone-400 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>450 Lexington Avenue, Midtown East, New York, NY 10017</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+12125554745" className="hover:text-gold-300 transition-colors">
                  +1 (212) 555-4745
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:concierge@grillit-restaurant.com" className="hover:text-gold-300 transition-colors">
                  concierge@grillit-restaurant.com
                </a>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="text-stone-300 font-medium">Dinner Service:</p>
                  <p>Tue – Sun: 5:00 PM – 11:30 PM</p>
                  <p className="text-stone-300 font-medium mt-1">Cellar Lounge:</p>
                  <p>Until 1:00 AM Nightly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Functional Newsletter Input (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-xs uppercase tracking-[0.25em] text-gold-400 font-bold">
              The Epicurean Circle
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Subscribe to receive exclusive access to private vintage cellaring allocations, seasonal tasting menus, and member dinners.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3.5 rounded-xl bg-gold-400/10 border border-gold-400/40 text-gold-300 text-xs flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Welcome to the Circle. Check your inbox for your invitation.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-stone-700/80 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-gold-400 text-xs font-sans pr-11"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-gold-400 hover:bg-gold-300 text-charcoal-950 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Subscribe to newsletter"
                  >
                    {loading ? (
                      <span className="w-3.5 h-3.5 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <span className="text-[10px] text-stone-500 block">
                  We honor your privacy. Unsubscribe anytime.
                </span>
              </form>
            )}

            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="w-full py-2.5 rounded-xl border border-gold-400/40 text-gold-300 hover:bg-gold-400 hover:text-charcoal-950 transition-all text-xs uppercase tracking-widest font-semibold cursor-pointer"
              >
                Quick Table Reservation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Smooth Back-To-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Grill It Fine Dining Group. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-stone-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-stone-400 cursor-pointer transition-colors">Terms of Hospitality</span>
            <span>•</span>
            <span className="hover:text-stone-400 cursor-pointer transition-colors">Smart Elegant Dress Code</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-stone-400 hover:text-gold-300 transition-colors group cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span className="text-[11px] uppercase tracking-widest">Back to Top</span>
            <div className="w-8 h-8 rounded-full glass-panel border-stone-800 flex items-center justify-center group-hover:border-gold-400/50 group-hover:-translate-y-1 transition-all">
              <ArrowUp className="w-3.5 h-3.5 text-gold-400" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
