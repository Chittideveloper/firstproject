import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";
import serviceFleet from "@/assets/service-fleet.webp";
import serviceMining from "@/assets/service-mining.webp";
import serviceIot from "@/assets/service-iot.webp";
import serviceSecurity from "@/assets/service-security.webp";
import serviceTempMonitor from "@/assets/service-temp-monitor.webp";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textState, setTextState] = useState(0); // 0 for first text, 1 for second text
  const [isShattered, setIsShattered] = useState(false);
  const [isReassembling, setIsReassembling] = useState(false);

  const carouselImages = [serviceFleet, serviceMining, serviceIot, serviceSecurity, serviceTempMonitor];

  // Generate stable random values for animation using useMemo to avoid render issues
  const randomStyles = useMemo(() => {
    // Generate enough random styles for all characters
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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Text shatter effect animation
  useEffect(() => {
    const loop = () => {
      // Shatter after 5 seconds
      setTimeout(() => {
        setIsShattered(true);
        setTimeout(() => {
          setTextState(prev => prev === 0 ? 1 : 0);
          setIsReassembling(true);
          setTimeout(() => {
            setIsShattered(false);
            setIsReassembling(false);
          }, 1000);
        }, 1000);
      }, 5000);
    };

    loop();
    const interval = setInterval(loop, 8000); // Full cycle: 5s display + 1s shatter + 1s reassemble + 1s buffer

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-90' : 'opacity-0'
              }`}
          >
            <img
              src={image}
              alt={`Professional GPS tracking and monitoring services - Advanced technology solutions for fleet management, mining operations, IoT systems, security monitoring, and temperature tracking systems. Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto">

          {/* ISRO Empanelled Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-secondary/80 border border-primary/30 rounded-lg text-primary text-sm font-medium mb-6 mx-4">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Empanelled with ISRO
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Advanced GPS Tracking Solutions
          </div>

          {/* Headline */}
          <div className={`transition-opacity duration-500 ${isShattered ? 'opacity-0' : 'opacity-100'
            }`}>
            {textState === 0 ? (
              <h1
                id="headlineA"
                className={`text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-snug ${isShattered ? "shatter" : ""
                  }`}
              >
                <div className="transition-opacity duration-800 opacity-100">
                  {"Track Everything".split('').map((char, index) => {
                    const isSpace = char === ' ';

                    return (
                      <span
                        key={`track-char-${index}`}
                        className={`char text-white`}
                        style={getRandomStyle(index)}
                      >
                        {isSpace ? '\u00A0\u00A0\u00A0' : char}
                      </span>
                    );
                  })}
                </div>
                <div className="transition-opacity duration-800 opacity-100">
                  {"Monitor Everywhere".split('').map((char, index) => {
                    const isSpace = char === ' ';

                    return (
                      <span
                        key={`monitor-char-${index}`}
                        className={`char text-primary`}
                        style={getRandomStyle(index + 20)}
                      >
                        {isSpace ? '\u00A0\u00A0\u00A0' : char}
                      </span>
                    );
                  })}
                </div>
              </h1>
            ) : (
              <h1
                id="headlineB"
                className={`text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-snug ${isShattered ? "shatter" : ""
                  }`}
              >
                <div>
                  {"Custom Application".split('').map((char, index) => {
                    const isSpace = char === ' ';

                    return (
                      <span
                        key={`custom-char-${index}`}
                        className={`char text-primary`}
                        style={getRandomStyle(index + 40)}
                      >
                        {isSpace ? '\u00A0\u00A0\u00A0' : char}
                      </span>
                    );
                  })}
                </div>
                <div>
                  {"Development".split('').map((char, index) => {
                    const isSpace = char === ' ';

                    return (
                      <span
                        key={`dev-char-${index}`}
                        className={`char text-white`}
                        style={getRandomStyle(index + 60)}
                      >
                        {isSpace ? '\u00A0\u00A0\u00A0' : char}
                      </span>
                    );
                  })}
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <small className={`text-2xl sm:text-3xl text-muted-foreground ${isShattered ? 'shatter' : ''
                    }`}>
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
            )}
          </div>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Professional GPS tracking solutions for mining, fleet management, and industrial operations.
            Advanced features including GPS tracking with fuel monitoring, GPS tracking with video surveillance,
            temperature control, and secure padlock systems. Complete visibility and control of your assets.
          </p>


          {/* CTA Buttons */}
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

          {/* Trust Indicators */}
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

      {/* Animated elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;