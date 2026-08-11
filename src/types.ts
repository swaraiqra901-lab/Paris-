export interface ServiceItem {
  id: string;
  name: string;
  category: 'manicure' | 'pedicure' | 'enhancements' | 'nailart' | 'care';
  description: string;
  features: string[];
  pricingText: string; // Strictly "Contact us for current pricing"
  popular?: boolean;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'acrylic' | 'gel' | 'french' | 'nailart' | 'pedicure' | 'manicure' | 'elegant';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  cityStateZip: string;
  fullAddress: string;
  phone: string;
  formattedPhone: string;
  googleMapsUrl: string;
  facebookUrl: string;
  openingHours: {
    days: string;
    hours: string;
    closed: boolean;
  }[];
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  message: string;
}
