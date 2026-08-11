import React from 'react';
import { Calendar, Phone, MapPin, Sparkles, Star, Clock, CheckCircle2 } from 'lucide-react';
import { PARIS_NAILS_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF7F5]">
      {/* Soft background decorative circles */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-br from-[#FCE8E6] via-[#F8D7DA]/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E8C8C6] shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#B85C50]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B85C50]">
                Premier Nail Salon in Moses Lake, WA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#2C2420] leading-[1.15] tracking-tight">
              Beautiful Nails. <br />
              <span className="bg-gradient-to-r from-[#B85C50] via-[#C96B5F] to-[#8C3A30] bg-clip-text text-transparent">
                Beautiful You.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#5C4E48] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Professional nail care and beautiful designs in Moses Lake, Washington. Indulge in relaxing manicures, revitalizing pedicures, durable acrylics, and handcrafted nail art.
            </p>

            {/* Business Address Card */}
            <div className="p-4 rounded-2xl bg-white/90 border border-[#F0E0DC] shadow-xs max-w-lg mx-auto lg:mx-0 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#FCE8E6] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#B85C50]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B85C50] block">
                    {PARIS_NAILS_INFO.name}
                  </span>
                  <a
                    href={PARIS_NAILS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#2C2420] hover:text-[#B85C50] transition-colors block"
                  >
                    {PARIS_NAILS_INFO.fullAddress}
                  </a>
                </div>
              </div>

              <a
                href={PARIS_NAILS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#B85C50] underline hover:text-[#8C3A30] shrink-0"
              >
                Get Directions &rarr;
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#B85C50] to-[#C96B5F] hover:from-[#A24D42] hover:to-[#B85C50] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${PARIS_NAILS_INFO.phone}`}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-[#FCE8E6] text-[#2C2420] border border-[#E8C8C6] font-semibold text-sm shadow-xs transition-all flex items-center justify-center space-x-2.5"
              >
                <Phone className="w-4 h-4 text-[#B85C50]" />
                <span>Call Now (+1 833-908-0040)</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-[#EFE5E2] text-xs font-medium text-[#5C4E48]">
              <div className="flex items-center justify-center lg:justify-start space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B85C50]" />
                <span>Walk-ins Welcome</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B85C50]" />
                <span>Sanitizing Standards</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#B85C50]" />
                <span>Custom Nail Art</span>
              </div>
            </div>

          </div>

          {/* Salon Visual / Image Frame Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#F8D7DA] to-[#E8C8C6] rounded-3xl transform rotate-2 opacity-80" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop"
                  alt="Paris Nails Salon - Beautiful Nails and Manicure"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Badge 1: Hours */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-[#F0E0DC] flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#B85C50]" />
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold text-[#B85C50] block leading-none">Hours</span>
                    <span className="text-xs font-semibold text-[#2C2420]">Mon–Sat 9AM–7PM</span>
                  </div>
                </div>

                {/* Floating Badge 2: Google Rating */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-md border border-[#F0E0DC] flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#FCE8E6] flex items-center justify-center">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-bold text-[#2C2420]">5.0</span>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-[#7A6B65]">Top Rated in Moses Lake</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
