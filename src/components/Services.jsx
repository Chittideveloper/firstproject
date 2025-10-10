import { Fuel, Thermometer, Video, Lock, MapPin, Map, Camera } from "lucide-react";
import serviceTrack from "@/assets/services/gpstracking.webp";
import serviceFuel from "@/assets/services/Fuel-level-sensor.webp";
import serviceTemperature from "@/assets/services/gps-temperature.webp";
import serviceVideo from "@/assets/services/gps-video.webp";
import servicePadlock from "@/assets/services/padlock.webp";
import serviceMining from "@/assets/services/gps-mining.webp";
import servicePhotogrammetry from "@/assets/services/photogrammetry.webp";

import { Link } from "react-router-dom";

// Note: The 'services' array is now in ServiceDetails.jsx

const Services = () => {
  // Define services here or import if needed, but for this refactor,
  // we'll assume a mechanism to get this data if it's not defined locally.
  // For now, let's include a placeholder or mock data if you intend to keep Services.jsx stand-alone
  // or simply remove the direct service data definition from here.
  // For this exercise, I'll put it here to make it runnable, but in the final setup,
  // you might fetch this or import it from a shared data file.
  const services = [
    {
      id: "gps-tracking",
      title: "GPS Tracking",
      description:
        "Real-time GPS tracking with precise monitoring, historical routes, and instant alerts.",
      icon: MapPin,
      image: serviceTrack,
      features: [
        "24/7 real-time tracking",
        "Complete historical routes",
        "Customizable geofencing alerts",
        "Mobile app access for fleets",
      ],
      detailedFeatures: [
        {
          title: "Real-time Precision Tracking",
          description: "Monitor your assets with pinpoint accuracy, seeing their exact location at any moment on an interactive map. Our advanced GPS technology ensures you always have the most current data at your fingertips."
        },
        {
          title: "Comprehensive Route History",
          description: "Access detailed logs of all past routes, stops, and activities. This historical data is crucial for compliance, dispute resolution, and optimizing future operations."
        },
        {
          title: "Intelligent Geofencing Alerts",
          description: "Set up custom geographical boundaries and receive instant notifications when vehicles or assets enter or exit these predefined zones. Enhance security and operational efficiency."
        },
        {
          title: "Mobile Fleet Management",
          description: "Manage your entire fleet from anywhere with our intuitive mobile application. Get critical insights, alerts, and control capabilities right on your smartphone or tablet."
        }
      ]
    },
    {
      id: "gps-fuel",
      title: "GPS Tracking with Fuel",
      description:
        "Advanced GPS fleet tracking with integrated fuel monitoring to reduce costs and prevent theft.",
      icon: Fuel,
      image: serviceFuel,
      features: [
        "Fuel level monitoring",
        "Instant theft alerts",
        "Detailed consumption reports",
        "Efficiency & cost analytics",
      ],
      detailedFeatures: [
        {
          title: "Accurate Fuel Level Monitoring",
          description: "Keep a precise eye on fuel levels in real-time. Our sensors provide accurate data to prevent unexpected shortages and manage refills proactively."
        },
        {
          title: "Immediate Fuel Theft Alerts",
          description: "Receive instant notifications if there's any unauthorized siphoning or sudden drops in fuel levels, helping you prevent and react to theft effectively."
        },
        {
          title: "Comprehensive Fuel Consumption Reports",
          description: "Generate detailed reports on fuel usage per vehicle, driver, or trip. Understand consumption patterns to identify inefficiencies and areas for improvement."
        },
        {
          title: "Advanced Efficiency & Cost Analytics",
          description: "Leverage in-depth analytics to identify cost-saving opportunities, optimize driving behaviors, and reduce overall operational expenses related to fuel."
        }
      ]
    },
    {
      id: "gps-temperature",
      title: "GPS Tracking with Temperature",
      description:
        "Cold chain monitoring with GPS and live temperature tracking for perishable goods.",
      icon: Thermometer,
      image: serviceTemperature,
      features: [
        "Live temperature alerts",
        "Cold chain compliance reports",
        "Historical temperature logs",
        "Custom threshold settings",
      ],
      detailedFeatures: [
        {
          title: "Real-time Temperature Monitoring & Alerts",
          description: "Monitor the temperature of your cargo live and receive immediate alerts if temperatures deviate from acceptable ranges, ensuring product integrity."
        },
        {
          title: "Cold Chain Compliance Reporting",
          description: "Generate automated reports that prove compliance with cold chain regulations, essential for audits and maintaining product quality standards."
        },
        {
          title: "Detailed Historical Temperature Logs",
          description: "Access and review past temperature data for any trip or duration. This historical data is vital for traceability and analyzing performance over time."
        },
        {
          title: "Customizable Temperature Thresholds",
          description: "Set specific temperature ranges for different types of cargo. Our system will alert you only when conditions fall outside your defined safe parameters."
        }
      ]
    },
    {
      id: "gps-video",
      title: "GPS Tracking with Video",
      description:
        "Fleet and cargo safety with GPS-enabled video surveillance and recording.",
      icon: Video,
      image: serviceVideo,
      features: [
        "HD video streaming",
        "On-demand event recording",
        "Remote live viewing",
        "Motion detection alerts",
      ],
      detailedFeatures: [
        {
          title: "High-Definition Video Streaming",
          description: "Access crystal-clear live video feeds from your fleet vehicles, providing real-time visual insights into operations and security."
        },
        {
          title: "On-Demand Event Recording",
          description: "Initiate recordings remotely for specific events or incidents, capturing critical footage for evidence, training, or review."
        },
        {
          title: "Secure Remote Live Viewing",
          description: "View live video from your vehicles securely from any location, allowing for immediate response and supervision."
        },
        {
          title: "Intelligent Motion Detection Alerts",
          description: "Receive alerts when motion is detected around your vehicles, enhancing security against theft and unauthorized access."
        }
      ]
    },
    {
      id: "gps-padlock",
      title: "GPS Tracking with Pad Locks",
      description:
        "Smart GPS padlocks for secure cargo with real-time tamper detection.",
      icon: Lock,
      image: servicePadlock,
      features: [
        "Smart unlock via app",
        "Detailed access logs",
        "Tamper-proof alerts",
        "Remote lock control",
      ],
      detailedFeatures: [
        {
          title: "Convenient Smart Unlock via App",
          description: "Control and unlock padlocks remotely using a secure mobile application, offering flexibility and enhanced access management."
        },
        {
          title: "Comprehensive Access Logging",
          description: "Maintain detailed records of every unlock attempt, successful access, and unauthorized interaction, ensuring full accountability and security audits."
        },
        {
          title: "Immediate Tamper-Proof Alerts",
          description: "Receive instant notifications for any attempts to tamper with or forcibly open the padlock, providing crucial real-time security alerts."
        },
        {
          title: "Centralized Remote Lock Control",
          description: "Manage multiple smart padlocks from a central dashboard, allowing for remote locking and unlocking, and overriding access permissions as needed."
        }
      ]
    },
    {
      id: "gps-mining",
      title: "GPS Tracking for Mining",
      description:
        "Specialized GPS tracking solutions for mining vehicles and heavy machinery.",
      icon: Lock, // Using Lock as a placeholder, ideally a Mining-specific icon would be better
      image: serviceMining,
      features: [
        "Heavy equipment tracking",
        "Mining fleet management",
        "Extreme condition monitoring",
        "Utilization & safety reports",
      ],
      detailedFeatures: [
        {
          title: "Robust Heavy Equipment Tracking",
          description: "Track the precise location and operational status of dozers, excavators, dump trucks, and other heavy mining machinery in real-time."
        },
        {
          title: "Optimized Mining Fleet Management",
          description: "Manage an entire fleet of mining vehicles and personnel efficiently, coordinating movements and schedules for maximum productivity."
        },
        {
          title: "Monitoring in Extreme Conditions",
          description: "Our devices are built to withstand the harsh environments of mining operations, providing reliable data even in challenging temperatures and terrains."
        },
        {
          title: "Detailed Utilization & Safety Reports",
          description: "Generate reports on equipment utilization, idle times, and operational safety to improve efficiency, reduce wear and tear, and enhance workplace safety."
        }
      ]
    },
    {
      id: "photogrammetry",
      title: "Photogrammetry Mapping",
      description:
        "3D photogrammetry and drone-based aerial mapping for surveying and planning.",
      icon: Camera,
      image: servicePhotogrammetry,
      features: [
        "Accurate 3D terrain models",
        "Drone-based aerial mapping",
        "High-resolution imagery",
        "Precision measurements",
      ],
      detailedFeatures: [
        {
          title: "Creation of Accurate 3D Terrain Models",
          description: "Generate highly precise three-dimensional models of terrain and structures, ideal for detailed site planning, volume calculations, and environmental analysis."
        },
        {
          title: "Advanced Drone-Based Aerial Mapping",
          description: "Utilize state-of-the-art drones to capture comprehensive aerial data, providing wide-area coverage quickly and safely for various mapping needs."
        },
        {
          title: "Production of High-Resolution Imagery",
          description: "Obtain crisp, high-definition images that offer clear visual information for detailed inspections, progress monitoring, and decision-making."
        },
        {
          title: "Tools for Precision Measurements",
          description: "Extract accurate distances, areas, and volumes directly from the generated maps and models, eliminating the need for manual, time-consuming field measurements."
        }
      ]
    },
  ];


  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive <strong>GPS tracking</strong> and{" "}
            <strong>fleet management solutions</strong>, including fuel
            monitoring, video surveillance, mining tracking, GIS mapping, and
            photogrammetry. Tailored for industrial, logistics, and enterprise
            needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                to={`/services/${service.id}`}
                key={index} // Added key to Link
                className="block text-center border rounded-lg py-2 px-4 hover:bg-primary hover:text-white transition group" // Added group class here
              >
                <article
                  className="card-service glow-box" // Removed group class from article
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  {/* Service Image */}
                  <div className="w-full h-48 bg-gradient-card rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>


                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className="text-xl font-semibold group-hover:text-primary transition-colors"
                      itemProp="name"
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed" itemProp="description">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                        itemProp="serviceType"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA - "Learn More" is now implicitly handled by the entire card being a link */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div>
                      Learn More
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;