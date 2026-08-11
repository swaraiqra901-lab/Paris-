import React from 'react';
import { Phone, Calendar, Navigation } from 'lucide-react';
import { PARIS_NAILS_INFO } from '../data/salonData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#F0E0DC] p-3 shadow-lg">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${PARIS_NAILS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#FAF7F5] border border-[#E8C8C6] text-[#2C2420] active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#B85C50] mb-0.5" />
          <span className="text-[10px] font-bold">Call Now</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#B85C50] to-[#C96B5F] text-white active:scale-95 transition-transform shadow-xs cursor-pointer"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">Book Visit</span>
        </button>

        <a
          href={PARIS_NAILS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#FAF7F5] border border-[#E8C8C6] text-[#2C2420] active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 text-[#B85C50] mb-0.5" />
          <span className="text-[10px] font-bold">Directions</span>
        </a>
      </div>
    </div>
  );
};
