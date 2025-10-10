import React from "react";
import { useParams } from "react-router-dom";
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
} from "lucide-react";

const IndustryDetails = () => {
  const { id } = useParams(); // get industry id from route

  const allIndustryPagesData = [
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
          description:
            "Define safe and restricted areas within the mine site.",
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
          description: "Track and reduce fuel usage across the heavy fleet.",
        },
        {
          icon: Radio,
          title: "Satellite Communication Options",
          description:
            "Ensure connectivity for critical operations far from cellular networks.",
        },
      ],
    },
  ];

  const industry = allIndustryPagesData.find((item) => item.id === id);

  if (!industry) {
    return (
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gradient mb-4">
            Industry Not Found
          </h1>
          <p className="text-muted-foreground">
            The industry you’re looking for does not exist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16">
          <span className="text-gradient">{industry.title}</span> Industry
          Details
        </h1>

        <p className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
          {industry.description}
        </p>

        <h3 className="text-2xl font-semibold mb-4">Detailed Points:</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
          {industry.detailedPoints.map((point, pIndex) => (
            <li key={pIndex}>
              <strong className="text-foreground">{point.title}:</strong>{" "}
              {point.description}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Features:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industry.features.map((feature, fIndex) => {
            const Icon = feature.icon;
            return (
              <div
                key={fIndex}
                className="card-glass p-5 flex items-start space-x-4"
              >
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryDetails;
