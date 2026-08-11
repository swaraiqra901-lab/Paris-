import React from 'react';
import { Sparkles, Palette, HeartHandshake, MapPin } from 'lucide-react';
import { SALON_BENEFITS } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return Sparkles;
      case 'Palette':
        return Palette;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'MapPin':
        return MapPin;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-[#FAF7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B85C50] block">
            The Paris Nails Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#2C2420]">
            Why Choose Paris Nails
          </h2>
          <p className="text-sm text-[#5C4E48]">
            We pride ourselves on providing exceptional nail artistry, clean facilities, and welcoming service right here in Moses Lake.
          </p>
        </div>

        {/* 4 Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SALON_BENEFITS.map((benefit, index) => {
            const IconComponent = getIcon(benefit.iconName);
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-[#F0E0DC] shadow-xs hover:shadow-md transition-all duration-300 space-y-4 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F8D7DA] to-[#FCE8E6] border border-[#E8C8C6] flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-[#B85C50]" />
                </div>

                <h3 className="font-serif-luxury text-xl font-bold text-[#2C2420]">
                  {benefit.title}
                </h3>

                <p className="text-xs text-[#5C4E48] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
