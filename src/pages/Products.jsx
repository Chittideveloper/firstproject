import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, Glasses, Cpu, Settings, Eye } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "NVIDIA Graphics Cards",
      description: "High-performance graphics cards for professional GPS tracking visualization and 3D mapping applications.",
      icon: Cpu,
      category: "Hardware",
      features: ["Real-time 3D rendering", "Multi-display support", "CUDA acceleration", "Professional drivers"]
    },
    {
      id: 2,
      title: "3D Glasses",
      description: "Professional 3D viewing glasses for enhanced spatial visualization of GPS tracking data and mapping.",
      icon: Glasses,
      category: "Accessories",
      features: ["Stereoscopic viewing", "Comfortable design", "Multiple compatibility", "HD clarity"]
    },
    {
      id: 3,
      title: "3D Monitors",
      description: "Advanced 3D display monitors for immersive GPS tracking and mapping visualization experiences.",
      icon: Monitor,
      category: "Display",
      features: ["Ultra HD resolution", "3D without glasses", "Wide viewing angles", "Professional color accuracy"]
    },
    {
      id: 4,
      title: "DATEM Software",
      description: "Comprehensive software solution for GPS data analysis, tracking management, and advanced reporting.",
      icon: Settings,
      category: "Software",
      features: ["Real-time tracking", "Advanced analytics", "Custom reports", "Multi-platform support"]
    },
    {
      id: 5,
      title: "Planar 3D Monitors",
      description: "Planar's professional-grade 3D monitors specifically designed for GPS tracking and mapping applications.",
      icon: Eye,
      category: "Display",
      features: ["Planar technology", "Professional calibration", "Multi-touch support", "Industrial durability"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Products</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
              Professional GPS & Mapping Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge hardware and software solutions for GPS tracking, 3D visualization, and mapping applications
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <Card key={product.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{product.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4">
                        <Button className="w-full">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Solutions?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We provide customized GPS tracking and mapping solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              Contact Sales
            </Button>
            <Button 
              size="lg" 
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
      </section>
    </div>
  );
};

export default Products;