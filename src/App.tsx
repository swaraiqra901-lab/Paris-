import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { LocationMap } from './components/LocationMap';
import { AppointmentForm } from './components/AppointmentForm';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Manicure');
  const [selectedNote, setSelectedNote] = useState<string>('');

  const handleOpenBooking = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setSelectedService(serviceName);
    handleOpenBooking();
  };

  const handleOpenBookingWithNote = (note: string) => {
    setSelectedNote(note);
    handleOpenBooking();
  };

  return (
    <div className="min-h-screen bg-[#FAF7F5] text-[#2C2420] font-sans antialiased flex flex-col selection:bg-[#F3C5C5] selection:text-[#3D1E1E]">
      
      {/* Sticky Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />
        <About />
        <Services onSelectService={handleSelectServiceForBooking} />
        <Gallery onOpenBookingWithNote={handleOpenBookingWithNote} />
        <WhyChooseUs />
        <Reviews />
        <LocationMap />
        <AppointmentForm
          initialService={selectedService}
          initialNote={selectedNote}
        />
      </main>

      {/* Sticky Mobile Bottom CTA Bar */}
      <MobileBottomBar onOpenBooking={handleOpenBooking} />

      {/* Site Footer */}
      <Footer />

    </div>
  );
}
