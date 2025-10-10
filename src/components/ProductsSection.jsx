import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Satellite,
  Truck,
  Shield,
  Camera,
  Thermometer,
  Fuel,
  MapPin,
  BarChart,
  Lock
} from "lucide-react";
import { NavLink } from "react-router-dom";
const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Advanced Fleet Tracker",
      slug: "advanced-fleet-tracker",
      description: "Comprehensive GPS tracking system with real-time monitoring, route optimization, and driver behavior analysis.",
      icon: <Truck className="w-8 h-8 text-primary" />,
      category: "Fleet Management",
      features: ["Real-time GPS tracking", "Route optimization", "Driver scoring", "Maintenance alerts"]
    },
    {
      id: 2,
      title: "IOT for Mining ",
      slug: "iot-for-mining",
      description: "Specialized GPS tracking for heavy mining equipment with rugged hardware designed for harsh environments.",
      icon: <Satellite className="w-8 h-8 text-primary" />,
      category: "Mining Solutions",
      features: ["Heavy-duty GPS units", "Equipment monitoring", "Geofencing", "Operational analytics"]
    },
    {
      id: 3,
      title: "Fuel Level Sensors",
      slug: "fuel-level-sensors",
      description: "Advanced fuel monitoring system with GPS integration to prevent theft and optimize consumption.",
      icon: <Fuel className="w-8 h-8 text-primary" />,
      category: "Fuel Management",
      features: ["Fuel level monitoring", "Theft detection", "Consumption analytics", "Automated reports"]
    },
    {
      id: 4,
      title: "Video Telematics",
      slug: "video-telematics",
      description: "GPS tracking system integrated with video surveillance for enhanced security and monitoring.",
      icon: <Camera className="w-8 h-8 text-primary" />,
      category: "Security Solutions",
      features: ["Live video streaming", "GPS coordination", "Motion detection", "Cloud storage"]
    },
    {
      id: 5,
      title: "Temperature Monitor",
      slug: "temperature-monitor",
      description: "Temperature-controlled GPS tracking for cold chain management and sensitive cargo monitoring.",
      icon: <Thermometer className="w-8 h-8 text-primary" />,
      category: "Cold Chain",
      features: ["Temperature logging", "Alert notifications", "Compliance reports", "Real-time tracking"]
    },
    {
      id: 6,
      title: "Padlock GPS",
      slug: "padlock-gps",
      description: "Intelligent padlock system with GPS tracking for securing valuable assets and cargo containers.",
      icon: <Lock className="w-8 h-8 text-primary" />,
      category: "Asset Security",
      features: ["Remote locking", "GPS location", "Tamper alerts", "Access logs"]
    },
    {
      id: 7,
      title: "Photogrammetry Services",
      slug: "photogrammetry-services",
      description: "Professional GIS and photogrammetry mapping services with high-precision GPS integration.",
      icon: <MapPin className="w-8 h-8 text-primary" />,
      category: "Mapping Services",
      features: ["High-precision mapping", "3D modeling", "Survey data collection", "Digital mapping"]
    },
    {
      id: 8,
      title: "AIS 140 Tracker",
      slug: "ais-140-tracker",
      description: "Government-approved GPS tracking device compliant with AIS 140 standards for commercial vehicles and fleet management.",
      icon: <Shield className="w-8 h-8 text-primary" />,
      category: "Compliance",
      features: ["AIS 140 certified", "Emergency button", "Vehicle diagnostics", "Regulatory compliance"]
    },
    {
      id: 9,
      title: "Analytics Dashboard",
      slug: "analytics-dashboard",
      description: "Comprehensive data analytics platform for all GPS tracking systems with customizable reports.",
      icon: <BarChart className="w-8 h-8 text-primary" />,
      category: "Analytics",
      features: ["Custom dashboards", "Advanced analytics", "Report generation", "Data visualization"]
    }
  ];

  return (
    <section id="products" className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Our Products
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Complete GPS Tracking Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of GPS tracking products designed for various industries.
            From fleet management to mining operations, we have the right solution for your needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
             <NavLink to={`/products/${product.slug}`}>
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  {product.icon}
                  <Badge variant="secondary" className="text-xs p-1">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{product.title}</CardTitle>
                <CardDescription className="text-sm ">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium text-muted-foreground">Key Features:</p>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
               
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Learn More
                  </Button>
                
              </CardContent>
            </Card></NavLink>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-lg p-8 border">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team can design and implement custom GPS tracking solutions tailored to your specific requirements.
            Contact our sales team to discuss your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="btn-hero"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Sales
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;