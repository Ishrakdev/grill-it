import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import DishModal from './components/DishModal';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [confirmedReservation, setConfirmedReservation] = useState(null);

  const handleOpenReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-charcoal-950 text-stone-200 overflow-x-hidden">
      {/* Dynamic Glassmorphism Sticky Header */}
      <Navbar onOpenReservation={handleOpenReservation} />

      <main>
        {/* 1. Hero Section: "Where Elegance Meets Flavor", luxury grilled meat, badges, dual CTAs */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* 2. About Section: "A Passion for Perfection", video thumbnail with play button, 3 features with icons */}
        <About
          onOpenVideo={() => {
            if (typeof window !== 'undefined' && window.innerWidth < 768) {
              return;
            }
            setIsVideoModalOpen(true);
          }}
        />

        {/* 3. Menu Section: "Signature Dishes" 4-card grid (Truffle Scallops, Wagyu Tenderloin, Lobster Bisque, Chocolate Delice) */}
        <Menu
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenReservation={handleOpenReservation}
        />

        {/* 4. Experience & The Craft of Fire (Binchotan, Salt Aging, Wine Cellar) */}
        <Experience />

        {/* 5. Reservation Section: Sleek form with Date, Time, Party Size, Seating & Find a Table button */}
        <Reservation
          onReservationSuccess={(data) => setConfirmedReservation(data)}
        />

        {/* 6. Critic & Patron Acclaim (Michelin Guide, NY Times, Bloomberg) */}
        <Testimonials />
      </main>

      {/* 7. Footer (IMPROVED): Logo, quick links, contact info, working social icons, functional newsletter */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <DishModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onOpenReservation={handleOpenReservation}
      />

      <ReservationModal
        reservation={confirmedReservation}
        onClose={() => setConfirmedReservation(null)}
      />
    </div>
  );
}

