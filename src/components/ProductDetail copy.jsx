import { useParams, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Truck, Satellite, Fuel, Camera, Thermometer,
    Lock, MapPin, Shield, BarChart, CheckCircle2
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import SocialMedia from "@/components/SocialMedia";

// 🔹 Central product data (Expanded with background image, 6 details, and specific feature images)
const products = [
    {
        slug: "advanced-fleet-tracker",
        title: "Advanced Fleet Tracker",
        description: "Comprehensive GPS tracking system with real-time monitoring, route optimization, and driver behavior analysis.",
        category: "Fleet Management",
        icon: <Truck className="w-10 h-10 text-primary" />,
        backgroundImage: "https://source.unsplash.com/random/1600x600/?fleet+management,trucking,logistics", // Background image for this product
        features: ["Real-time GPS tracking", "Route optimization", "Driver scoring", "Maintenance alerts"],
        details: [ // 6 points
            "Reduce fuel costs by up to 25% with optimized routing and idle-time monitoring.",
            "Enhance driver safety through real-time behavior alerts and performance scoring.",
            "Improve operational efficiency with automated dispatching and maintenance schedules.",
            "Increase asset security with geofencing and unauthorized usage alerts.",
            "Ensure compliance with detailed logs for HOS (Hours of Service) and IFTA reporting.",
            "Receive instant notifications for critical events like harsh braking or speeding." // New 6th point
        ],
        extendedFeatures: [
            {
                image: "https://source.unsplash.com/random/600x400/?gps+tracking,map", // Specific image for this card
                title: "Real-Time Visibility",
                description: "Monitor your entire fleet on a live, interactive map. Get instant updates on location, speed, and status to make informed decisions quickly."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?route+optimization,logistics", // Specific image for this card
                title: "AI-Powered Route Optimization",
                description: "Our intelligent algorithm analyzes traffic, delivery windows, and vehicle capacity to generate the most efficient routes, saving time and fuel."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?driver+safety,telematics", // Specific image for this card
                title: "Driver Behavior Monitoring",
                description: "Track harsh braking, rapid acceleration, and speeding. Use data-driven scorecards to coach drivers, reduce accidents, and lower insurance premiums."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?vehicle+maintenance,mechanic", // Specific image for this card
                title: "Proactive Maintenance Alerts",
                description: "Set up automated service reminders based on mileage, engine hours, or time. Prevent costly breakdowns and extend vehicle lifespan."
            }
        ]
    },
    {
        slug: "iot-for-mining",
        title: "IoT for Mining",
        description: "Specialized GPS tracking for heavy mining equipment with rugged hardware designed for harsh environments.",
        category: "Mining Solutions",
        icon: <Satellite className="w-10 h-10 text-primary" />,
        backgroundImage: "https://source.unsplash.com/random/1600x600/?mining+equipment,heavy+machinery",
        features: ["Heavy-duty GPS units", "Equipment monitoring", "Geofencing", "Operational analytics"],
        details: [ // 6 points
            "Maximize equipment uptime with predictive maintenance and real-time health monitoring.",
            "Enhance operator safety with collision avoidance alerts and fatigue detection.",
            "Boost productivity by tracking cycle times, payload, and equipment utilization.",
            "Secure your site with advanced geofencing and unauthorized operation alerts.",
            "Built tough with IP67-rated hardware to withstand extreme dust, water, and vibrations.",
            "Optimize resource allocation by knowing exact equipment location and status at all times." // New 6th point
        ],
        extendedFeatures: [
            {
                image: "https://source.unsplash.com/random/600x400/?rugged+device,mining+sensor",
                title: "Ruggedized Hardware",
                description: "Our devices are specifically engineered for the mining industry, offering resistance to extreme temperatures, shocks, and moisture."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?mining+safety,heavy+equipment",
                title: "Operator Safety Systems",
                description: "Integrate with proximity detection and camera systems to provide operators with 360° awareness and prevent accidents in busy mining sites."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?mining+analytics,data+dashboard",
                title: "Productivity Analytics",
                description: "Measure key performance indicators like tons per hour, fuel consumption per ton, and equipment idle time to optimize your entire operation."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?mining+geofence,site+management",
                title: "Intelligent Site Management",
                description: "Create detailed geofences for extraction zones, dump sites, and restricted areas. Automate workflows and enhance site security."
            }
        ]
    },
    {
        slug: "fuel-level-sensors",
        title: "Fuel Level Sensors",
        description: "Advanced fuel monitoring system with GPS integration to prevent theft and optimize consumption.",
        category: "Fuel Management",
        icon: <Fuel className="w-10 h-10 text-primary" />,
        backgroundImage: "https://source.unsplash.com/random/1600x600/?fuel+tank,gas+station",
        features: ["Fuel level monitoring", "Theft detection", "Consumption analytics", "Automated reports"],
        details: [ // 6 points
            "Eliminate fuel theft with instant alerts for sudden fuel drops and siphoning events.",
            "Achieve 99.5% accuracy in fuel level reporting with advanced ultrasonic sensors.",
            "Optimize fuel economy by analyzing consumption patterns against driver behavior.",
            "Simplify fuel management with automated reports on consumption, refills, and theft.",
            "Integrate seamlessly with your existing fleet management system for a unified view.",
            "Monitor fuel levels in real-time, even when the vehicle is stationary or off-duty." // New 6th point
        ],
        extendedFeatures: [
            {
                image: "https://source.unsplash.com/random/600x400/?fuel+theft,security+alert",
                title: "Instant Theft Detection",
                description: "Receive immediate SMS or email notifications if a sudden, significant drop in a vehicle's fuel level is detected when the ignition is off."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?fuel+analytics,data+chart",
                title: "Precise Consumption Analytics",
                description: "Get detailed graphs and reports on fuel usage. Identify anomalies and compare vehicle or driver efficiency to find cost-saving opportunities."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?fuel+refill,receipt+verification",
                title: "Refueling Verification",
                description: "Automatically log the time, location, and amount of fuel added. Cross-reference this data with fuel card receipts to prevent fraud."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?fuel+report,dashboard",
                title: "Automated Reporting",
                description: "Schedule daily, weekly, or monthly reports to be sent directly to your inbox. Track key metrics without logging into the platform."
            }
        ]
    },
    {
        slug: "video-telematics",
        title: "Video Telematics",
        description: "GPS tracking system integrated with video surveillance for enhanced security and monitoring.",
        category: "Security Solutions",
        icon: <Camera className="w-10 h-10 text-primary" />,
        backgroundImage: "https://source.unsplash.com/random/1600x600/?dashcam,vehicle+security",
        features: ["Live video streaming", "GPS coordination", "Motion detection", "Cloud storage"],
        details: [ // 6 points
            "Provide indisputable video evidence for accident claims and exonerate innocent drivers.",
            "Reduce risky driving behaviors by up to 60% with AI-powered in-cab coaching.",
            "Gain full visibility with live streaming and historical footage from multiple camera angles.",
            "Protect your assets with event-triggered recordings for motion, G-force, or panic button.",
            "Securely store and access critical video footage from anywhere via the cloud.",
            "Monitor cargo integrity and passenger safety with interior camera views." // New 6th point
        ],
        extendedFeatures: [
            {
                image: "https://source.unsplash.com/random/600x400/?live+stream,cctv+camera",
                title: "Live HD Video Streaming",
                description: "Tap into a live video feed from any vehicle, at any time. Monitor driver performance, ensure cargo security, and respond to incidents in real-time."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?ai+vision,event+detection",
                title: "AI-Powered Event Detection",
                description: "Smart cameras automatically detect and flag events like tailgating, distracted driving, and harsh cornering, uploading short clips for your review."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?cloud+storage,data+backup",
                title: "Secure Cloud Storage",
                description: "Event footage is automatically uploaded to a secure cloud server, protecting it from being tampered with or lost, even if the device is damaged."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?driver+coaching,safety+training",
                title: "In-Cab Driver Coaching",
                description: "Provide real-time, audible alerts to drivers for unsafe behaviors, allowing them to self-correct instantly and build safer driving habits."
            }
        ]
    },
    {
        slug: "temperature-monitor",
        title: "Temperature Monitor",
        description: "Temperature-controlled GPS tracking for cold chain management and sensitive cargo monitoring.",
        category: "Cold Chain",
        icon: <Thermometer className="w-10 h-10 text-primary" />,
        backgroundImage: "https://source.unsplash.com/random/1600x600/?cold+chain,refrigerated+truck",
        features: ["Temperature logging", "Alert notifications", "Compliance reports", "Real-time tracking"],
        details: [ // 6 points
            "Ensure regulatory compliance (HACCP, FDA) with automated temperature logging and reports.",
            "Prevent spoilage and product loss with instant alerts for temperature deviations.",
            "Provide customers with a verifiable 'Proof of Temperature' record for the entire journey.",
            "Improve operational visibility by combining temperature data with real-time location tracking.",
            "Monitor multiple temperature zones within a single vehicle or container.",
            "Generate audit-ready reports for seamless inspections and quality control." // New 6th point
        ],
        extendedFeatures: [
            {
                image: "https://source.unsplash.com/random/600x400/?temperature+sensor,alert+system",
                title: "Real-Time Temperature Alerts",
                description: "Set custom temperature thresholds and receive instant SMS or email alerts the moment conditions go out of range, allowing for immediate corrective action."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?compliance+report,auditing",
                title: "Automated Compliance Reports",
                description: "Generate detailed, tamper-proof reports for compliance audits. Easily demonstrate that your cargo was maintained at the required temperature throughout its transit."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?data+logging,temperature+graph",
                title: "Continuous Data Logging",
                description: "Our sensors record temperature data at regular intervals, providing a complete and auditable history of the cargo's environment from origin to destination."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?door+sensor,cold+room",
                title: "Integrated Door Sensors",
                description: "Combine temperature monitoring with door open/close sensors to understand how and when temperature fluctuations occur, improving operational protocols."
            }
        ]
    },
    {
        slug: "padlock-gps",
        title: "Padlock GPS",
        description: "Intelligent padlock system with GPS tracking for securing valuable assets and cargo containers.",
        category: "Asset Security",
        icon: <Lock className="w-10 h-10 text-primary" />,
        backgroundImage: "https://source.unsplash.com/random/1600x600/?smart+lock,cargo+security",
        features: ["Remote locking", "GPS location", "Tamper alerts", "Access logs"],
        details: [ // 6 points
            "Gain complete control with remote locking and unlocking capabilities via a web or mobile app.",
            "Receive instant alerts for tampering, unauthorized unlock attempts, or cable cutting.",
            "Maintain a detailed digital audit trail of who accessed the asset, when, and where.",
            "Track the real-time location of high-value cargo, containers, and remote equipment.",
            "Deploy easily with a long-lasting rechargeable battery and durable, weatherproof design.",
            "Secure off-site assets and remote infrastructure with robust, intelligent protection." // New 6th point
        ],
        extendedFeatures: [
            {
                image: "https://source.unsplash.com/random/600x400/?remote+access,smart+padlock",
                title: "Remote Access Control",
                description: "Grant or revoke access to the padlock from anywhere in the world. No physical keys needed, which eliminates the risk of lost or duplicated keys."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?anti+theft,security+alarm",
                title: "Advanced Tamper Alerts",
                description: "The padlock's integrated sensors will immediately notify you if the lock is being tampered with, the steel cable is cut, or it moves outside a designated geofence."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?audit+trail,access+log",
                title: "Detailed Access Logs",
                description: "Every lock and unlock event is recorded with a timestamp, GPS location, and user ID, providing an unchangeable record for security and accountability."
            },
            {
                image: "https://source.unsplash.com/random/600x400/?weatherproof,durable+lock",
                title: "Durable & Weatherproof",
                description: "With an IP67 rating, the Padlock GPS is built to withstand harsh weather conditions, making it ideal for securing assets in any environment."
            }
        ]
    },
    {
        slug: "photogrammetry-services",
        title: "Photogrammetry Services",
        description: "Professional GIS and photogrammetry mapping services with high-precision GPS integration.",
        category: "Mapping Services",
        icon: <MapPin className="w-10 h-10 text-primary" />,
        backgroundImage: "https://source.unsplash.com/random/1600x600/?drone+mapping,surveying",
        features: ["High-precision mapping", "3D modeling", "Survey data collection", "Digital mapping"],
        details: [ // 6 points
            "Create highly accurate 2D maps and 3D models of terrain and structures.",
            "Reduce survey time and costs compared to traditional methods.",
            "Perform volumetric calculations for stockpiles and earthworks with precision.",
            "Monitor construction progress and environmental changes over time.",
            "Integrate survey data seamlessly into GIS and CAD software.",
            "Support advanced planning for infrastructure projects and urban development." // New 6th point
        ],
        extendedFeatures: [
            { image: "https://source.unsplash.com/random/600x400/?3d+scanning,model+rendering", title: "High-Resolution 3D Models", description: "Generate detailed, photorealistic 3D models for site visualization, planning, and analysis." },
            { image: "https://source.unsplash.com/random/600x400/?volumetric+measurement,construction+site", title: "Volumetric Calculations", description: "Accurately measure the volume of stockpiles, pits, and earthworks for inventory and project management." },
            { image: "https://source.unsplash.com/random/600x400/?topographic+map,gis+data", title: "Topographic Surveying", description: "Create precise contour maps and digital elevation models (DEMs) for engineering and land management." },
            { image: "https://source.unsplash.com/random/600x400/?digital+twin,urban+planning", title: "Digital Twin Creation", description: "Build a dynamic digital replica of your assets or site for ongoing monitoring and simulation." }
        ]
    },
    {
        slug: "ais-140-tracker",
        title: "AIS 140 Tracker",
        description: "Government-approved GPS tracking device compliant with AIS 140 standards for commercial vehicles and fleet management.",
        category: "Compliance",
        icon: <Shield className="w-10 h-10 text-primary" />,
        backgroundImage: "https://source.unsplash.com/random/1600x600/?public+transport,indian+roads",
        features: ["AIS 140 certified", "Emergency button", "Vehicle diagnostics", "Regulatory compliance"],
        details: [ // 6 points
            "Ensure 100% compliance with government regulations for public and commercial transport.",
            "Enhance passenger and driver safety with a dedicated SOS/panic button.",
            "Track vehicle location with government-mandated accuracy and frequency.",
            "Support for dual-profile eSIMs ensures constant network connectivity.",
            "Integrate with government servers for real-time data reporting.",
            "Provide reliable data for RTO and state transport department audits." // New 6th point
        ],
        extendedFeatures: [
            { image: "https://source.unsplash.com/random/600x400/?government+certification,ais140", title: "Government Certified", description: "Our devices are fully certified by ARAI and meet all AIS 140 guidelines, ensuring your fleet is compliant." },
            { image: "https://source.unsplash.com/random/600x400/?sos+button,emergency+alert", title: "SOS Emergency Button", description: "In case of an emergency, a discreetly placed panic button sends an immediate alert to the control center and authorities." },
            { image: "https://source.unsplash.com/random/600x400/?vehicle+immobilization,car+security", title: "Remote Immobilization", description: "In case of theft or unauthorized use, the vehicle's engine can be remotely immobilized, preventing further movement." },
            { image: "https://source.unsplash.com/random/600x400/?data+security,encrypted+transmission", title: "Secure Data Transmission", description: "All data is transmitted securely to both your server and the designated government servers as per the AIS 140 protocol." }
        ]
    },
    {
        slug: "analytics-dashboard",
        title: "Analytics Dashboard",
        description: "Comprehensive data analytics platform for all GPS tracking systems with customizable reports.",
        category: "Analytics",
        icon: <BarChart className="w-10 h-10 text-primary" />,
        backgroundImage: "https://source.unsplash.com/random/1600x600/?data+analytics,business+intelligence",
        features: ["Custom dashboards", "Advanced analytics", "Report generation", "Data visualization"],
        details: [ // 6 points
            "Transform raw telematics data into actionable business intelligence.",
            "Customize dashboards with widgets that matter most to your KPIs.",
            "Identify long-term trends in fuel consumption, driver behavior, and operational costs.",
            "Benchmark performance across different regions, teams, or vehicle types.",
            "Integrate data from multiple sources for a holistic view of your operations.",
            "Empower data-driven decisions to optimize fleet performance and profitability." // New 6th point
        ],
        extendedFeatures: [
            { image: "https://source.unsplash.com/random/600x400/?custom+dashboard,ui+design", title: "Customizable Dashboards", description: "Build your own dashboard with a simple drag-and-drop interface. Visualize your most important metrics at a glance." },
            { image: "https://source.unsplash.com/random/600x400/?predictive+modeling,ai+insights", title: "Predictive Analytics", description: "Leverage machine learning to forecast maintenance needs, identify at-risk drivers, and predict future operational costs." },
            { image: "https://source.unsplash.com/random/600x400/?report+automation,business+reports", title: "Automated Report Scheduling", description: "Design custom reports and have them automatically delivered to key stakeholders on a daily, weekly, or monthly basis." },
            { image: "https://source.unsplash.com/random/600x400/?data+visualization,charts+graphs", title: "Advanced Data Visualization", description: "Use heatmaps, charts, and graphs to easily understand complex data and communicate insights effectively across your organization." }
        ]
    }
];

const ProductDetail = () => {
    const { slug } = useParams();
    const product = products.find((p) => p.slug === slug);

    // Handle case where product is not found
    if (!product) {
        return (
            <div>
                <Navigation />
                <div className="text-center py-20 max-w-5xl mx-auto px-4">
                    <h1 className="text-2xl font-bold">Product Not Found</h1>
                    <p className="text-muted-foreground my-4">
                        We couldn't find the product you were looking for.
                    </p>
                    <NavLink to="/products">
                        <Button>Back to Products</Button>
                    </NavLink>
                </div>
                <Footer />
                <ChatBot />
                <SocialMedia />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            {/* Hero Section with Background Image */}
            <div
                className="relative bg-cover bg-center py-24 mb-10 text-white"
                style={{ backgroundImage: `url(${product.backgroundImage})` }}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
                    <div className="flex justify-center mb-4 text-white">{product.icon}</div> {/* Icon color adjusted for dark background */}
                    <h1 className="text-5xl font-extrabold mb-3 drop-shadow-lg">{product.title}</h1>
                    <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-base bg-white/20 text-white border-white/30">
                        {product.category}
                    </Badge>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow">
                        {product.description}
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="flex-grow max-w-6xl mx-auto px-4 pb-16">
                {/* Features Section (Original) */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Core Functionalities</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {product.features.map((feature, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-3 bg-card border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                                <span className="text-base text-muted-foreground font-medium">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Product Details/Highlights (6 points) */}
                {product.details && product.details.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">Why Choose {product.title}?</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {product.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-3 p-5 bg-card border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-lg text-muted-foreground">{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Extended Feature Cards (4 cards in a responsive grid) */}
                {product.extendedFeatures && product.extendedFeatures.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">Deep Dive into Capabilities</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                            {product.extendedFeatures.map((extFeature, i) => (
                                <Card key={i} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                                    <img src={extFeature.image} alt={extFeature.title} className="w-full h-56 object-cover" />
                                    <CardHeader className="pt-4 pb-2">
                                        <CardTitle className="text-2xl font-bold text-primary-foreground">{extFeature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pb-4">
                                        <p className="text-muted-foreground text-base leading-relaxed">{extFeature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-primary/15 to-primary/5 p-10 rounded-3xl text-center border border-primary/20 shadow-lg">
                    <h3 className="text-3xl font-bold mb-4 text-primary-foreground">Ready to Transform Your Operations with {product.title}?</h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Connect with our experts today to schedule a personalized demo, discuss pricing, or explore a custom solution perfectly tailored to your business's unique requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Button
                            size="lg"
                            className="bg-primary text-white hover:bg-primary/90 transition-colors py-3 px-8 rounded-full text-lg font-semibold shadow-md"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact Sales & Get a Quote
                        </Button>
                        <NavLink to="/products">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-primary text-primary hover:bg-primary/10 transition-colors py-3 px-8 rounded-full text-lg font-semibold"
                            >
                                Explore More Products
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </main>

            <Footer />
            <ChatBot />
            <SocialMedia />
        </div>
    );
};

export default ProductDetail;