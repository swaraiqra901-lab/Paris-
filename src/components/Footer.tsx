import React from 'react';
import { Phone, MapPin, Facebook, Sparkles, Heart, ArrowUp } from 'lucide-react';
import { PARIS_NAILS_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2C2420] text-[#FAF7F5] pt-16 pb-24 md:pb-12 border-t border-[#3D312B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3D312B]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F8D7DA] to-[#FCE8E6] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#B85C50]" />
              </div>
              <div>
                <span className="font-serif-luxury text-2xl font-bold tracking-wide text-white block leading-none">
                  Paris Nails
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#E8A598] font-semibold block mt-0.5">
                  Moses Lake, WA
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              Paris Nails is Moses Lake's premier destination for professional manicures, relaxing pedicures, durable acrylic extensions, and beautiful custom nail art.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={`tel:${PARIS_NAILS_INFO.phone}`}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#B85C50] text-white text-xs font-semibold hover:bg-[#A24D42] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {PARIS_NAILS_INFO.formattedPhone}</span>
              </a>

              <a
                href={PARIS_NAILS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3D312B] flex items-center justify-center text-stone-300 hover:text-[#E8A598] hover:bg-[#4A3D36] transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#E8A598]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Nail Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Nail Art Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location & Hours</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact / Book Appointment</a>
              </li>
            </ul>
          </div>

          {/* Business Info & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#E8A598]">
              Salon Contact & Location
            </h3>
            
            <div className="space-y-2.5 text-xs text-stone-300">
              <a
                href={PARIS_NAILS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2.5 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#E8A598] shrink-0 mt-0.5" />
                <span>{PARIS_NAILS_INFO.fullAddress}</span>
              </a>

              <a
                href={`tel:${PARIS_NAILS_INFO.phone}`}
                className="flex items-center space-x-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E8A598] shrink-0" />
                <span>{PARIS_NAILS_INFO.formattedPhone}</span>
              </a>

              <div className="pt-2 border-t border-[#3D312B]">
                <p className="font-semibold text-white mb-1">Hours of Operation:</p>
                <p>Monday – Saturday: 9:00 AM – 7:00 PM</p>
                <p className="text-stone-400">Sunday: Closed</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p className="flex items-center space-x-1">
            <span>&copy; {new Date().getFullYear()} {PARIS_NAILS_INFO.name}. All rights reserved.</span>
            <span className="hidden sm:inline">Crafted with</span>
            <Heart className="w-3 h-3 text-[#E8A598] hidden sm:inline" />
            <span className="hidden sm:inline">for Moses Lake, WA.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#E8A598]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
