import React from 'react';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';
import { PARIS_NAILS_INFO } from '../data/salonData';

export const HoursSection: React.FC = () => {
  // Calculate if open right now based on Moses Lake local time (Pacific Time)
  const getOpenStatus = () => {
    try {
      const now = new Date();
      // Format time in America/Los_Angeles timezone
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Los_Angeles',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(now);
      
      let weekday = '';
      let hour = 0;

      parts.forEach(p => {
        if (p.type === 'weekday') weekday = p.value;
        if (p.type === 'hour') hour = parseInt(p.value, 10);
      });

      if (weekday === 'Sunday') {
        return { isOpen: false, text: 'Closed Today (Sunday)' };
      }
      if (hour >= 9 && hour < 19) {
        return { isOpen: true, text: 'Open Now • Closes at 7:00 PM' };
      }
      return { isOpen: false, text: 'Closed Now • Opens Mon–Sat at 9:00 AM' };
    } catch {
      return { isOpen: true, text: 'Open Mon–Sat 9:00 AM – 7:00 PM' };
    }
  };

  const status = getOpenStatus();

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#F0E0DC] shadow-xs space-y-6">
      
      <div className="flex items-center justify-between border-b border-[#F5EBE8] pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-[#FCE8E6] flex items-center justify-center">
            <Clock className="w-5 h-5 text-[#B85C50]" />
          </div>
          <div>
            <h3 className="font-serif-luxury text-xl font-bold text-[#2C2420]">
              Business Hours
            </h3>
            <span className="text-xs text-[#7A6B65]">Moses Lake, Washington</span>
          </div>
        </div>

        {/* Live Status Badge */}
        <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1.5 ${
          status.isOpen
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            : 'bg-rose-50 text-rose-700 border border-rose-200'
        }`}>
          {status.isOpen ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          ) : (
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
          )}
          <span>{status.isOpen ? 'Open Today' : 'Closed Today'}</span>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="space-y-2 text-sm">
        {PARIS_NAILS_INFO.openingHours.map((schedule, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between py-2 px-3 rounded-lg text-xs font-medium ${
              schedule.closed
                ? 'bg-[#FAF7F5] text-[#9E8B83]'
                : 'bg-white hover:bg-[#FAF7F5] text-[#2C2420]'
            }`}
          >
            <span className="font-semibold">{schedule.days}</span>
            <span className={schedule.closed ? 'font-bold text-rose-600' : 'text-[#5C4E48]'}>
              {schedule.hours}
            </span>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="pt-2 border-t border-[#F5EBE8] text-[11px] text-[#7A6B65] text-center">
        <p>Walk-ins and scheduled appointments welcome during business hours.</p>
      </div>

    </div>
  );
};
