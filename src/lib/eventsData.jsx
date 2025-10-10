// This is your single source of truth for all event data.
const eventsData = [
  // Upcoming Events
  {
    id: "India-Fleet-Expo-2025",
    title: "India Fleet Expo 2025",
    date: { day: "01-03", month: "SEP", year: "2025" },
    location: "Pragati Maidan, New Delhi",
    description:
      "Join us at the premier event for fleet management professionals. We'll be showcasing our latest innovations in live video telematics, fuel monitoring systems, and our all-in-one fleet management platform.",
    detailedDescription:
      "India Fleet Expo 2025 is the must-attend event for anyone in the logistics and fleet management industry. We're excited to present our full suite of solutions designed to optimize operations, enhance safety, and reduce costs. Visit our booth to get a live demo of our AI-powered video telematics, see how our advanced fuel sensors prevent theft, and explore the intuitive dashboard of our comprehensive fleet management software. Our team of experts will be on hand to answer your questions and discuss how our technology can be tailored to your specific business needs.",
    highlights: [
      "Live Demos of AI Video Telematics",
      "Advanced Fuel Monitoring Solutions",
      "Comprehensive Fleet Management Platform",
      "Expert Consultations & Q&A",
    ],
    image: "/assets/events/event-img1.webp",
    galleryImages: [
      "/assets/gallery/gallery-1.webp",
      "/assets/gallery/gallery-2.webp",
      "/assets/gallery/gallery-3.webp",
      "/assets/gallery/gallery-4.webp",
      "/assets/gallery/gallery-5.webp",
      "/assets/gallery/gallery-6.webp",
      "/assets/gallery/gallery-7.webp",
      "/assets/gallery/gallery-8.webp",
    ],
    status: "upcoming",
    ctaText: "Read More",
    tags: ["Fleet Management", "Video Telematics", "Fuel Monitoring"],
  },
  {
    id: "National-Mining-Minerals-Summit-2025",
    title: "National Mining & Minerals Summit 2025",
    date: { day: "05-07", month: "DEC", year: "2025" },
    location: "BIEC, Bengaluru",
    description:
      "Discover our rugged and reliable GPS tracking solutions designed for the harsh environments of the mining industry.",
    detailedDescription:
      "The mining industry presents unique challenges, and our solutions are built to meet them head-on. At the National Mining & Minerals Summit, we will demonstrate our industrial-grade GPS trackers, asset management systems for heavy machinery, and safety solutions for personnel. Learn how our technology can improve operational visibility, prevent unauthorized use of equipment, and enhance worker safety in both open-pit and underground mining operations.",
    highlights: [
      "Rugged GPS Hardware for Heavy Machinery",
      "Real-time Asset Utilization Tracking",
      "Personnel Safety & SOS Solutions",
      "Geofencing for Operational Zones",
    ],
    image: "/assets/events/event-img2.webp",
    galleryImages: [
      "/assets/gallery/gallery-9.webp",
      "/assets/gallery/gallery-10.webp",
      "/assets/gallery/gallery-11.webp",
      "/assets/gallery/gallery-12.webp",
      "/assets/gallery/gallery-1.webp",
      "/assets/gallery/gallery-2.webp",
    ],
    status: "upcoming",
    ctaText: "Read More",
    tags: ["Mining Solutions", "Asset Tracking", "Industrial GPS"],
  },
  // Past Events
  {
    id: "Smart-Logistics-India-2024",
    title: "Smart Logistics India 2024",
    date: { day: "22-24", month: "AUG", year: "2024" },
    location: "Jio World Centre, Mumbai",
    description:
      "We showcased our logistics solutions, including cold chain monitoring and smart GPS padlocks for high-value cargo.",
    detailedDescription:
      "A look back at Smart Logistics India 2024, where we had the opportunity to connect with leaders in the supply chain sector. Our booth featured live demonstrations of our temperature and humidity sensors for cold chain integrity, as well as our innovative GPS e-locks that provide real-time tracking and tamper alerts for high-value shipments. The event was a massive success, fostering important conversations about the future of secure and transparent logistics.",
    highlights: [
      "Cold Chain Monitoring Demo",
      "GPS E-Lock for Cargo Security",
      "End-to-end Supply Chain Visibility",
      "Networking with Industry Leaders",
    ],
    image: "/assets/events/event-img3.webp",
    galleryImages: [
      "/assets/gallery/gallery-3.webp",
      "/assets/gallery/gallery-4.webp",
      "/assets/gallery/gallery-5.webp",
      "/assets/gallery/gallery-6.webp",
    ],
    status: "past",
    ctaText: "Read More",
    tags: ["Asset Security", "Cold Chain", "GPS Padlock"],
  },
  {
    id: "GeoSmart-India-Conference-2023",
    title: "GeoSmart India Conference 2023",
    date: { day: "10-12", month: "OCT", year: "2023" },
    location: "HICC, Hyderabad",
    description:
      "We presented our latest advancements in geospatial technology and satellite-based tracking with industry leaders.",
    detailedDescription:
      "At the GeoSmart India Conference 2023, our focus was on the power of data. We presented case studies on how our geospatial analytics platform helps businesses make smarter decisions. Our keynote session covered the integration of satellite and terrestrial tracking for creating a truly seamless global tracking network, which was met with great enthusiasm from the attendees.",
    highlights: [
      "Keynote on Geospatial Analytics",
      "Hybrid Satellite-GSM Tracking Demo",
      "Data-driven Decision Making for Fleets",
      "Collaboration with Geospatial Experts",
    ],
    image: "/assets/events/event-img4.webp",
    galleryImages: [
      "/assets/gallery/gallery-7.webp",
      "/assets/gallery/gallery-8.webp",
      "/assets/gallery/gallery-9.webp",
      "/assets/gallery/gallery-10.webp",
      "/assets/gallery/gallery-11.webp",
    ],
    status: "past",
    ctaText: "Read More",
    tags: ["Geospatial Tech", "Satellite Tracking", "Data Analytics"],
  },
  {
    id: "Fleet-Tech-Expo-2023",
    title: "Fleet Tech Expo 2023",
    date: { day: "18-20", month: "JUL", year: "2023" },
    location: "Chennai Trade Centre, Chennai",
    description:
      "Showcased the future of connected fleets with video telematics and smart tracking solutions.",
    detailedDescription:
      "Fleet Tech Expo 2023 was a landmark event for us. We unveiled our next-generation dual-facing dashcam with real-time driver coaching and ADAS features. The response was overwhelming, with fleet owners excited about the potential to drastically improve driver safety and reduce accidents. We also provided hands-on workshops for our fleet management software.",
    highlights: [
      "Launch of Next-Gen AI Dashcam",
      "Live ADAS & Driver Coaching Demo",
      "IoT Sensor Integration Showcase",
      "Fleet Management Software Workshops",
    ],
    image: "/assets/events/event-img5.webp",
    galleryImages: [
      "/assets/gallery/gallery-12.webp",
      "/assets/gallery/gallery-1.webp",
      "/assets/gallery/gallery-2.webp",
      "/assets/gallery/gallery-3.webp",
    ],
    status: "past",
    ctaText: "Read More",
    tags: ["Connected Fleets", "Video Telematics", "IoT"],
  },
  {
    id: "Mining-Expo-2022",
    title: "Mining Expo 2022",
    date: { day: "02-04", month: "DEC", year: "2022" },
    location: "Hitex Exhibition Centre, Hyderabad",
    description:
      "Demonstrated rugged GPS devices for open-pit and underground mining operations.",
    detailedDescription:
      "Our participation in Mining Expo 2022 solidified our position as a leading technology provider for the mining sector. We showcased our IP67-rated, ultra-rugged GPS devices that can withstand extreme temperatures, vibrations, and dust. Visitors were particularly impressed with our solutions for monitoring heavy equipment health and preventing unauthorized use, ensuring both safety and efficiency.",
    highlights: [
      "Showcase of IP67 Rugged GPS Trackers",
      "Heavy Equipment Monitoring System",
      "Solutions for Underground Mining",
      "Safety and Security Demonstrations",
    ],
    image: "/assets/events/event-img6.webp",
    galleryImages: [
      "/assets/gallery/gallery-4.webp",
      "/assets/gallery/gallery-5.webp",
      "/assets/gallery/gallery-6.webp",
      "/assets/gallery/gallery-7.webp",
      "/assets/gallery/gallery-8.webp",
      "/assets/gallery/gallery-9.webp",
      "/assets/gallery/gallery-10.webp",
    ],
    status: "past",
    ctaText: "Read More",
    tags: ["Rugged Devices", "Mining GPS", "Safety"],
  },
];

export default eventsData;
