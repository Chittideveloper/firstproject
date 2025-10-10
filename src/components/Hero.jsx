import { ArrowRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";

// Service banner images for carousel
// import heroPhotogrammetry from "@/assets/hero-photogrammetry.webp";
import heroCompleteFleet from "@/assets/hero-complete-fleet.webp";
import heroCropMonitoring from "@/assets/drone1.webp";
import heroIotSolutions from "@/assets/hero-iot-solutions.webp";
import heroAppDevelopment from "@/assets/hero-app-development.webp";
import heroMiningServices from "@/assets/hero-mining-services.webp";
import heroSatelliteTracker from "@/assets/hero-satellite-tracker.webp";
import heroVehicleTracking from "@/assets/hero-vehicle-tracking.webp";
import heroGpsTrackingPro from "@/assets/mining1.webp";
import heroMiningLoading from "@/assets/loading.webp";
// import FloatingVideo from "./FloatingVideo";


// --- NEW COMPONENT: AdvertisementModal ---
const AdvertisementModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="relative rounded-2xl shadow-xl overflow-hidden">
        {/* Dismiss button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 transition-colors"
          aria-label="Close modal"
        >
          <X size={28} />
        </button>

        {/* Advertisement Image */}
        <img
          src="assets/ad-2.webp"
          alt=" Advertisement "
          className="w-[600px] h-[400px] object-cover rounded-2xl"
        // className="w-full max-h-[90vh] object-contain rounded-2xl"
        />
      </div>
    </div>
  );
};


// --- HERO COMPONENT (No changes here) ---
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textState, setTextState] = useState(0);
  const [isShattered, setIsShattered] = useState(false);
  const [isReassembling, setIsReassembling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Show ad popup on first load
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const carouselImages = [
    
    heroCompleteFleet,
    heroCropMonitoring,
    // heroPhotogrammetry, 
    heroIotSolutions,
    heroAppDevelopment,
    heroMiningServices,
    heroSatelliteTracker,
    heroMiningLoading
    heroVehicleTracking,
    heroGpsTrackingPro
    
  ];

  const randomStyles = useMemo(() => {
    const styles = [];
    for (let i = 0; i < 100; i++) {
      styles.push({
        '--x': `${Math.random() * 800 - 400}px`,
        '--y': `${Math.random() * 600 - 300}px`,
        '--r': `${Math.random() * 720 - 360}deg`
      });
    }
    return styles;
  }, []);

  const getRandomStyle = (index) => {
    return randomStyles[index % randomStyles.length];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const loop = () => {
      setTimeout(() => {
        setIsShattered(true);
        setTimeout(() => {
          setTextState(prev => (prev + 1) % 3); // 👈 cycles 0,1,2
          setIsReassembling(true);
          setTimeout(() => {
            setIsShattered(false);
            setIsReassembling(false);
          }, 1000);
        }, 1000);
      }, 5000);
    };


    loop();
    const interval = setInterval(loop, 8000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* <AdvertisementModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
      {/* <FloatingVideo /> */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={image}
                alt={`Professional GPS tracking and monitoring services for fleet management, mining operations, and industrial IoT solutions. Advanced real-time vehicle tracking system demonstration - Image ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" /> */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/65 to-background/40" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/80 border border-primary/30 rounded-lg text-primary text-sm font-medium mb-6 mx-4">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Empanelled with ISRO
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Advanced GPS Tracking Solutions
            </div>
            <div className={`transition-opacity duration-500 ${isShattered ? 'opacity-0' : 'opacity-100'}`}>
              {textState === 0 ? (
                // --- First Section ---
                <h1
                  id="headlineA"
                  className={`text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-snug ${isShattered ? "shatter" : ""}`}
                >
                  <div className="transition-opacity duration-800 opacity-100">
                    {"Track Everything".split('').map((char, index) => (
                      <span
                        key={`track-char-${index}`}
                        className="char text-white"
                        style={getRandomStyle(index)}
                      >
                        {char === ' ' ? '\u00A0\u00A0\u00A0' : char}
                      </span>
                    ))}
                  </div>
                  <div className="transition-opacity duration-800 opacity-100">
                    {"Monitor Everywhere".split('').map((char, index) => (
                      <span
                        key={`monitor-char-${index}`}
                        className="char text-primary"
                        style={getRandomStyle(index + 20)}
                      >
                        {char === ' ' ? '\u00A0\u00A0\u00A0' : char}
                      </span>
                    ))}
                  </div>
                </h1>
              ) : textState === 1 ? (
                // --- Second Section ---
                <h1
                  id="headlineB"
                  className={`text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-snug ${isShattered ? "shatter" : ""}`}
                >
                  <div>
                    {"Custom Application".split('').map((char, index) => (
                      <span
                        key={`custom-char-${index}`}
                        className="char text-white"
                        style={getRandomStyle(index + 40)}
                      >
                        {char === ' ' ? '\u00A0\u00A0\u00A0' : char}
                      </span>
                    ))}
                  </div>
                  <div>
                    {"Development".split('').map((char, index) => (
                      <span
                        key={`dev-char-${index}`}
                        className="char text-primary"
                        style={getRandomStyle(index + 60)}
                      >
                        {char === ' ' ? '\u00A0\u00A0\u00A0' : char}
                      </span>
                    ))}
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <small className={`text-2xl sm:text-3xl text-muted-foreground ${isShattered ? 'shatter' : ''}`}>
                      {"(Web & Mobile)".split('').map((char, index) => (
                        <span
                          key={`mobile-char-${index}`}
                          className="char"
                          style={getRandomStyle(index + 80)}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </small>
                  </div>
                </h1>
              ) : (
                // --- Third Section (New One) ---
                <h1
                  id="headlineC"
                  className={`text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-snug ${isShattered ? "shatter" : ""}`}
                >
                  <div>
                    {"Manufacturers of".split('').map((char, index) => (
                      <span
                        key={`manufacturer-char-${index}`}
                        className="char text-white"
                        style={getRandomStyle(index + 100)}
                      >
                        {char === ' ' ? '\u00A0\u00A0\u00A0' : char}
                      </span>
                    ))}
                  </div>
                  <div>
                    {"AIS 140 GPS ".split('').map((char, index) => (
                      <span
                        key={`gps-char-${index}`}
                        className="char text-primary"
                        style={getRandomStyle(index + 120)}
                      >
                        {char === ' ' ? '\u00A0\u00A0\u00A0' : char}
                      </span>
                    ))}
                  </div>
                </h1>
              )}
            </div>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              Professional GPS tracking solutions for mining, fleet management, and industrial operations. Advanced features including GPS tracking with fuel monitoring.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button className="btn-hero group" onClick={scrollToContact}>
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                className="btn-outline-hero group"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'https://www.youtube.com/watch?v=TKlVatAUTiI';
                  link.target = '_blank';
                  link.rel = 'noopener noreferrer';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>GPS tracking for mining</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Fuel monitoring systems</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Video surveillance tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Industrial IOT solutions</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;