import React from 'react';
import { Heart, ShieldCheck, Gem, Sparkles } from 'lucide-react';
import { PARIS_NAILS_INFO } from '../data/salonData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Hygienic & Clean Environment',
      description: 'Strict sanitation protocols with thoroughly sanitized equipment and disposable liners for ultimate client peace of mind.',
    },
    {
      icon: Gem,
      title: 'Quality Products & Brands',
      description: 'We use high-grade gels, durable acrylic powders, and non-toxic polish formulas for beautiful, long-lasting results.',
    },
    {
      icon: Heart,
      title: 'Attentive & Friendly Staff',
      description: 'Our skilled nail technicians listen attentively to your style preferences to craft custom nails you will adore.',
    },
    {
      icon: Sparkles,
      title: 'Relaxing Spa Pampering',
      description: 'Unwind in our serene atmosphere designed for self-care, comfort, and personalized nail care treatment.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#FFFDFB] border-t border-[#F5EBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image & Showcase Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Soft background glow */}
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#FCE8E6] rounded-3xl -z-10" />
              
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#F0E0DC]">
                <img
                  src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop"
                  alt="Paris Nails Salon Pedicure & Pampering Experience"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Decorative Accent Box */}
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-lg border border-[#F0E0DC] max-w-[220px]">
                <p className="font-serif-luxury text-2xl font-bold text-[#B85C50]">Paris Nails</p>
                <p className="text-xs text-[#5C4E48] font-medium mt-1">
                  114 W 4th Ave, Moses Lake, WA
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B85C50] block">
                About Our Salon
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#2C2420]">
                Welcome to {PARIS_NAILS_INFO.name}
              </h2>
            </div>

            {/* Exact requested text */}
            <blockquote className="text-lg text-[#3D312B] font-medium leading-relaxed bg-[#FAF7F5] p-6 rounded-2xl border-l-4 border-[#B85C50] shadow-2xs">
              "Welcome to Paris Nails, your local destination for beautiful nails, relaxing self-care, and professional nail services in Moses Lake. Our goal is to provide every guest with quality service and a beautiful result they can feel confident about."
            </blockquote>

            <p className="text-sm text-[#5C4E48] leading-relaxed">
              Whether you are stopping in for a quick polish change, a relaxing pedicure after work, or detailed custom nail extensions for a special event, our team treats every client with precision and warmth.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#FAF7F5] border border-[#F5EBE8]">
                    <div className="w-9 h-9 rounded-lg bg-[#FCE8E6] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4 text-[#B85C50]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#2C2420]">{item.title}</h3>
                      <p className="text-[11px] text-[#6B5C55] mt-0.5 leading-snug">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
