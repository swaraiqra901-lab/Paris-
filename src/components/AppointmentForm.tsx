import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, User, MessageSquare, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { PARIS_NAILS_INFO, SALON_SERVICES } from '../data/salonData';
import { AppointmentFormData } from '../types';

interface AppointmentFormProps {
  initialService?: string;
  initialNote?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialService = '',
  initialNote = '',
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    service: 'Manicure',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialNote) {
      setFormData((prev) => ({ ...prev, message: initialNote }));
    }
  }, [initialNote]);

  const timeOptions = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number so our team can contact you.');
      return;
    }

    // Process appointment request locally
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      preferredDate: '',
      preferredTime: '10:00 AM',
      service: 'Manicure',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#FFFDFB] border-t border-[#F5EBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-[#FAF7F5] rounded-3xl p-6 sm:p-10 border border-[#F0E0DC] shadow-md relative">
          
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-[#E8C8C6]">
              <Sparkles className="w-3.5 h-3.5 text-[#B85C50]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#B85C50]">Book Your Visit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#2C2420]">
              Request an Appointment
            </h2>
            <p className="text-sm text-[#5C4E48] max-w-xl mx-auto">
              Fill out the form below to request your preferred date and service at Paris Nails in Moses Lake.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-8 border border-[#E8C8C6] text-center space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif-luxury font-bold text-[#2C2420]">
                  Appointment Request Received!
                </h3>
                <p className="text-sm text-[#5C4E48] max-w-md mx-auto">
                  Thank you, <span className="font-bold text-[#2C2420]">{formData.name}</span>. We have received your appointment request for <span className="font-bold text-[#2C2420]">{formData.service}</span>.
                </p>
              </div>

              {/* Request Details Box */}
              <div className="p-4 rounded-xl bg-[#FAF7F5] border border-[#F0E0DC] text-left text-xs space-y-1.5 max-w-md mx-auto">
                <p><span className="font-bold text-[#2C2420]">Service:</span> {formData.service}</p>
                <p><span className="font-bold text-[#2C2420]">Requested Date:</span> {formData.preferredDate || 'Next Available'}</p>
                <p><span className="font-bold text-[#2C2420]">Requested Time:</span> {formData.preferredTime}</p>
                <p><span className="font-bold text-[#2C2420]">Phone:</span> {formData.phone}</p>
                {formData.message && <p><span className="font-bold text-[#2C2420]">Notes:</span> {formData.message}</p>}
              </div>

              <div className="p-3 bg-[#FCE8E6] text-[#8C3A30] rounded-xl text-xs font-medium max-w-md mx-auto">
                Note: Appointment requests are subject to salon confirmation. We will call or text your phone number to confirm your time slot.
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${PARIS_NAILS_INFO.phone}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#B85C50] text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-xs hover:bg-[#A24D42]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Salon Direct ({PARIS_NAILS_INFO.formattedPhone})</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white border border-[#E8C8C6] text-[#2C2420] text-xs font-bold hover:bg-[#FAF7F5] cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#2C2420] uppercase tracking-wider">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#B85C50] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#E8C8C6] rounded-xl text-xs text-[#2C2420] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B85C50]/30 focus:border-[#B85C50]"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#2C2420] uppercase tracking-wider">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#B85C50] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (509) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#E8C8C6] rounded-xl text-xs text-[#2C2420] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B85C50]/30 focus:border-[#B85C50]"
                    />
                  </div>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#2C2420] uppercase tracking-wider">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#B85C50] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#E8C8C6] rounded-xl text-xs text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85C50]/30 focus:border-[#B85C50]"
                    />
                  </div>
                </div>

                {/* Preferred Time */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#2C2420] uppercase tracking-wider">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#B85C50] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#E8C8C6] rounded-xl text-xs text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85C50]/30 focus:border-[#B85C50]"
                    >
                      {timeOptions.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Service Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#2C2420] uppercase tracking-wider">
                  Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#E8C8C6] rounded-xl text-xs text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85C50]/30 focus:border-[#B85C50]"
                >
                  {SALON_SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                  <option value="Multiple Services / Other">Multiple Services / Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#2C2420] uppercase tracking-wider">
                  Message / Special Requests
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#B85C50] absolute left-3.5 top-3.5" />
                  <textarea
                    rows={3}
                    placeholder="Tell us about desired custom designs, color ideas, or group bookings..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-[#E8C8C6] rounded-xl text-xs text-[#2C2420] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B85C50]/30 focus:border-[#B85C50]"
                  ></textarea>
                </div>
              </div>

              {/* Important Note */}
              <p className="text-[11px] text-[#8C3A30] font-medium text-center bg-[#FCE8E6] p-3 rounded-xl border border-[#F8D7DA]">
                * Appointment requests are subject to salon confirmation. We will call you to confirm your exact time slot.
              </p>

              {/* Form Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B85C50] to-[#C96B5F] hover:from-[#A24D42] hover:to-[#B85C50] text-white font-semibold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Appointment</span>
                </button>

                <div className="flex items-center space-x-2 text-xs text-[#5C4E48] text-center sm:text-right">
                  <span>Prefer immediate booking?</span>
                  <a
                    href={`tel:${PARIS_NAILS_INFO.phone}`}
                    className="font-bold text-[#B85C50] hover:underline flex items-center space-x-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call +1 833-908-0040</span>
                  </a>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
