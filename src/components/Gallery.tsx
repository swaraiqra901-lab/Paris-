import React, { useState } from 'react';
import { GALLERY_ITEMS, PARIS_NAILS_INFO } from '../data/salonData';
import { GalleryItem } from '../types';
import { Sparkles, Maximize2, X, Phone, Calendar } from 'lucide-react';

interface GalleryProps {
  onOpenBookingWithNote?: (note: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenBookingWithNote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageModal, setActiveImageModal] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Designs' },
    { id: 'acrylic', label: 'Acrylic Sets' },
    { id: 'gel', label: 'Gel Nails' },
    { id: 'french', label: 'French Tips' },
    { id: 'nailart', label: 'Nail Art' },
    { id: 'pedicure', label: 'Pedicures' },
    { id: 'manicure', label: 'Manicures' },
    { id: 'elegant', label: 'Elegant Styles' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-[#FFFDFB] border-t border-[#F5EBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF7F5] border border-[#E8C8C6]">
            <Sparkles className="w-3.5 h-3.5 text-[#B85C50]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B85C50]">Inspiration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#2C2420]">
            Nail Gallery & Custom Artwork
          </h2>
          <p className="text-sm text-[#5C4E48]">
            Browse our portfolio of manicures, pedicures, acrylic sets, and handcrafted custom nail art.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#B85C50] text-white shadow-xs'
                  : 'bg-[#FAF7F5] text-[#5C4E48] hover:bg-[#FCE8E6] border border-[#F0E0DC]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImageModal(item)}
              className="group relative bg-[#FAF7F5] rounded-2xl overflow-hidden border border-[#F0E0DC] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/80 via-[#2C2420]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FCE8E6]">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif-luxury text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-200 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="mt-3 flex items-center space-x-1.5 text-xs text-[#FCE8E6] font-semibold">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to view full photo</span>
                  </div>
                </div>

                {/* Always visible category badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#E8C8C6] shadow-2xs">
                  <span className="text-[10px] font-bold uppercase text-[#B85C50]">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImageModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-[#E8C8C6]">
              {/* Close button */}
              <button
                onClick={() => setActiveImageModal(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[85vh] overflow-y-auto">
                <img
                  src={activeImageModal.image}
                  alt={activeImageModal.title}
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B85C50]">
                      {activeImageModal.categoryLabel}
                    </span>
                    <h3 className="text-2xl font-serif-luxury font-bold text-[#2C2420]">
                      {activeImageModal.title}
                    </h3>
                    <p className="text-sm text-[#5C4E48] mt-1">
                      {activeImageModal.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0E0DC] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-[#7A6B65]">
                      Like this design? Show this photo to your nail tech at Paris Nails!
                    </p>

                    <div className="flex items-center space-x-2 w-full sm:w-auto">
                      <a
                        href={`tel:${PARIS_NAILS_INFO.phone}`}
                        className="px-4 py-2 rounded-xl border border-[#E8C8C6] text-[#2C2420] text-xs font-semibold flex items-center justify-center space-x-1.5 hover:bg-[#FCE8E6]"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#B85C50]" />
                        <span>Call Salon</span>
                      </a>

                      <button
                        onClick={() => {
                          const note = `I would like a design similar to "${activeImageModal.title}" from the gallery.`;
                          setActiveImageModal(null);
                          if (onOpenBookingWithNote) {
                            onOpenBookingWithNote(note);
                          }
                        }}
                        className="px-4 py-2 rounded-xl bg-[#B85C50] text-white text-xs font-semibold flex items-center justify-center space-x-1.5 hover:bg-[#A24D42] shadow-xs cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Request This Design</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
