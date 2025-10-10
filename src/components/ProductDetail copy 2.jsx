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

// 🔹 Central product data (Expanded with details and extended features)
const products = [
    {
        slug: "advanced-fleet-tracker",
        title: "Advanced Fleet Tracker",
        description: "Comprehensive GPS tracking system with real-time monitoring, route optimization, and driver behavior analysis.",
        category: "Fleet Management",
        icon: <Truck className="w-10 h-10 text-primary" />,
        features: ["Real-time GPS tracking", "Route optimization", "Driver scoring", "Maintenance alerts"],
        details: [
            "Reduce fuel costs by up to 25% with optimized routing and idle-time monitoring.",
            "Enhance driver safety through real-time behavior alerts and performance scoring.",
            "Improve operational efficiency with automated dispatching and maintenance schedules.",
            "Increase asset security with geofencing and unauthorized usage alerts.",
            "Ensure compliance with detailed logs for HOS (Hours of Service) and IFTA reporting."
        ],
        extendedFeatures: [
            {
                image: "https://placehold.co/600x400/3b82f6/white?text=Live+Map",
                title: "Real-Time Visibility",
                description: "Monitor your entire fleet on a live, interactive map. Get instant updates on location, speed, and status to make informed decisions quickly."
            },
            {
                image: "https://placehold.co/600x400/10b981/white?text=AI+Routes",
                title: "AI-Powered Route Optimization",
                description: "Our intelligent algorithm analyzes traffic, delivery windows, and vehicle capacity to generate the most efficient routes, saving time and fuel."
            },
            {
                image: "https://placehold.co/600x400/f97316/white?text=Driver+Score",
                title: "Driver Behavior Monitoring",
                description: "Track harsh braking, rapid acceleration, and speeding. Use data-driven scorecards to coach drivers, reduce accidents, and lower insurance premiums."
            },
            {
                image: "https://placehold.co/600x400/6366f1/white?text=Maintenance",
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
        features: ["Heavy-duty GPS units", "Equipment monitoring", "Geofencing", "Operational analytics"],
        details: [
            "Maximize equipment uptime with predictive maintenance and real-time health monitoring.",
            "Enhance operator safety with collision avoidance alerts and fatigue detection.",
            "Boost productivity by tracking cycle times, payload, and equipment utilization.",
            "Secure your site with advanced geofencing and unauthorized operation alerts.",
            "Built tough with IP67-rated hardware to withstand extreme dust, water, and vibrations."
        ],
        extendedFeatures: [
            {
                image: "https://placehold.co/600x400/a16207/white?text=Rugged+Device",
                title: "Ruggedized Hardware",
                description: "Our devices are specifically engineered for the mining industry, offering resistance to extreme temperatures, shocks, and moisture."
            },
            {
                image: "https://placehold.co/600x400/b91c1c/white?text=Safety+Alert",
                title: "Operator Safety Systems",
                description: "Integrate with proximity detection and camera systems to provide operators with 360° awareness and prevent accidents in busy mining sites."
            },
            {
                image: "https://placehold.co/600x400/15803d/white?text=Productivity",
                title: "Productivity Analytics",
                description: "Measure key performance indicators like tons per hour, fuel consumption per ton, and equipment idle time to optimize your entire operation."
            },
            {
                image: "https://placehold.co/600x400/4f46e5/white?text=Geofence",
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
        features: ["Fuel level monitoring", "Theft detection", "Consumption analytics", "Automated reports"],
        details: [
            "Eliminate fuel theft with instant alerts for sudden fuel drops and siphoning events.",
            "Achieve 99.5% accuracy in fuel level reporting with advanced ultrasonic sensors.",
            "Optimize fuel economy by analyzing consumption patterns against driver behavior.",
            "Simplify fuel management with automated reports on consumption, refills, and theft.",
            "Integrate seamlessly with your existing fleet management system for a unified view."
        ],
        extendedFeatures: [
            {
                image: "https://placehold.co/600x400/dc2626/white?text=Theft+Alert",
                title: "Instant Theft Detection",
                description: "Receive immediate SMS or email notifications if a sudden, significant drop in a vehicle's fuel level is detected when the ignition is off."
            },
            {
                image: "https://placehold.co/600x400/2563eb/white?text=Data+Graph",
                title: "Precise Consumption Analytics",
                description: "Get detailed graphs and reports on fuel usage. Identify anomalies and compare vehicle or driver efficiency to find cost-saving opportunities."
            },
            {
                image: "https://placehold.co/600x400/16a34a/white?text=Refill+Log",
                title: "Refueling Verification",
                description: "Automatically log the time, location, and amount of fuel added. Cross-reference this data with fuel card receipts to prevent fraud."
            },
            {
                image: "https://placehold.co/600x400/9333ea/white?text=Reports",
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
        features: ["Live video streaming", "GPS coordination", "Motion detection", "Cloud storage"],
        details: [
            "Provide indisputable video evidence for accident claims and exonerate innocent drivers.",
            "Reduce risky driving behaviors by up to 60% with AI-powered in-cab coaching.",
            "Gain full visibility with live streaming and historical footage from multiple camera angles.",
            "Protect your assets with event-triggered recordings for motion, G-force, or panic button.",
            "Securely store and access critical video footage from anywhere via the cloud."
        ],
        extendedFeatures: [
            {
                image: "https://placehold.co/600x400/0284c7/white?text=Live+View",
                title: "Live HD Video Streaming",
                description: "Tap into a live video feed from any vehicle, at any time. Monitor driver performance, ensure cargo security, and respond to incidents in real-time."
            },
            {
                image: "https://placehold.co/600x400/c2410c/white?text=AI+Events",
                title: "AI-Powered Event Detection",
                description: "Smart cameras automatically detect and flag events like tailgating, distracted driving, and harsh cornering, uploading short clips for your review."
            },
            {
                image: "https://placehold.co/600x400/6d28d9/white?text=Cloud+Save",
                title: "Secure Cloud Storage",
                description: "Event footage is automatically uploaded to a secure cloud server, protecting it from being tampered with or lost, even if the device is damaged."
            },
            {
                image: "https://placehold.co/600x400/16a34a/white?text=Coach+Driver",
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
        features: ["Temperature logging", "Alert notifications", "Compliance reports", "Real-time tracking"],
        details: [
            "Ensure regulatory compliance (HACCP, FDA) with automated temperature logging and reports.",
            "Prevent spoilage and product loss with instant alerts for temperature deviations.",
            "Provide customers with a verifiable 'Proof of Temperature' record for the entire journey.",
            "Improve operational visibility by combining temperature data with real-time location tracking.",
            "Monitor multiple temperature zones within a single vehicle or container."
        ],
        extendedFeatures: [
            {
                image: "https://placehold.co/600x400/0ea5e9/white?text=Temp+Alert",
                title: "Real-Time Temperature Alerts",
                description: "Set custom temperature thresholds and receive instant SMS or email alerts the moment conditions go out of range, allowing for immediate corrective action."
            },
            {
                image: "https://placehold.co/600x400/84cc16/white?text=Compliance",
                title: "Automated Compliance Reports",
                description: "Generate detailed, tamper-proof reports for compliance audits. Easily demonstrate that your cargo was maintained at the required temperature throughout its transit."
            },
            {
                image: "https://placehold.co/600x400/f97316/white?text=Data+Log",
                title: "Continuous Data Logging",
                description: "Our sensors record temperature data at regular intervals, providing a complete and auditable history of the cargo's environment from origin to destination."
            },
            {
                image: "https://placehold.co/600x400/4f46e5/white?text=Door+Sensor",
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
        features: ["Remote locking", "GPS location", "Tamper alerts", "Access logs"],
        details: [
            "Gain complete control with remote locking and unlocking capabilities via a web or mobile app.",
            "Receive instant alerts for tampering, unauthorized unlock attempts, or cable cutting.",
            "Maintain a detailed digital audit trail of who accessed the asset, when, and where.",
            "Track the real-time location of high-value cargo, containers, and remote equipment.",
            "Deploy easily with a long-lasting rechargeable battery and durable, weatherproof design."
        ],
        extendedFeatures: [
            {
                image: "https://placehold.co/600x400/4f46e5/white?text=Remote+Unlock",
                title: "Remote Access Control",
                description: "Grant or revoke access to the padlock from anywhere in the world. No physical keys needed, which eliminates the risk of lost or duplicated keys."
            },
            {
                image: "https://placehold.co/600x400/ef4444/white?text=Tamper+Alert",
                title: "Advanced Tamper Alerts",
                description: "The padlock's integrated sensors will immediately notify you if the lock is being tampered with, the steel cable is cut, or it moves outside a designated geofence."
            },
            {
                image: "https://placehold.co/600x400/10b981/white?text=Access+Log",
                title: "Detailed Access Logs",
                description: "Every lock and unlock event is recorded with a timestamp, GPS location, and user ID, providing an unchangeable record for security and accountability."
            },
            {
                image: "https://placehold.co/600x400/0891b2/white?text=Durable",
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
        features: ["High-precision mapping", "3D modeling", "Survey data collection", "Digital mapping"],
        details: ["Create highly accurate 2D maps and 3D models of terrain and structures.", "Reduce survey time and costs compared to traditional methods.", "Perform volumetric calculations for stockpiles and earthworks with precision.", "Monitor construction progress and environmental changes over time.", "Integrate survey data seamlessly into GIS and CAD software."],
        extendedFeatures: [
            { image: "https://placehold.co/600x400/0284c7/white?text=3D+Model", title: "High-Resolution 3D Models", description: "Generate detailed, photorealistic 3D models for site visualization, planning, and analysis." },
            { image: "https://placehold.co/600x400/c2410c/white?text=Volume", title: "Volumetric Calculations", description: "Accurately measure the volume of stockpiles, pits, and earthworks for inventory and project management." },
            { image: "https://placehold.co/600x400/16a34a/white?text=Topography", title: "Topographic Surveying", description: "Create precise contour maps and digital elevation models (DEMs) for engineering and land management." },
            { image: "https://placehold.co/600x400/6d28d9/white?text=Digital+Twin", title: "Digital Twin Creation", description: "Build a dynamic digital replica of your assets or site for ongoing monitoring and simulation." }
        ]
    },
    {
        slug: "ais-140-tracker",
        title: "AIS 140 Tracker",
        description: "Government-approved GPS tracking device compliant with AIS 140 standards for commercial vehicles and fleet management.",
        category: "Compliance",
        icon: <Shield className="w-10 h-10 text-primary" />,
        features: ["AIS 140 certified", "Emergency button", "Vehicle diagnostics", "Regulatory compliance"],
        details: ["Ensure 100% compliance with government regulations for public and commercial transport.", "Enhance passenger and driver safety with a dedicated SOS/panic button.", "Track vehicle location with government-mandated accuracy and frequency.", "Support for dual-profile eSIMs ensures constant network connectivity.", "Integrate with government servers for real-time data reporting."],
        extendedFeatures: [
            { image: "https://placehold.co/600x400/ca8a04/white?text=Certified", title: "Government Certified", description: "Our devices are fully certified by ARAI and meet all AIS 140 guidelines, ensuring your fleet is compliant." },
            { image: "https://placehold.co/600x400/be123c/white?text=SOS", title: "SOS Emergency Button", description: "In case of an emergency, a discreetly placed panic button sends an immediate alert to the control center and authorities." },
            { image: "https://placehold.co/600x400/059669/white?text=Immobilizer", title: "Remote Immobilization", description: "In case of theft or unauthorized use, the vehicle's engine can be remotely immobilized, preventing further movement." },
            { image: "https://placehold.co/600x400/1d4ed8/white?text=Secure+Data", title: "Secure Data Transmission", description: "All data is transmitted securely to both your server and the designated government servers as per the AIS 140 protocol." }
        ]
    },
    {
        slug: "analytics-dashboard",
        title: "Analytics Dashboard",
        description: "Comprehensive data analytics platform for all GPS tracking systems with customizable reports.",
        category: "Analytics",
        icon: <BarChart className="w-10 h-10 text-primary" />,
        features: ["Custom dashboards", "Advanced analytics", "Report generation", "Data visualization"],
        details: ["Transform raw telematics data into actionable business intelligence.", "Customize dashboards with widgets that matter most to your KPIs.", "Identify long-term trends in fuel consumption, driver behavior, and operational costs.", "Benchmark performance across different regions, teams, or vehicle types.", "Integrate data from multiple sources for a holistic view of your operations."],
        extendedFeatures: [
            { image: "https://placehold.co/600x400/4f46e5/white?text=Widgets", title: "Customizable Dashboards", description: "Build your own dashboard with a simple drag-and-drop interface. Visualize your most important metrics at a glance." },
            { image: "https://placehold.co/600x400/0d9488/white?text=Trends", title: "Predictive Analytics", description: "Leverage machine learning to forecast maintenance needs, identify at-risk drivers, and predict future operational costs." },
            { image: "https://placehold.co/600x400/c2410c/white?text=Scheduled", title: "Automated Report Scheduling", description: "Design custom reports and have them automatically delivered to key stakeholders on a daily, weekly, or monthly basis." },
            { image: "https://placehold.co/600x400/166534/white?text=Data+Viz", title: "Advanced Data Visualization", description: "Use heatmaps, charts, and graphs to easily understand complex data and communicate insights effectively across your organization." }
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
        <div className="bg-background">
            <Navigation />
            {/* Hero Section */}
            <div className="bg-secondary/40 py-20  mb-10">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <div className="flex justify-center mb-4">{product.icon}</div>
                    <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
                    <Badge className="mb-4">{product.category}</Badge>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {product.description}
                    </p>
                </div>
            </div>

            {/* Features Section (Original) */}
            <div className="max-w-4xl mx-auto px-4 mb-10">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.map((feature, i) => (
                        <li
                            key={i}
                            className="flex items-center gap-2 bg-card border rounded-lg p-3 shadow-sm"
                        >
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Product Details/Highlights (5 points) */}
            {product.details && product.details.length > 0 && (
                <div className="max-w-4xl mx-auto px-4 mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Why Choose {product.title}?</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 p-3 bg-card border rounded-lg shadow-sm">
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Extended Feature Cards (4 cards in a responsive grid) */}
            {product.extendedFeatures && product.extendedFeatures.length > 0 && (
                <div className="max-w-5xl mx-auto px-4 mb-10">
                    <h2 className="text-3xl font-bold text-center mb-8">Deeper Dive into Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {product.extendedFeatures.map((extFeature, i) => (
                            <Card key={i} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img src={extFeature.image} alt={extFeature.title} className="w-full h-48 object-cover" />
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">{extFeature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{extFeature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {/* CTA Section */}

            <Footer />
            <ChatBot />
            <SocialMedia />
        </div>
    );
};

export default ProductDetail;