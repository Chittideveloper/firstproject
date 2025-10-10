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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      id: "logistics",
      title: "Logistics",
      description:
        "Optimize your supply chain with real-time GPS tracking for delivery vehicles, cargo monitoring, and route optimization.",
      icon: Truck,
      features: [
        "Fleet management",
        "Route optimization",
        "Delivery tracking",
        "Cargo security",
      ],
    },
    {
      id: "school-transportation",
      title: "School Transportation",
      description:
        "Ensure student safety with comprehensive school bus tracking, parent notifications, and driver monitoring systems.",
      icon: GraduationCap,
      features: [
        "Student safety",
        "Parent notifications",
        "Driver monitoring",
        "Route compliance",
      ],
    },
    {
      id: "mining",
      title: "Mining",
      description:
        "Track heavy mining equipment, monitor operations in remote locations, and ensure safety compliance in harsh environments.",
      icon: Pickaxe,
      features: [
        "Equipment tracking",
        "Safety monitoring",
        "Operational efficiency",
        "Remote access",
      ],
    },
    {
      id: "rmc",
      title: "RMC (Ready Mix Concrete)",
      description:
        "Monitor concrete mixer trucks, optimize delivery schedules, and ensure timely concrete delivery with temperature tracking.",
      icon: Factory,
      features: [
        "Mixer tracking",
        "Delivery optimization",
        "Temperature monitoring",
        "Quality control",
      ],
    },
    {
      id: "pharma",
      title: "Pharma",
      description:
        "Maintain cold chain integrity with temperature-controlled GPS tracking for pharmaceutical transportation and storage.",
      icon: Pill,
      features: [
        "Cold chain monitoring",
        "Temperature alerts",
        "Compliance tracking",
        "Audit trails",
      ],
    },
    {
      id: "asset-telematics",
      title: "Asset Telematics",
      description:
        "Comprehensive asset management with IoT integration, equipment monitoring, and predictive maintenance capabilities.",
      icon: Radio,
      features: [
        "Asset monitoring",
        "IoT integration",
        "Predictive maintenance",
        "Usage analytics",
      ],
    },
    {
      id: "personal-vehicle-tracking",
      title: "Personal Vehicle Tracking",
      description:
        "Personal GPS tracking solutions for individual vehicles, family cars, and personal asset protection.",
      icon: Car,
      features: [
        "Vehicle security",
        "Family tracking",
        "Theft protection",
        "Usage monitoring",
      ],
    },
    {
      id: "municipalities",
      title: "Municipalities",
      description:
        "Comprehensive tracking solutions for municipal vehicles, waste management, public transportation, and city services optimization.",
      icon: Building,
      features: [
        "Municipal fleet tracking",
        "Waste management",
        "Public services",
        "City operations",
      ],
    },
    {
      id: "high-value-cargo",
      title: "High Value Cargo Tracking using Pad Locks",
      description:
        "Secure high-value cargo transportation with smart padlock GPS tracking, real-time monitoring, and tamper alerts.",
      icon: Shield,
      features: [
        "Smart padlock tracking",
        "Cargo security",
        "Tamper detection",
        "High-value protection",
      ],
    },
  ];

  return (
    <section id="industries" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trans Global IOT provides specialized GPS tracking solutions across
            diverse industries, delivering tailored technology to meet unique
            operational requirements and challenges.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <NavLink key={industry.id} to={`/industries/${industry.id}`}>
                <div className="card-glass p-8 group hover:scale-105 transition-transform duration-300">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {industry.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-border/50">
                    <Button
                      variant="outline"
                      className="text-primary font-medium text-sm group flex items-center"
                    >
                      Learn More{" "}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Button>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-glass p-8 lg:p-12 inline-block">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Industry?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              We specialize in creating custom GPS tracking solutions for any
              industry. Contact us to discuss your specific requirements and
              challenges.
            </p>
            <button className="btn-primary">Discuss Custom Solutions</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
