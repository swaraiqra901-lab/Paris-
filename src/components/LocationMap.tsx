import React from 'react';
import { MapPin, Navigation, Phone, ExternalLink, Building2 } from 'lucide-react';
import { PARIS_NAILS_INFO } from '../data/salonData';
import { HoursSection } from './HoursSection';

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#FAF7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B85C50] block">
            Visit Our Salon
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#2C2420]">
            Location & Directions
          </h2>
          <p className="text-sm text-[#5C4E48]">
            We are conveniently located in downtown Moses Lake, Washington on W 4th Ave.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Map Display Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-[#F0E0DC] shadow-xs p-3 space-y-3">
            
            {/* Embedded Google Maps iFrame */}
            <div className="relative h-[380px] sm:h-[420px] rounded-xl overflow-hidden bg-stone-100">
              <iframe
                title="Paris Nails Moses Lake Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.8835820468356!2d-119.2802888234393!3d47.13010377115033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5498425d57d77b67%3A0xb35a0ed7963d8ff1!2s114%20W%204th%20Ave%2C%20Moses%20Lake%2C%20WA%2098837!5e0!3m2!1sen!2sus!4v1718000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Address Banner below Map */}
            <div className="p-4 bg-[#FFFDFB] rounded-xl border border-[#F5EBE8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-start space-x-3 text-left w-full sm:w-auto">
                <div className="w-10 h-10 rounded-full bg-[#FCE8E6] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#B85C50]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2C2420]">
                    {PARIS_NAILS_INFO.name}
                  </h3>
                  <p className="text-xs text-[#5C4E48]">
                    {PARIS_NAILS_INFO.address}
                  </p>
                  <p className="text-xs text-[#5C4E48]">
                    {PARIS_NAILS_INFO.cityStateZip}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                <a
                  href={PARIS_NAILS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#B85C50] hover:bg-[#A24D42] text-white text-xs font-semibold flex items-center justify-center space-x-2 shadow-xs transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

          </div>

          {/* Business Hours & Quick Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <HoursSection />

            {/* Salon Info Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#F0E0DC] shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#B85C50]">
                Contact Information
              </h4>
              <div className="space-y-2 text-xs text-[#4A3E39]">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#B85C50]" />
                  <span>Phone: </span>
                  <a href={`tel:${PARIS_NAILS_INFO.phone}`} className="font-semibold text-[#2C2420] hover:underline">
                    {PARIS_NAILS_INFO.formattedPhone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-[#B85C50]" />
                  <span>Address: {PARIS_NAILS_INFO.fullAddress}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ExternalLink className="w-4 h-4 text-[#B85C50]" />
                  <a
                    href={PARIS_NAILS_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B85C50] hover:underline font-semibold"
                  >
                    Paris Nails Facebook Page
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
