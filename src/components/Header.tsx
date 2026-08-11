import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Facebook, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { PARIS_NAILS_INFO } from '../data/salonData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Paris Nails', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location & Hours', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-[#2C2420] text-[#FAF7F5] text-xs py-2 px-4 border-b border-[#3D312B]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4 text-xs">
            <a 
              href={PARIS_NAILS_INFO.googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-[#E8A598] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#E8A598]" />
              <span>{PARIS_NAILS_INFO.fullAddress}</span>
            </a>
            <span className="hidden sm:inline text-stone-500">|</span>
            <div className="hidden sm:flex items-center space-x-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#E8A598]" />
              <span>Mon–Sat 9:00 AM–7:00 PM (Sun Closed)</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 ml-auto sm:ml-0">
            <a
              href={`tel:${PARIS_NAILS_INFO.phone}`}
              className="flex items-center space-x-1.5 font-medium hover:text-[#E8A598] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8A598]" />
              <span>{PARIS_NAILS_INFO.formattedPhone}</span>
            </a>
            <span className="text-stone-500">|</span>
            <a
              href={PARIS_NAILS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-stone-300 hover:text-[#E8A598] transition-colors"
              title="Visit our Facebook Page"
            >
              <Facebook className="w-3.5 h-3.5 text-[#E8A598]" />
              <span className="hidden md:inline">Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDFB]/95 backdrop-blur-md shadow-sm border-b border-[#F0E6E4] py-3'
            : 'bg-[#FFFDFB] py-4 border-b border-[#F5EBE8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F8D7DA] to-[#FCE8E6] border border-[#E8C8C6] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-[#B85C50]" />
            </div>
            <div>
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-wide text-[#2C2420] block leading-none">
                Paris Nails
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#B85C50] font-semibold block mt-0.5">
                Moses Lake, WA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-[#4A3E39]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#B85C50] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B85C50] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${PARIS_NAILS_INFO.phone}`}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#E8C8C6] text-[#2C2420] bg-white hover:bg-[#FCE8E6] transition-colors text-xs font-semibold shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#B85C50]" />
              <span>Call Salon</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#B85C50] to-[#C96B5F] hover:from-[#A24D42] hover:to-[#B85C50] text-white text-xs font-semibold shadow-sm transition-all hover:shadow-md cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenBooking}
              className="md:hidden px-3 py-1.5 rounded-full bg-[#B85C50] text-white text-xs font-semibold shadow-2xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2C2420] hover:bg-[#F8D7DA]/50 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FFFDFB] border-b border-[#F0E6E4] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-[#2C2420] hover:text-[#B85C50] border-b border-[#F7EFEA]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <a
                href={`tel:${PARIS_NAILS_INFO.phone}`}
                className="w-full py-2.5 rounded-xl border border-[#E8C8C6] text-[#2C2420] bg-white flex items-center justify-center space-x-2 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#B85C50]" />
                <span>Call {PARIS_NAILS_INFO.formattedPhone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-xl bg-[#B85C50] text-white flex items-center justify-center space-x-2 text-sm font-semibold shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
