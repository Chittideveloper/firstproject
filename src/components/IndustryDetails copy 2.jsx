// pages/IndustryDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import SocialMedia from "@/components/SocialMedia";
import {
    Truck,
    GraduationCap,
    Pickaxe,
    Factory,
    Pill,
    Radio,
    Car,
    Building,
    Shield,
    Globe,
    Route,
    ShieldCheck,
    MapPin,
    BarChart2,
    DollarSign,
    Clock,
    Package,
    Zap,
    Bell,
    Users,
    Bus,
    MessageSquare,
    Siren,
    // Add these new icons
    Thermometer,
    FileText,
    Calendar,
    Link as LinkIcon,
    DownloadCloud,
    Battery,
    BarChart,
    Lock,
    Wrench,
    Smartphone,
    Map,
    Speedometer,
    Family,
    Snowflake,
    Trash2 as Trash,
    Fuel,
    Tool,
    AlertCircle,
    AlertTriangle,
    DocumentCheck,
    Calculator,
    Tilt,
    Report
} from "lucide-react";
import { Button } from "@/components/ui/button";

const IndustryDetails = () => {
    const { id } = useParams();

    const industries = [
        // Logistics
        {
            id: "logistics",
            title: "Logistics",
            description:
                "Revolutionize your logistics and supply chain with cutting-edge GPS tracking for real-time visibility, optimized routes, and enhanced security.",
            detailedPoints: [
                {
                    title: "Real-time Fleet Visibility",
                    description:
                        "Monitor every vehicle's location and status instantly, ensuring full control over your operations.",
                },
                {
                    title: "Optimized Route Planning",
                    description:
                        "Reduce fuel costs and delivery times with intelligent route optimization algorithms.",
                },
                {
                    title: "Enhanced Cargo Security",
                    description:
                        "Protect valuable shipments with tamper alerts and secure tracking devices.",
                },
                {
                    title: "Improved Delivery Efficiency",
                    description:
                        "Streamline delivery schedules and dispatch operations for faster service.",
                },
                {
                    title: "Cost Reduction",
                    description:
                        "Minimize operational expenses through better fuel management and preventative maintenance.",
                },
                {
                    title: "Customer Satisfaction",
                    description:
                        "Provide accurate ETAs and build trust with transparent delivery updates.",
                },
            ],
            features: [
                {
                    icon: Truck,
                    title: "Advanced Fleet Management",
                    description:
                        "Track your entire fleet, monitor vehicle performance, and manage driver behavior from a single dashboard.",
                },
                {
                    icon: Route,
                    title: "Dynamic Route Optimization",
                    description:
                        "Automatically generate the most efficient routes, considering traffic, weather, and delivery priorities.",
                },
                {
                    icon: Package,
                    title: "Cargo & Asset Monitoring",
                    description:
                        "Keep tabs on individual cargo containers and high-value assets with specialized tracking solutions.",
                },
                {
                    icon: ShieldCheck,
                    title: "Geofencing & Alerts",
                    description:
                        "Set up virtual boundaries and receive instant notifications for unauthorized vehicle entry or exit.",
                },
                {
                    icon: BarChart2,
                    title: "Performance Analytics",
                    description:
                        "Gain insights into fleet performance, identify trends, and make data-driven decisions.",
                },
                {
                    icon: Clock,
                    title: "Automated Reporting",
                    description:
                        "Generate comprehensive reports on mileage, idle time, delivery times, and more, automatically.",
                },
            ],
        },
        // School Transportation
        {
            id: "school-transportation",
            title: "School Transportation",
            description:
                "Ensure the safety and efficiency of student transportation with our advanced GPS tracking systems, offering real-time monitoring, parent notifications, and secure operations.",
            detailedPoints: [
                {
                    title: "Enhanced Student Safety",
                    description:
                        "Monitor bus locations and student boarding/deboarding for unparalleled safety.",
                },
                {
                    title: "Real-time Parent Notifications",
                    description:
                        "Keep parents informed with accurate ETAs and arrival alerts, reducing anxiety.",
                },
                {
                    title: "Driver Behavior Monitoring",
                    description:
                        "Ensure drivers adhere to safety protocols with real-time speed and harsh braking alerts.",
                },
                {
                    title: "Optimized Bus Routes",
                    description:
                        "Create the most efficient routes to minimize travel time and fuel consumption.",
                },
                {
                    title: "Emergency Response Systems",
                    description:
                        "Quickly locate buses and dispatch help in case of an emergency.",
                },
                {
                    title: "Operational Cost Savings",
                    description:
                        "Reduce fuel and maintenance costs through efficient fleet management.",
                },
            ],
            features: [
                {
                    icon: Bus,
                    title: "School Bus Tracking",
                    description:
                        "Precise, real-time location tracking of all school buses on their routes.",
                },
                {
                    icon: Bell,
                    title: "Parent Alert System",
                    description:
                        "Automated SMS/app notifications for bus departure, arrival, and delays to parents.",
                },
                {
                    icon: Users,
                    title: "Student Roster Management",
                    description:
                        "Integrate student data to ensure correct students are on the correct bus and route.",
                },
                {
                    icon: Shield,
                    title: "Safety Compliance Monitoring",
                    description:
                        "Track driver compliance with speed limits, designated stops, and safe driving practices.",
                },
                {
                    icon: MessageSquare,
                    title: "Two-Way Communication",
                    description:
                        "Enable direct communication between dispatch, drivers, and school administration.",
                },
                {
                    icon: Siren,
                    title: "Emergency SOS Button",
                    description:
                        "Drivers can trigger immediate alerts to administrators and emergency services in critical situations.",
                },
            ],
        },

        // Mining (example)
        {
            id: "mining",
            title: "Mining",
            description:
                "Optimize mining operations with rugged GPS tracking for heavy equipment, personnel safety, and efficient resource extraction.",
            detailedPoints: [
                {
                    title: "Heavy Equipment Tracking",
                    description:
                        "Monitor excavators, haul trucks, and drills in real-time.",
                },
                {
                    title: "Personnel Safety Monitoring",
                    description:
                        "Ensure the safety of workers in remote and hazardous areas.",
                },
                {
                    title: "Operational Efficiency",
                    description:
                        "Improve productivity by optimizing equipment utilization and movement.",
                },
                {
                    title: "Geofencing for Safety Zones",
                    description: "Define safe and restricted areas within the mine site.",
                },
                {
                    title: "Asset Maintenance Schedules",
                    description:
                        "Track usage for predictive maintenance on expensive machinery.",
                },
                {
                    title: "Compliance & Reporting",
                    description:
                        "Generate reports for regulatory compliance and operational audits.",
                },
            ],
            features: [
                {
                    icon: Pickaxe,
                    title: "Rugged GPS Devices",
                    description:
                        "Durable tracking devices built to withstand harsh mining environments.",
                },
                {
                    icon: Globe,
                    title: "Remote Location Tracking",
                    description:
                        "Reliable tracking even in areas with limited network connectivity.",
                },
                {
                    icon: Shield,
                    title: "Hazard Zone Alerts",
                    description:
                        "Instant notifications for equipment or personnel entering dangerous zones.",
                },
                {
                    icon: BarChart2,
                    title: "Production Analytics",
                    description:
                        "Data insights to optimize extraction and hauling processes.",
                },
                {
                    icon: Zap,
                    title: "Fuel Consumption Monitoring",
                    description:
                        "Track and reduce fuel usage across the heavy fleet.",
                },
                {
                    icon: Radio,
                    title: "Satellite Communication Options",
                    description:
                        "Ensure connectivity for critical operations far from cellular networks.",
                },

            ],

        },
        {
            id: "rmc",
            title: "RMC (Ready Mix Concrete)",
            description: "Enhance concrete delivery operations with real - time tracking of mixer trucks, batch monitoring, and delivery verification.",
            detailedPoints: [
                {
                    title: "Mixer Truck Tracking",
                    description: "Monitor concrete mixer trucks in real-time from plant to construction site.",
                },
                {
                    title: "Drum Rotation Monitoring",
                    description: "Track drum rotation to ensure concrete quality during transit.",
                },
                {
                    title: "Delivery Verification",
                    description: "Confirm deliveries with automated timestamps and location data.",
                },
                {
                    title: "Job Site Geofencing",
                    description: "Create geofences around construction sites for automated arrival/departure alerts.",
                },
                {
                    title: "Water Addition Monitoring",
                    description: "Detect unauthorized water addition that compromises concrete quality.",
                },
                {
                    title: "Driver Behavior Monitoring",
                    description: "Track speeding, harsh braking, and idling to improve safety and reduce maintenance.",
                },
            ],
            features: [
                {
                    icon: MixerTruck,
                    title: "Concrete-Specific Sensors",
                    description: "Specialized sensors for monitoring drum rotation, concrete temperature, and slump.",
                },
                {
                    icon: Clock,
                    title: "Transit Time Monitoring",
                    description: "Track delivery times to ensure concrete is poured within specification limits.",
                },
                {
                    icon: DocumentCheck,
                    title: "Electronic Delivery Tickets",
                    description: "Automated digital documentation replacing paper tickets.",
                },
                {
                    icon: Route,
                    title: "Route Optimization",
                    description: "Optimize delivery routes for multiple trucks to minimize transit time.",
                },
                {
                    icon: AlertTriangle,
                    title: "Quality Alert System",
                    description: "Immediate alerts for potential concrete quality issues during transit.",
                },
                {
                    icon: Calculator,
                    title: "Yield Calculations",
                    description: "Compare batched quantity versus delivered quantity to identify discrepancies.",
                },
            ],
        },
        {
            id: "pharma",
            title: "Pharma",
            description: "Ensure compliance and product integrity with temperature monitoring and secure tracking for pharmaceutical shipments.",
            detailedPoints: [
                {
                    title: "Cold Chain Monitoring",
                    description: "Continuous temperature and humidity tracking for sensitive pharmaceuticals.",
                },
                {
                    title: "Regulatory Compliance",
                    description: "Maintain detailed logs for FDA, EMA, and other regulatory requirements.",
                },
                {
                    title: "Tamper Evidence",
                    description: "Detect and record any unauthorized access to pharmaceutical shipments.",
                },
                {
                    title: "Batch Tracing",
                    description: "Track entire batches from manufacturer to end destination for recall management.",
                },
                {
                    title: "Environmental Alerts",
                    description: "Immediate notifications for temperature excursions or other environmental breaches.",
                },
                {
                    title: "Chain of Custody",
                    description: "Document every handoff and transfer throughout the supply chain.",
                },
            ],
            features: [
                {
                    icon: Thermometer,
                    title: "Temperature Logging",
                    description: "Precise temperature monitoring with configurable thresholds and alerts.",
                },
                {
                    icon: Shield,
                    title: "Tamper-Proof Seals",
                    description: "Electronic seals that detect and record any opening attempts.",
                },
                {
                    icon: FileText,
                    title: "Automated Compliance Reporting",
                    description: "Generate compliance reports for regulatory audits with a single click.",
                },
                {
                    icon: Calendar,
                    title: "Expiry Date Tracking",
                    description: "Monitor product expiry dates and prioritize shipments accordingly.",
                },
                {
                    icon: Link,
                    title: "Integration with ERP Systems",
                    description: "Seamless integration with pharmaceutical ERP and inventory systems.",
                },
                {
                    icon: DownloadCloud,
                    title: "Data Logging & Retrieval",
                    description: "Store and retrieve environmental data even when outside network coverage.",
                },
            ],
        },
        {
            id: "asset-telematics",
            title: "Asset Telematics",
            description: "Gain complete visibility and control over your high- value assets with advanced tracking and monitoring solutions.",
            detailedPoints: [
                {
                    title: "Real-Time Location Tracking",
                    description: "Monitor asset location and movement patterns in real-time.",
                },
                {
                    title: "Utilization Monitoring",
                    description: "Track how often assets are being used to optimize fleet efficiency.",
                },
                {
                    title: "Theft Prevention",
                    description: "Receive instant alerts for unauthorized movement or tampering.",
                },
                {
                    title: "Maintenance Scheduling",
                    description: "Automate maintenance based on actual usage rather than time intervals.",
                },
                {
                    title: "Condition Monitoring",
                    description: "Monitor various parameters like tilt, shock, and hours of operation.",
                },
                {
                    title: "Depreciation Tracking",
                    description: "Calculate accurate depreciation based on actual usage data.",
                },
            ],
            features: [
                {
                    icon: MapPin,
                    title: "Multi-Technology Tracking",
                    description: "Combine GPS, cellular, and satellite technologies for comprehensive coverage.",
                },
                {
                    icon: Battery,
                    title: "Long-Life Battery Options",
                    description: "Extended battery life solutions for assets without power sources.",
                },
                {
                    icon: Tilt,
                    title: "Tilt & Motion Detection",
                    description: "Detect when assets are moved, tilted, or improperly handled.",
                },
                {
                    icon: BarChart,
                    title: "Utilization Analytics",
                    description: "Detailed reports on asset usage patterns and efficiency metrics.",
                },
                {
                    icon: Lock,
                    title: "Geofence Security",
                    description: "Create virtual boundaries and receive alerts when assets leave designated areas.",
                },
                {
                    icon: Wrench,
                    title: "Predictive Maintenance",
                    description: "Forecast maintenance needs based on operating hours and conditions.",
                },
            ],
        },
        {
            id: "personal-vehicle",
            title: "Personal Vehicle Tracking",
            description: "Protect your personal vehicles and monitor driving behavior with discreet and efficient tracking solutions.",
            detailedPoints: [
                {
                    title: "Real-Time Location",
                    description: "Track your vehicle's location in real-time through mobile apps.",
                },
                {
                    title: "Theft Recovery",
                    description: "Quickly locate and recover stolen vehicles with precise tracking.",
                },
                {
                    title: "Driving Behavior Analysis",
                    description: "Monitor speeding, harsh braking, and rapid acceleration.",
                },
                {
                    title: "Trip History",
                    description: "Review detailed trip history with routes, times, and stops.",
                },
                {
                    title: "Geofence Alerts",
                    description: "Receive notifications when your vehicle enters or leaves designated areas.",
                },
                {
                    title: "Maintenance Reminders",
                    description: "Get alerts for scheduled maintenance based on mileage or engine hours.",
                },
            ],
            features: [
                {
                    icon: Smartphone,
                    title: "Mobile App Access",
                    description: "Monitor your vehicle from anywhere with user-friendly mobile applications.",
                },
                {
                    icon: Bell,
                    title: "Instant Alerts",
                    description: "Receive immediate notifications for unauthorized use, speeding, or geofence violations.",
                },
                {
                    icon: Map,
                    title: "Route Playback",
                    description: "Review exactly where your vehicle has been with detailed route replay.",
                },
                {
                    icon: Speedometer,
                    title: "Speed Monitoring",
                    description: "Set speed limits and receive alerts when they're exceeded.",
                },
                {
                    icon: Car,
                    title: "Discreet Installation",
                    description: "Small, hidden devices that don't alter your vehicle's appearance.",
                },
                {
                    icon: Family,
                    title: "Family Tracking",
                    description: "Monitor driving behavior of family members with separate driver profiles.",
                },
            ],
        },
        {
            id: "municipalities",
            title: "Municipalities",
            description: "Optimize public works operations and improve citizen services with comprehensive fleet management solutions.",
            detailedPoints: [
                {
                    title: "Fleet Utilization",
                    description: "Maximize efficiency of municipal vehicles and equipment.",
                },
                {
                    title: "Route Optimization",
                    description: "Plan the most efficient routes for garbage collection, snow plowing, and other services.",
                },
                {
                    title: "Fuel Management",
                    description: "Monitor and reduce fuel consumption across municipal fleets.",
                },
                {
                    title: "Maintenance Scheduling",
                    description: "Reduce downtime with proactive maintenance based on actual usage.",
                },
                {
                    title: "Idle Time Reduction",
                    description: "Identify and minimize unnecessary engine idling to save fuel and reduce emissions.",
                },
                {
                    title: "Service Verification",
                    description: "Confirm completion of municipal services like street sweeping or park maintenance.",
                },
            ],
            features: [
                {
                    icon: Snowflake,
                    title: "Plow Tracking",
                    description: "Monitor snow plow operations with blade up/down status and material usage.",
                },
                {
                    icon: Trash,
                    title: "Waste Management Solutions",
                    description: "Track garbage collection routes and verify service completion.",
                },
                {
                    icon: Fuel,
                    title: "Fuel Tax Reporting",
                    description: "Automate fuel tax reporting for off-road municipal vehicles.",
                },
                {
                    icon: Tool,
                    title: "Specialized Equipment Tracking",
                    description: "Monitor usage of specialized municipal equipment like street sweepers and mowers.",
                },
                {
                    icon: Users,
                    title: "Citizen Service Response",
                    description: "Improve response times to citizen service requests with optimized routing.",
                },
                {
                    icon: Report,
                    title: "Budget & Compliance Reporting",
                    description: "Generate reports for budget justification and regulatory compliance.",
                },
            ],
        },
        {
            id: "high-value-cargo",
            title: "High Value Cargo Tracking using Pad Locks",
            description: "Secure high-value shipments with intelligent padlock tracking solutions that provide real - time security and monitoring.",
            detailedPoints: [
                {
                    title: "Real-Time Tamper Alerts",
                    description: "Immediate notifications if locks are cut, picked, or improperly opened.",
                },
                {
                    title: "Location Monitoring",
                    description: "Track shipment location throughout the entire supply chain.",
                },
                {
                    title: "Geofence Security",
                    description: "Receive alerts if shipments deviate from planned routes or enter restricted areas.",
                },
                {
                    title: "Environmental Monitoring",
                    description: "Track temperature, humidity, and shock for sensitive cargo.",
                },
                {
                    title: "Chain of Custody",
                    description: "Document every handoff with timestamped records of who opened and closed locks.",
                },
                {
                    title: "Theft Recovery",
                    description: "Quickly locate stolen shipments with precise GPS tracking.",
                },
            ],
            features: [
                {
                    icon: Lock,
                    title: "Smart Padlock Technology",
                    description: "GPS-enabled padlocks with cellular connectivity for real-time tracking.",
                },
                {
                    icon: AlertCircle,
                    title: "Tamper Evidence",
                    description: "Record and alert on any attempted breach or unauthorized access.",
                },
                {
                    icon: Map,
                    title: "Geofence Automation",
                    description: "Automatically lock or unlock when shipments reach designated locations.",
                },
                {
                    icon: Clock,
                    title: "Time-Based Access",
                    description: "Grant temporary access permissions for specific time windows.",
                },
                {
                    icon: Users,
                    title: "Multi-User Management",
                    description: "Manage access permissions for multiple parties in the supply chain.",
                },
                {
                    icon: Battery,
                    title: "Long Battery Life",
                    description: "Extended battery performance for long-haul shipments without recharge.",
                },
            ],
        }

    ];

    const industry = industries.find((i) => i.id === id);

    if (!industry) {
        return (
            <div className="min-h-[60vh] flex flex-col justify-center items-center text-center">
                <h2 className="text-3xl font-bold text-red-500 mb-4">
                    Industry Not Found
                </h2>
                <Link to="/industries">
                    <Button variant="outline">Back to Industries</Button>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <Navigation />

            <section className="section-padding">

                {/* Hero Section */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16">
                    <span className="text-gradient">{industry.title}</span> Industry
                    Details
                </h1>

                <p className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
                    {industry.description}
                </p>

                <div className="max-w-7xl mx-auto container-padding">
                    {/* Detailed Points */}
                    <h2 className="text-3xl font-bold mb-6">Key Highlights</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {industry.detailedPoints.map((point, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="text-xl font-semibold text-primary mb-2">
                                    {point.title}
                                </h3>
                                <p className="text-muted-foreground">{point.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Features */}
                    <h2 className="text-3xl font-bold mb-6">Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industry.features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-card border border-border flex flex-col hover:shadow-lg hover:-translate-y-1 transition"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready to Transform Your {industry.title} Operations?
                        </h3>
                        <Button size="lg" className="rounded-full">
                            Contact Us
                        </Button>
                    </div>
                </div>

            </section>
            <Footer />
            <ChatBot />
            <SocialMedia />
        </div>
    );
};

export default IndustryDetails;
