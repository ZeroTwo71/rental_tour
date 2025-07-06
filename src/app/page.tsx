"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  MapPin,
  Clock,
  Users,
  Star,
  Phone,
  Mail,
  Calendar,
  Car,
  Globe,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ChevronRight,
  Check,
  X,
} from "lucide-react";

interface TourPackage {
  id: string;
  name: string;
  nameEn: string;
  duration: string;
  price: string;
  priceEn: string;
  originalPrice?: string;
  thumbnail: string;
  rating: number;
  reviews: number;
  description: string;
  descriptionEn: string;
  highlights: string[];
  highlightsEn: string[];
  itinerary: Array<{
    day: string;
    title: string;
    titleEn: string;
    activities: string[];
    activitiesEn: string[];
  }>;
  inclusions: string[];
  inclusionsEn: string[];
  exclusions: string[];
  exclusionsEn: string[];
  vehicle: string;
  vehicleEn: string;
  category: string;
  categoryEn: string;
  isPopular?: boolean;
}

const tourPackages: TourPackage[] = [
  {
    id: "1",
    name: "Sunrise Ijen Crater 2D1N",
    nameEn: "Sunrise Ijen Crater 2D1N",
    duration: "2 Hari 1 Malam",
    price: "Rp 850.000",
    priceEn: "IDR 850,000",
    originalPrice: "Rp 1.200.000",
    thumbnail:
      "https://images.unsplash.com/photo-1571228393998-86891c770206?w=800&h=450&fit=crop",
    rating: 4.8,
    reviews: 156,
    description:
      "Nikmati keindahan sunrise di kawah Ijen yang terkenal dengan blue fire-nya",
    descriptionEn:
      "Experience the stunning sunrise at Ijen Crater famous for its blue fire phenomenon",
    highlights: [
      "Blue Fire Ijen Crater",
      "Sunrise di Kawah Ijen",
      "Pemandangan Danau Asam",
      "Transportasi Honda Comfortable",
    ],
    highlightsEn: [
      "Blue Fire Ijen Crater",
      "Sunrise at Ijen Crater",
      "Acid Lake View",
      "Honda Comfortable Transportation",
    ],
    itinerary: [
      {
        day: "Hari 1",
        title: "Perjalanan ke Banyuwangi",
        titleEn: "Journey to Banyuwangi",
        activities: [
          "Penjemputan di lokasi yang disepakati",
          "Perjalanan menuju Banyuwangi",
          "Check-in hotel",
          "Istirahat dan persiapan untuk tur esok hari",
        ],
        activitiesEn: [
          "Pick-up at agreed location",
          "Journey to Banyuwangi",
          "Hotel check-in",
          "Rest and preparation for tomorrow's tour",
        ],
      },
      {
        day: "Hari 2",
        title: "Ijen Crater Tour",
        titleEn: "Ijen Crater Tour",
        activities: [
          "Berangkat jam 01:00 menuju Paltuding",
          "Trekking ke kawah Ijen (2 jam)",
          "Menyaksikan Blue Fire dan Sunrise",
          "Kembali ke base camp",
          "Perjalanan pulang",
        ],
        activitiesEn: [
          "Departure at 01:00 to Paltuding",
          "Trekking to Ijen Crater (2 hours)",
          "Witness Blue Fire and Sunrise",
          "Return to base camp",
          "Journey back home",
        ],
      },
    ],
    inclusions: [
      "Transportasi Honda Comfortable AC",
      "Akomodasi hotel 1 malam",
      "Guide lokal berpengalaman",
      "Masker gas untuk blue fire",
      "Dokumentasi foto",
      "Air mineral",
    ],
    inclusionsEn: [
      "Honda Comfortable AC Transportation",
      "Hotel accommodation 1 night",
      "Experienced local guide",
      "Gas mask for blue fire",
      "Photo documentation",
      "Mineral water",
    ],
    exclusions: [
      "Makan dan minum",
      "Tiket masuk objek wisata",
      "Keperluan pribadi",
      "Tips guide dan driver",
    ],
    exclusionsEn: [
      "Meals and drinks",
      "Tourist attraction entrance tickets",
      "Personal expenses",
      "Guide and driver tips",
    ],
    vehicle: "Honda Mobilio / Honda BR-V",
    vehicleEn: "Honda Mobilio / Honda BR-V",
    category: "Petualangan",
    categoryEn: "Adventure",
    isPopular: true,
  },
  {
    id: "2",
    name: "Bromo Tengger Semeru 3D2N",
    nameEn: "Bromo Tengger Semeru 3D2N",
    duration: "3 Hari 2 Malam",
    price: "Rp 1.250.000",
    priceEn: "IDR 1,250,000",
    originalPrice: "Rp 1.500.000",
    thumbnail:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&h=450&fit=crop",
    rating: 4.9,
    reviews: 203,
    description:
      "Eksplorasi keindahan Bromo dan Semeru dengan paket lengkap 3 hari 2 malam",
    descriptionEn:
      "Explore the beauty of Bromo and Semeru with a complete 3-day 2-night package",
    highlights: [
      "Sunrise di Penanjakan",
      "Kawah Bromo",
      "Lautan Pasir",
      "Coban Rondo Waterfall",
      "Transportasi Honda Premium",
    ],
    highlightsEn: [
      "Sunrise at Penanjakan",
      "Bromo Crater",
      "Sea of Sand",
      "Coban Rondo Waterfall",
      "Honda Premium Transportation",
    ],
    itinerary: [
      {
        day: "Hari 1",
        title: "Perjalanan ke Malang",
        titleEn: "Journey to Malang",
        activities: [
          "Penjemputan di lokasi yang disepakati",
          "Perjalanan menuju Malang",
          "Check-in hotel",
          "Jalan-jalan kota Malang",
        ],
        activitiesEn: [
          "Pick-up at agreed location",
          "Journey to Malang",
          "Hotel check-in",
          "Malang city tour",
        ],
      },
      {
        day: "Hari 2",
        title: "Bromo Sunrise Tour",
        titleEn: "Bromo Sunrise Tour",
        activities: [
          "Berangkat jam 03:00 ke Penanjakan",
          "Sunrise di Penanjakan",
          "Explore kawah Bromo",
          "Lautan Pasir",
          "Kembali ke hotel",
        ],
        activitiesEn: [
          "Departure at 03:00 to Penanjakan",
          "Sunrise at Penanjakan",
          "Explore Bromo crater",
          "Sea of Sand",
          "Return to hotel",
        ],
      },
      {
        day: "Hari 3",
        title: "Coban Rondo & Kembali",
        titleEn: "Coban Rondo & Return",
        activities: [
          "Check-out hotel",
          "Kunjungi Coban Rondo",
          "Makan siang",
          "Perjalanan pulang",
        ],
        activitiesEn: [
          "Hotel check-out",
          "Visit Coban Rondo",
          "Lunch",
          "Journey back home",
        ],
      },
    ],
    inclusions: [
      "Transportasi Honda CR-V/HR-V AC",
      "Akomodasi hotel 2 malam",
      "Guide lokal berpengalaman",
      "Jeep Bromo",
      "Dokumentasi foto & video",
      "Air mineral",
    ],
    inclusionsEn: [
      "Honda CR-V/HR-V AC Transportation",
      "Hotel accommodation 2 nights",
      "Experienced local guide",
      "Bromo Jeep",
      "Photo & video documentation",
      "Mineral water",
    ],
    exclusions: [
      "Makan dan minum",
      "Tiket masuk objek wisata",
      "Keperluan pribadi",
      "Tips guide dan driver",
    ],
    exclusionsEn: [
      "Meals and drinks",
      "Tourist attraction entrance tickets",
      "Personal expenses",
      "Guide and driver tips",
    ],
    vehicle: "Honda CR-V / Honda HR-V",
    vehicleEn: "Honda CR-V / Honda HR-V",
    category: "Petualangan",
    categoryEn: "Adventure",
    isPopular: true,
  },
  {
    id: "3",
    name: "Banyuwangi City Tour 1 Hari",
    nameEn: "Banyuwangi City Tour 1 Day",
    duration: "1 Hari",
    price: "Rp 450.000",
    priceEn: "IDR 450,000",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 89,
    description:
      "Jelajahi keindahan kota Banyuwangi dan sekitarnya dalam satu hari penuh",
    descriptionEn:
      "Explore the beauty of Banyuwangi city and surroundings in one full day",
    highlights: [
      "Pantai Pulau Merah",
      "Pantai Boom",
      "Kampung Osing",
      "Kuliner Khas Banyuwangi",
      "Transportasi Honda Nyaman",
    ],
    highlightsEn: [
      "Red Island Beach",
      "Boom Beach",
      "Osing Village",
      "Banyuwangi Local Cuisine",
      "Honda Comfortable Transportation",
    ],
    itinerary: [
      {
        day: "Hari 1",
        title: "Banyuwangi City Tour",
        titleEn: "Banyuwangi City Tour",
        activities: [
          "Penjemputan di lokasi yang disepakati",
          "Kunjungi Pantai Pulau Merah",
          "Makan siang di Kampung Osing",
          "Pantai Boom dan sunset",
          "Kembali ke lokasi drop-off",
        ],
        activitiesEn: [
          "Pick-up at agreed location",
          "Visit Red Island Beach",
          "Lunch at Osing Village",
          "Boom Beach and sunset",
          "Return to drop-off location",
        ],
      },
    ],
    inclusions: [
      "Transportasi Honda Mobilio AC",
      "Guide lokal berpengalaman",
      "Dokumentasi foto",
      "Air mineral",
      "Tol dan parkir",
    ],
    inclusionsEn: [
      "Honda Mobilio AC Transportation",
      "Experienced local guide",
      "Photo documentation",
      "Mineral water",
      "Toll and parking",
    ],
    exclusions: [
      "Makan dan minum",
      "Tiket masuk objek wisata",
      "Keperluan pribadi",
      "Tips guide dan driver",
    ],
    exclusionsEn: [
      "Meals and drinks",
      "Tourist attraction entrance tickets",
      "Personal expenses",
      "Guide and driver tips",
    ],
    vehicle: "Honda Mobilio",
    vehicleEn: "Honda Mobilio",
    category: "Wisata Kota",
    categoryEn: "City Tour",
  },
  {
    id: "4",
    name: "Baluran Safari 2D1N",
    nameEn: "Baluran Safari 2D1N",
    duration: "2 Hari 1 Malam",
    price: "Rp 750.000",
    priceEn: "IDR 750,000",
    thumbnail:
      "https://images.unsplash.com/photo-1640399562300-83bd313ef9a9?w=800&h=450&fit=crop",
    rating: 4.7,
    reviews: 124,
    description:
      "Petualangan safari di Taman Nasional Baluran, Afrika van Java",
    descriptionEn:
      "Safari adventure in Baluran National Park, the Africa of Java",
    highlights: [
      "Taman Nasional Baluran",
      "Safari Wildlife",
      "Pantai Bama",
      "Savana Bekol",
      "Transportasi Honda 4WD",
    ],
    highlightsEn: [
      "Baluran National Park",
      "Safari Wildlife",
      "Bama Beach",
      "Bekol Savanna",
      "Honda 4WD Transportation",
    ],
    itinerary: [
      {
        day: "Hari 1",
        title: "Perjalanan ke Baluran",
        titleEn: "Journey to Baluran",
        activities: [
          "Penjemputan di lokasi yang disepakati",
          "Perjalanan menuju Baluran",
          "Check-in penginapan",
          "Safari sore di Savana Bekol",
        ],
        activitiesEn: [
          "Pick-up at agreed location",
          "Journey to Baluran",
          "Accommodation check-in",
          "Evening safari at Bekol Savanna",
        ],
      },
      {
        day: "Hari 2",
        title: "Baluran Safari & Pantai Bama",
        titleEn: "Baluran Safari & Bama Beach",
        activities: [
          "Safari pagi di Taman Nasional",
          "Kunjungi Pantai Bama",
          "Makan siang",
          "Perjalanan pulang",
        ],
        activitiesEn: [
          "Morning safari in National Park",
          "Visit Bama Beach",
          "Lunch",
          "Journey back home",
        ],
      },
    ],
    inclusions: [
      "Transportasi Honda Ridgeline 4WD",
      "Akomodasi 1 malam",
      "Guide safari berpengalaman",
      "Tiket masuk Taman Nasional",
      "Dokumentasi foto",
      "Air mineral",
    ],
    inclusionsEn: [
      "Honda Ridgeline 4WD Transportation",
      "Accommodation 1 night",
      "Experienced safari guide",
      "National Park entrance ticket",
      "Photo documentation",
      "Mineral water",
    ],
    exclusions: [
      "Makan dan minum",
      "Keperluan pribadi",
      "Tips guide dan driver",
    ],
    exclusionsEn: [
      "Meals and drinks",
      "Personal expenses",
      "Guide and driver tips",
    ],
    vehicle: "Honda Ridgeline 4WD",
    vehicleEn: "Honda Ridgeline 4WD",
    category: "Safari",
    categoryEn: "Safari",
  },
  {
    id: "5",
    name: "Kawah Ijen & Pantai Plengkung 3D2N",
    nameEn: "Ijen Crater & Plengkung Beach 3D2N",
    duration: "3 Hari 2 Malam",
    price: "Rp 1.150.000",
    priceEn: "IDR 1,150,000",
    originalPrice: "Rp 1.400.000",
    thumbnail:
      "https://images.unsplash.com/photo-1629735990937-8c24ffd1a413?w=800&h=450&fit=crop",
    rating: 4.9,
    reviews: 178,
    description:
      "Kombinasi petualangan blue fire Ijen dan surfing di pantai Plengkung yang eksotis",
    descriptionEn:
      "Combination of Ijen blue fire adventure and surfing at exotic Plengkung beach",
    highlights: [
      "Blue Fire Ijen Crater",
      "Sunrise di Kawah Ijen",
      "Pantai Plengkung (G-Land)",
      "Surfing Experience",
      "Turtle Conservation",
      "Transportasi Honda 4WD",
    ],
    highlightsEn: [
      "Blue Fire Ijen Crater",
      "Sunrise at Ijen Crater",
      "Plengkung Beach (G-Land)",
      "Surfing Experience",
      "Turtle Conservation",
      "Honda 4WD Transportation",
    ],
    itinerary: [
      {
        day: "Hari 1",
        title: "Perjalanan ke Banyuwangi",
        titleEn: "Journey to Banyuwangi",
        activities: [
          "Penjemputan di lokasi yang disepakati",
          "Perjalanan menuju Banyuwangi",
          "Check-in hotel",
          "Jalan-jalan kota Banyuwangi",
          "Persiapan untuk tur Ijen",
        ],
        activitiesEn: [
          "Pick-up at agreed location",
          "Journey to Banyuwangi",
          "Hotel check-in",
          "Banyuwangi city tour",
          "Preparation for Ijen tour",
        ],
      },
      {
        day: "Hari 2",
        title: "Ijen Crater Tour",
        titleEn: "Ijen Crater Tour",
        activities: [
          "Berangkat jam 01:00 menuju Paltuding",
          "Trekking ke kawah Ijen",
          "Menyaksikan Blue Fire dan Sunrise",
          "Kembali ke base camp",
          "Perjalanan ke Plengkung Beach",
          "Check-in penginapan pantai",
        ],
        activitiesEn: [
          "Departure at 01:00 to Paltuding",
          "Trekking to Ijen Crater",
          "Witness Blue Fire and Sunrise",
          "Return to base camp",
          "Journey to Plengkung Beach",
          "Beach accommodation check-in",
        ],
      },
      {
        day: "Hari 3",
        title: "Plengkung Beach & Kembali",
        titleEn: "Plengkung Beach & Return",
        activities: [
          "Sunrise di Pantai Plengkung",
          "Surfing session (optional)",
          "Turtle conservation visit",
          "Makan siang seafood",
          "Perjalanan pulang",
        ],
        activitiesEn: [
          "Sunrise at Plengkung Beach",
          "Surfing session (optional)",
          "Turtle conservation visit",
          "Seafood lunch",
          "Journey back home",
        ],
      },
    ],
    inclusions: [
      "Transportasi Honda Ridgeline 4WD",
      "Akomodasi hotel & beach camp",
      "Guide lokal berpengalaman",
      "Masker gas untuk blue fire",
      "Surfboard rental",
      "Dokumentasi foto & video",
      "Air mineral",
    ],
    inclusionsEn: [
      "Honda Ridgeline 4WD Transportation",
      "Hotel & beach camp accommodation",
      "Experienced local guide",
      "Gas mask for blue fire",
      "Surfboard rental",
      "Photo & video documentation",
      "Mineral water",
    ],
    exclusions: [
      "Makan dan minum",
      "Tiket masuk objek wisata",
      "Keperluan pribadi",
      "Tips guide dan driver",
      "Peralatan surfing pribadi",
    ],
    exclusionsEn: [
      "Meals and drinks",
      "Tourist attraction entrance tickets",
      "Personal expenses",
      "Guide and driver tips",
      "Personal surfing equipment",
    ],
    vehicle: "Honda Ridgeline 4WD",
    vehicleEn: "Honda Ridgeline 4WD",
    category: "Petualangan & Pantai",
    categoryEn: "Adventure & Beach",
    isPopular: true,
  },
  {
    id: "6",
    name: "Taman Nasional Alas Purwo 2D1N",
    nameEn: "Alas Purwo National Park 2D1N",
    duration: "2 Hari 1 Malam",
    price: "Rp 680.000",
    priceEn: "IDR 680,000",
    thumbnail:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop",
    rating: 4.5,
    reviews: 95,
    description:
      "Jelajahi hutan tropis tertua di Pulau Jawa dengan keanekaragaman flora dan fauna",
    descriptionEn:
      "Explore the oldest tropical forest in Java Island with diverse flora and fauna",
    highlights: [
      "Taman Nasional Alas Purwo",
      "Hutan Tropis Tertua",
      "Wildlife Observation",
      "Pantai Trianggulasi",
      "Cave Istana",
      "Transportasi Honda SUV",
    ],
    highlightsEn: [
      "Alas Purwo National Park",
      "Oldest Tropical Forest",
      "Wildlife Observation",
      "Trianggulasi Beach",
      "Istana Cave",
      "Honda SUV Transportation",
    ],
    itinerary: [
      {
        day: "Hari 1",
        title: "Perjalanan ke Alas Purwo",
        titleEn: "Journey to Alas Purwo",
        activities: [
          "Penjemputan di lokasi yang disepakati",
          "Perjalanan menuju Alas Purwo",
          "Check-in penginapan",
          "Orientasi dan briefing",
          "Jelajah hutan sore",
        ],
        activitiesEn: [
          "Pick-up at agreed location",
          "Journey to Alas Purwo",
          "Accommodation check-in",
          "Orientation and briefing",
          "Evening forest exploration",
        ],
      },
      {
        day: "Hari 2",
        title: "Wildlife Safari & Pantai",
        titleEn: "Wildlife Safari & Beach",
        activities: [
          "Safari pagi di taman nasional",
          "Wildlife observation",
          "Kunjungi Cave Istana",
          "Pantai Trianggulasi",
          "Makan siang",
          "Perjalanan pulang",
        ],
        activitiesEn: [
          "Morning safari in national park",
          "Wildlife observation",
          "Visit Cave Istana",
          "Trianggulasi Beach",
          "Lunch",
          "Journey back home",
        ],
      },
    ],
    inclusions: [
      "Transportasi Honda CR-V",
      "Akomodasi 1 malam",
      "Guide ranger berpengalaman",
      "Tiket masuk Taman Nasional",
      "Dokumentasi foto",
      "Air mineral",
      "Peralatan trekking",
    ],
    inclusionsEn: [
      "Honda CR-V Transportation",
      "Accommodation 1 night",
      "Experienced ranger guide",
      "National Park entrance ticket",
      "Photo documentation",
      "Mineral water",
      "Trekking equipment",
    ],
    exclusions: [
      "Makan dan minum",
      "Keperluan pribadi",
      "Tips guide dan driver",
      "Peralatan camping tambahan",
    ],
    exclusionsEn: [
      "Meals and drinks",
      "Personal expenses",
      "Guide and driver tips",
      "Additional camping equipment",
    ],
    vehicle: "Honda CR-V",
    vehicleEn: "Honda CR-V",
    category: "Alam & Wildlife",
    categoryEn: "Nature & Wildlife",
  },
];

