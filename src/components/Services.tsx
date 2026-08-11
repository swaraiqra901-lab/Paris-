import React from 'react';
import { Phone, Calendar, Check, Sparkles } from 'lucide-react';
import { SALON_SERVICES, PARIS_NAILS_INFO } from '../data/salonData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-[#FAF7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8C8C6]">
            <Sparkles className="w-3.5 h-3.5 text-[#B85C50]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B85C50]">Our Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#2C2420]">
            Nail Services & Treatments
          </h2>
          <p className="text-sm text-[#5C4E48]">
            Explore our range of professional nail care services tailored for durability, beauty, and relaxation in Moses Lake.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SALON_SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#F0E0DC] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden bg-[#FCE8E6]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {service.popular && (
                  <span className="absolute top-3 right-3 bg-[#B85C50] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-2xs">
                    Popular
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#2C2420]">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#5C4E48] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-1.5 pt-2 border-t border-[#F7EFEA]">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-2 text-[11px] text-[#4A3E39]">
                        <Check className="w-3.5 h-3.5 text-[#B85C50] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="pt-3 border-t border-[#F0E0DC] space-y-3">
                  <div className="bg-[#FAF7F5] px-3 py-1.5 rounded-lg text-center border border-[#F5EBE8]">
                    <span className="text-xs font-semibold text-[#8C3A30]">
                      {service.pricingText}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${PARIS_NAILS_INFO.phone}`}
                      className="px-3 py-2 rounded-xl border border-[#E8C8C6] bg-white hover:bg-[#FCE8E6] text-[#2C2420] text-xs font-semibold flex items-center justify-center space-x-1 transition-colors"
                      title="Call Salon"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#B85C50]" />
                      <span>Call to Book</span>
                    </a>

                    <button
                      onClick={() => onSelectService(service.name)}
                      className="px-3 py-2 rounded-xl bg-[#B85C50] hover:bg-[#A24D42] text-white text-xs font-semibold flex items-center justify-center space-x-1 shadow-2xs transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Request</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Pricing Notice */}
        <div className="mt-12 text-center p-4 rounded-2xl bg-white border border-[#E8C8C6] max-w-xl mx-auto shadow-2xs">
          <p className="text-xs text-[#5C4E48]">
            <span className="font-bold text-[#2C2420]">Note on Pricing:</span> Prices vary based on nail length, complexity of custom designs, and specific service options. Please call us at{' '}
            <a href={`tel:${PARIS_NAILS_INFO.phone}`} className="font-bold text-[#B85C50] underline">
              {PARIS_NAILS_INFO.formattedPhone}
            </a>{' '}
            for current pricing and walk-in availability.
          </p>
        </div>

      </div>
    </section>
  );
};
