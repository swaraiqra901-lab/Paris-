import React from 'react';
import { Star, ExternalLink, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import { PARIS_NAILS_INFO } from '../data/salonData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#FFFDFB] border-t border-[#F5EBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#FFFDFB] via-[#FAF7F5] to-[#FCE8E6]/60 rounded-3xl p-8 sm:p-12 border border-[#F0E0DC] shadow-md relative overflow-hidden">
          
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            {/* Top Rating Pill */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#E8C8C6] shadow-2xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#2C2420]">5.0 Star Rated Salon</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#2C2420]">
              Customer Experiences & Reviews
            </h2>

            <p className="text-sm sm:text-base text-[#5C4E48] leading-relaxed max-w-2xl mx-auto">
              We value our clients' feedback and take pride in delivering clean, beautiful nail work every time. Read real customer reviews and ratings directly on our verified Google Maps listing.
            </p>

            {/* Feature Cards / Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              <div className="p-4 rounded-xl bg-white/80 border border-[#F0E0DC] space-y-1">
                <div className="flex items-center space-x-1.5 text-[#B85C50] font-bold text-xs uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Business</span>
                </div>
                <p className="text-xs font-semibold text-[#2C2420]">Paris Nails Moses Lake</p>
                <p className="text-[11px] text-[#7A6B65]">114 W 4th Ave, WA 98837</p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-[#F0E0DC] space-y-1">
                <div className="flex items-center space-x-1.5 text-[#B85C50] font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Quality Guaranteed</span>
                </div>
                <p className="text-xs font-semibold text-[#2C2420]">High Customer Satisfaction</p>
                <p className="text-[11px] text-[#7A6B65]">Trusted by Moses Lake locals</p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-[#F0E0DC] space-y-1">
                <div className="flex items-center space-x-1.5 text-[#B85C50] font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Google Reviews</span>
                </div>
                <p className="text-xs font-semibold text-[#2C2420]">Direct Google Integration</p>
                <p className="text-[11px] text-[#7A6B65]">Real authentic ratings</p>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-4">
              <a
                href={PARIS_NAILS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#B85C50] to-[#C96B5F] hover:from-[#A24D42] hover:to-[#B85C50] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>View Google Reviews</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-[#7A6B65]">
              Visited Paris Nails recently? We appreciate your feedback! Click above to share your review on Google.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
