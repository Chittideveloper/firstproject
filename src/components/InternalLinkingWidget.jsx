import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InternalLinkingWidget = () => {
  const relatedLinks = [
    {
      title: "GPS Fleet Management Solutions",
      description: "Comprehensive fleet tracking with fuel monitoring and driver analytics",
      anchor: "#services",
      keywords: ["fleet management", "vehicle tracking", "fuel monitoring"]
    },
    {
      title: "Mining GPS Tracking Systems",
      description: "Industrial-grade GPS solutions for mining equipment and operations",
      anchor: "#industries",
      keywords: ["mining GPS", "equipment tracking", "industrial solutions"]
    },
    {
      title: "Real-time Vehicle Monitoring",
      description: "Live tracking dashboard with alerts and comprehensive reporting",
      anchor: "#products", 
      keywords: ["real-time tracking", "live monitoring", "GPS dashboard"]
    },
    {
      title: "IoT and Sensor Integration",
      description: "Connect temperature, fuel, and security sensors with GPS tracking",
      anchor: "#features",
      keywords: ["IoT integration", "sensor monitoring", "temperature tracking"]
    }
  ];

  const scrollToSection = (anchor) => {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="bg-muted/20 rounded-lg p-6 my-8">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <ExternalLink className="w-5 h-5 text-primary" />
        Related GPS Solutions
      </h3>
      
      <div className="grid gap-3">
        {relatedLinks.map((link, index) => (
          <Card 
            key={index}
            className="group cursor-pointer hover:shadow-md transition-all duration-300 border-border/50 hover:border-primary/30"
            onClick={() => scrollToSection(link.anchor)}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                    {link.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {link.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {link.keywords.map((keyword, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-2 mt-1 flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </aside>
  );
};

export default InternalLinkingWidget;