const heroImages = [
  "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&h=450&fit=crop",
  "https://images.unsplash.com/photo-1629735990937-8c24ffd1a413?w=800&h=450&fit=crop",
  "https://images.unsplash.com/photo-1571228393998-86891c770206?w=800&h=450&fit=crop",
  "https://images.unsplash.com/photo-1640399562300-83bd313ef9a9?w=800&h=450&fit=crop",
];

export default function BanyuwangiTourPage() {
  const [language, setLanguage] = useState<"id" | "en">("id");
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(
    null
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  // Refs for scroll animations
  const headerRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const packagesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  // Auto-scroll carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all sections
    const sections = [headerRef, heroRef, featuresRef, packagesRef, aboutRef, contactRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Helper function to check if element is visible
  const isVisible = (elementId: string) => visibleElements.has(elementId);

  const getText = (id: string, en: string) => {
    return language === "id" ? id : en;
  };

  const getTextArray = (id: string[], en: string[]) => {
    return language === "id" ? id : en;
  };

  const handleWhatsAppClick = (packageName?: string) => {
    const message = packageName
      ? `Halo, saya tertarik dengan paket tour ${packageName}. Bisa minta informasi lebih detail?`
      : "Halo, saya tertarik dengan paket tour Banyuwangi. Bisa minta informasi lebih detail?";

    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header */}
      <header
        ref={headerRef}
        id="header"
        className={`bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-blue-100 transition-all duration-700 ${
          isVisible('header') ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className={`flex items-center space-x-2 transition-all duration-700 delay-200 ${
              isVisible('header') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Banyuwangi Tours
                </h1>
                <p className="text-xs text-gray-500">Honda Rental & Tour</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className={`hidden md:flex items-center space-x-8 transition-all duration-700 delay-500 ${
              isVisible('header') ? 'opacity-100' : 'opacity-0'
            }`}>
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors transform hover:scale-105"
              >
                {getText("Beranda", "Home")}
              </a>
              <a
                href="#packages"
                className="text-gray-700 hover:text-blue-600 transition-colors transform hover:scale-105"
              >
                {getText("Paket Tour", "Tour Packages")}
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors transform hover:scale-105"
              >
                {getText("Tentang", "About")}
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors transform hover:scale-105"
              >
                {getText("Kontak", "Contact")}
              </a>
            </nav>

            {/* Language Switcher */}
            <div className={`flex items-center space-x-4 transition-all duration-700 delay-300 ${
              isVisible('header') ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <Globe className="w-4 h-4" />
                <span>{language === "id" ? "ID" : "EN"}</span>
              </Button>
              <Button
                onClick={() => handleWhatsAppClick()}
                className="bg-green-500 hover:bg-green-600 text-white hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {getText("Hubungi Kami", "Contact Us")}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section
        ref={heroRef}
        id="home"
        className="relative"
      >
        <div className="relative w-full h-[70vh] overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center text-white px-4">
                    <h2 className={`text-5xl md:text-6xl font-bold mb-4 transition-all duration-1000 ${
                      isVisible('home') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                      {getText("Jelajahi Banyuwangi", "Explore Banyuwangi")}
                    </h2>
                    <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
                      isVisible('home') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                      {getText(
                        "Nikmati keindahan alam Banyuwangi dengan paket tour terbaik menggunakan kendaraan Honda yang nyaman dan terpercaya",
                        "Experience the natural beauty of Banyuwangi with the best tour packages using comfortable and reliable Honda vehicles"
                      )}
                    </p>
                    <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
                      isVisible('home') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                      <Button
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform"
                        onClick={() =>
                          document
                            .getElementById("packages")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        {getText("Lihat Paket Tour", "View Tour Packages")}
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                      <Button
                        size="lg"
                        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold border-2 border-green-500 hover:border-green-600 hover:scale-105 transition-transform"
                        onClick={() => handleWhatsAppClick()}
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {getText("Konsultasi Gratis", "Free Consultation")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        id="features"
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible('features') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getText("Mengapa Memilih Kami?", "Why Choose Us?")}
            </h2>
            <p className="text-xl text-gray-600">
              {getText(
                "Pengalaman terbaik dengan layanan profesional dan kendaraan Honda berkualitas",
                "Best experience with professional service and quality Honda vehicles"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`text-center p-6 hover:scale-105 transition-all duration-1000 delay-200 ${
              isVisible('features') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {getText("Kendaraan Honda Premium", "Premium Honda Vehicles")}
              </h3>
              <p className="text-gray-600">
                {getText(
                  "Armada kendaraan Honda terbaru dengan kondisi prima dan perawatan berkala",
                  "Latest Honda vehicle fleet in excellent condition with regular maintenance"
                )}
              </p>
            </div>

            <div className={`text-center p-6 hover:scale-105 transition-all duration-1000 delay-400 ${
              isVisible('features') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {getText("Guide Berpengalaman", "Experienced Guides")}
              </h3>
              <p className="text-gray-600">
                {getText(
                  "Guide lokal berpengalaman yang mengenal medan dan budaya Banyuwangi",
                  "Experienced local guides familiar with Banyuwangi terrain and culture"
                )}
              </p>
            </div>

            <div className={`text-center p-6 hover:scale-105 transition-all duration-1000 delay-600 ${
              isVisible('features') ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {getText("Pelayanan Terbaik", "Best Service")}
              </h3>
              <p className="text-gray-600">
                {getText(
                  "Layanan 24/7 dengan komitmen memberikan pengalaman tour terbaik",
                  "24/7 service with commitment to provide the best tour experience"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section
        ref={packagesRef}
        id="packages"
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible('packages') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getText("Paket Tour Populer", "Popular Tour Packages")}
            </h2>
            <p className="text-xl text-gray-600">
              {getText(
                "Pilih paket tour sesuai dengan preferensi dan budget Anda",
                "Choose tour packages according to your preferences and budget"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tourPackages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className={`group hover:shadow-xl transition-all duration-700 border-0 shadow-lg overflow-hidden flex flex-col h-full ${
                  isVisible('packages') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {pkg.isPopular && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      {getText("Populer", "Popular")}
                    </Badge>
                  </div>
                )}

                <div className="relative">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={pkg.thumbnail}
                      alt={getText(pkg.name, pkg.nameEn)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {pkg.rating}
                        </span>
                      </div>
                      <span className="text-sm opacity-75">
                        ({pkg.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-1">
                        {getText(pkg.name, pkg.nameEn)}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {getText(pkg.category, pkg.categoryEn)}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-sm line-clamp-2">
                    {getText(pkg.description, pkg.descriptionEn)}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 flex-1 flex flex-col">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Car className="w-4 h-4" />
                        <span>Honda</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          {getText(pkg.price, pkg.priceEn)}
                        </div>
                        {pkg.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            {pkg.originalPrice}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => setSelectedPackage(pkg)}
                        >
                          {getText("Detail", "Details")}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">
                            {getText(pkg.name, pkg.nameEn)}
                          </DialogTitle>
                        </DialogHeader>

                        {selectedPackage && (
                          <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <AspectRatio ratio={16 / 9}>
                                  <img
                                    src={selectedPackage.thumbnail}
                                    alt={getText(
                                      selectedPackage.name,
                                      selectedPackage.nameEn
                                    )}
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                </AspectRatio>
                              </div>
                              <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                  <div className="flex items-center space-x-1">
                                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    <span className="font-medium">
                                      {selectedPackage.rating}
                                    </span>
                                    <span className="text-gray-500">
                                      ({selectedPackage.reviews} reviews)
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <div className="flex items-center space-x-2">
                                    <Clock className="w-5 h-5 text-blue-600" />
                                    <span>{selectedPackage.duration}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Car className="w-5 h-5 text-blue-600" />
                                    <span>
                                      {getText(
                                        selectedPackage.vehicle,
                                        selectedPackage.vehicleEn
                                      )}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                    <span>
                                      {getText(
                                        selectedPackage.category,
                                        selectedPackage.categoryEn
                                      )}
                                    </span>
                                  </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                  <div className="text-3xl font-bold text-blue-600 mb-1">
                                    {getText(
                                      selectedPackage.price,
                                      selectedPackage.priceEn
                                    )}
                                  </div>
                                  {selectedPackage.originalPrice && (
                                    <div className="text-gray-500 line-through">
                                      {selectedPackage.originalPrice}
                                    </div>
                                  )}
                                  <div className="text-sm text-gray-600 mt-2">
                                    {getText("Per orang", "Per person")}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-3 flex items-center">
                                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                                  {getText("Highlight", "Highlights")}
                                </h4>
                                <ul className="space-y-2">
                                  {getTextArray(
                                    selectedPackage.highlights,
                                    selectedPackage.highlightsEn
                                  ).map((highlight, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start space-x-2"
                                    >
                                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-sm">
                                        {highlight}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-3 flex items-center">
                                  <Check className="w-5 h-5 text-green-500 mr-2" />
                                  {getText("Termasuk", "Inclusions")}
                                </h4>
                                <ul className="space-y-2">
                                  {getTextArray(
                                    selectedPackage.inclusions,
                                    selectedPackage.inclusionsEn
                                  ).map((inclusion, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start space-x-2"
                                    >
                                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-sm">
                                        {inclusion}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-3 flex items-center">
                                <Calendar className="w-5 h-5 text-blue-500 mr-2" />
                                {getText("Itinerary", "Itinerary")}
                              </h4>
                              <div className="space-y-4">
                                {selectedPackage.itinerary.map((day, idx) => (
                                  <div
                                    key={idx}
                                    className="border rounded-lg p-4"
                                  >
                                    <h5 className="font-medium text-blue-600 mb-2">
                                      {day.day}:{" "}
                                      {getText(day.title, day.titleEn)}
                                    </h5>
                                    <ul className="space-y-1">
                                      {getTextArray(
                                        day.activities,
                                        day.activitiesEn
                                      ).map((activity, actIdx) => (
                                        <li
                                          key={actIdx}
                                          className="text-sm text-gray-600 flex items-start space-x-2"
                                        >
                                          <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                          <span>{activity}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-3 flex items-center">
                                <X className="w-5 h-5 text-red-500 mr-2" />
                                {getText("Tidak Termasuk", "Exclusions")}
                              </h4>
                              <ul className="space-y-2">
                                {getTextArray(
                                  selectedPackage.exclusions,
                                  selectedPackage.exclusionsEn
                                ).map((exclusion, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start space-x-2"
                                  >
                                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{exclusion}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
                              <h4 className="font-semibold mb-2">
                                {getText(
                                  "Siap untuk Petualangan?",
                                  "Ready for Adventure?"
                                )}
                              </h4>
                              <p className="text-sm mb-4 opacity-90">
                                {getText(
                                  "Hubungi kami sekarang untuk booking atau konsultasi gratis",
                                  "Contact us now for booking or free consultation"
                                )}
                              </p>
                              <Button
                                onClick={() =>
                                  handleWhatsAppClick(
                                    getText(
                                      selectedPackage.name,
                                      selectedPackage.nameEn
                                    )
                                  )
                                }
                                className="bg-white text-green-600 hover:bg-gray-100"
                              >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                {getText(
                                  "Booking via WhatsApp",
                                  "Book via WhatsApp"
                                )}
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>

                    <Button
                      onClick={() =>
                        handleWhatsAppClick(getText(pkg.name, pkg.nameEn))
                      }
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {getText("Booking", "Book Now")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${
              isVisible('about') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {getText("Tentang Banyuwangi Tours", "About Banyuwangi Tours")}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {getText(
                  "Kami adalah penyedia layanan tour dan rental kendaraan Honda terpercaya di Banyuwangi. Dengan pengalaman lebih dari 5 tahun, kami telah melayani ribuan wisatawan baik domestik maupun mancanegara.",
                  "We are a trusted Honda vehicle rental and tour service provider in Banyuwangi. With over 5 years of experience, we have served thousands of domestic and international tourists."
                )}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600">
                    {getText("Wisatawan Puas", "Satisfied Tourists")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">
                    {getText("Destinasi Tour", "Tour Destinations")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    4.8/5
                  </div>
                  <div className="text-sm text-gray-600">
                    {getText("Rating Pelanggan", "Customer Rating")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">
                    {getText("Layanan Pelanggan", "Customer Service")}
                  </div>
                </div>
              </div>
              <Button
                onClick={() => handleWhatsAppClick()}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {getText("Hubungi Kami", "Contact Us")}
              </Button>
            </div>
            <div className={`relative transition-all duration-1000 delay-300 ${
              isVisible('about') ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="bg-gradient-to-br from-blue-400 to-green-400 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  {getText("Mengapa Honda?", "Why Honda?")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span>
                      {getText(
                        "Kualitas mesin terpercaya",
                        "Reliable engine quality"
                      )}
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span>{getText("Irit bahan bakar", "Fuel efficient")}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span>
                      {getText("Kenyamanan berkendara", "Driving comfort")}
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span>
                      {getText(
                        "Spare part mudah didapat",
                        "Easy to find spare parts"
                      )}
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span>
                      {getText(
                        "Perawatan terjangkau",
                        "Affordable maintenance"
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible('contact') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getText("Hubungi Kami", "Contact Us")}
            </h2>
            <p className="text-xl text-gray-600">
              {getText(
                "Siap membantu merencanakan perjalanan impian Anda",
                "Ready to help plan your dream journey"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className={`text-center p-6 border-0 shadow-lg transition-all duration-1000 delay-200 ${
              isVisible('contact') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {getText("Telepon", "Phone")}
              </h3>
              <p className="text-gray-600 mb-4">
                {getText(
                  "Hubungi langsung untuk konsultasi",
                  "Call directly for consultation"
                )}
              </p>
              <Button
                variant="outline"
                onClick={() => window.open("tel:+6281234567890", "_blank")}
              >
                +62 812-3456-7890
              </Button>
            </Card>

            <Card className={`text-center p-6 border-0 shadow-lg transition-all duration-1000 delay-400 ${
              isVisible('contact') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                {getText(
                  "Chat langsung via WhatsApp",
                  "Chat directly via WhatsApp"
                )}
              </p>
              <Button
                onClick={() => handleWhatsAppClick()}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                {getText("Chat Sekarang", "Chat Now")}
              </Button>
            </Card>

            <Card className={`text-center p-6 border-0 shadow-lg transition-all duration-1000 delay-600 ${
              isVisible('contact') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">
                {getText(
                  "Kirim pertanyaan via email",
                  "Send questions via email"
                )}
              </p>
              <Button
                variant="outline"
                onClick={() =>
                  window.open("mailto:info@banyuwangitours.com", "_blank")
                }
              >
                info@banyuwangitours.com
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Banyuwangi Tours</h3>
                  <p className="text-sm text-gray-400">Honda Rental & Tour</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                {getText(
                  "Penyedia layanan tour dan rental Honda terpercaya di Banyuwangi sejak 2019.",
                  "Trusted Honda rental and tour service provider in Banyuwangi since 2019."
                )}
              </p>
              <div className="flex space-x-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 p-0 border-gray-600 text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110"
                  onClick={() => window.open("https://facebook.com", "_blank")}
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 p-0 border-gray-600 text-gray-400 hover:text-white hover:border-pink-500 hover:bg-pink-500/10 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-110"
                  onClick={() => window.open("https://instagram.com", "_blank")}
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 p-0 border-gray-600 text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300 transform hover:scale-110"
                  onClick={() => window.open("https://twitter.com", "_blank")}
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 p-0 border-gray-600 text-gray-400 hover:text-white hover:border-red-500 hover:bg-red-500/10 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-110"
                  onClick={() => window.open("https://youtube.com", "_blank")}
                >
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                {getText("Paket Tour", "Tour Packages")}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ijen Crater Tour
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Bromo Tengger Semeru
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Banyuwangi City Tour
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Baluran Safari
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Tour
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                {getText("Layanan", "Services")}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getText("Rental Honda", "Honda Rental")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getText("Tour Guide", "Tour Guide")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getText("Paket Wisata", "Tour Packages")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getText("Dokumentasi", "Documentation")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getText("Konsultasi", "Consultation")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                {getText("Kontak", "Contact")}
              </h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Jl. Raya Banyuwangi-Situbondo No.123
                    <br />
                    Banyuwangi, Jawa Timur 68411
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>info@banyuwangitours.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              © 2024 Banyuwangi Tours.{" "}
              {getText("Semua hak dilindungi", "All rights reserved")}.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => handleWhatsAppClick()}
              className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 shadow-xl hover:shadow-2xl hover:shadow-green-500/25 z-50 p-0 transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="left"
            className="bg-green-600 text-white border-green-600"
          >
            <p className="font-medium">
              {getText("Chat via WhatsApp", "Chat via WhatsApp")}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
