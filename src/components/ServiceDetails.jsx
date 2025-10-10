import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import SocialMedia from "@/components/SocialMedia";
import { Fuel, Thermometer, Video, Lock, MapPin, Camera } from "lucide-react";
import serviceTrack from "@/assets/services/gpstracking.webp";
import serviceFuel from "@/assets/services/Fuel-level-sensor.webp";
import serviceTemperature from "@/assets/services/gps-temperature.webp";
import serviceVideo from "@/assets/services/gps-video.webp";
import servicePadlock from "@/assets/services/padlock.webp";
import serviceMining from "@/assets/services/gps-mining.webp";
import servicePhotogrammetry from "@/assets/services/photogrammetry.webp";
import { HashLink } from "react-router-hash-link";
// Define the services array directly in ServiceDetails.jsx
export const services = [
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


const ServiceDetails = () => {
    const { id } = useParams();
    const service = services.find((s) => s.id === id); // Used the local 'services' array

    if (!service) {
        return (
            <div className="max-w-4xl mx-auto py-20 text-center">
                <h2 className="text-2xl font-bold">Service Not Found</h2>
                <Link to="/services" className="text-primary underline">
                    Back to Services
                </Link>
            </div>
        );
    }

    return (
        <>
            <Navigation />
            <section className="section-padding bg-muted/20">
                <div className="max-w-5xl mx-auto container-padding">
                    <div className="flex flex-col lg:flex-row items-center gap-10 mb-16"> {/* Added mb-16 for spacing */}
                        {/* Image */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="bg-primary rounded-[30px] shadow-xl p-1 w-full">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="rounded-[30px] h-96 w-full object-cover"
                                />
                            </div>
                        </div>



                        {/* Content */}
                        <div className="w-full lg:w-1/2">
                            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                                {service.title}
                            </h1>
                            <p className="text-muted-foreground mb-6">{service.description}</p>

                            <h3 className="text-xl font-semibold mb-3">Key Highlights</h3>
                            <ul className="space-y-2">
                                {[...service.features, "Trusted by top industries worldwide"].map(
                                    (point, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                            <span>{point}</span>
                                        </li>
                                    )
                                )}
                            </ul>

                            <div className="mt-8">
                                <HashLink
                                    smooth
                                    to="/#contact"
                                    className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
                                >
                                    Get Started
                                </HashLink>
                            </div>
                        </div>
                    </div>

                    {/* New Section for Elaborated Key Points */}
                    {service.detailedFeatures && service.detailedFeatures.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-center mb-10">
                                In-Depth Features of{" "}
                                <span className="text-gradient">{service.title}</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {service.detailedFeatures.map((detail, index) => (
                                    <div key={index} className="border border-border/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <h3 className="text-xl font-semibold mb-3">{detail.title}</h3>
                                        <p className="text-muted-foreground">{detail.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>

            </section>
            <Footer />
            <ChatBot />
            <SocialMedia />
        </>
    );
}
export default ServiceDetails;