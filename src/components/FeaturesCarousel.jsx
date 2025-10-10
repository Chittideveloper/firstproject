import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, Shield, Zap, BarChart3, Satellite, Fuel } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    description:
      "Monitor your fleet and assets with precise, real-time location data and comprehensive reporting.",
    color: "text-blue-500",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description:
      "Protect your valuable assets with geo-fencing, alerts, and anti-theft features.",
    color: "text-green-500",
  },
  {
    icon: Fuel,
    title: "Fuel Monitoring",
    description:
      "Track fuel consumption, detect theft, and optimize fuel efficiency across your fleet.",
    color: "text-orange-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Get detailed insights with customizable dashboards and comprehensive analytics.",
    color: "text-purple-500",
  },
  {
    icon: Satellite,
    title: "Satellite Coverage",
    description:
      "Global coverage with reliable satellite communication for remote locations.",
    color: "text-cyan-500",
  },
  {
    icon: Zap,
    title: "Instant Alerts",
    description:
      "Receive immediate notifications for critical events and system updates.",
    color: "text-yellow-500",
  },
];

const FeaturesCarousel = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span> That Drive
            Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the comprehensive suite of tools designed to optimize your
            operations
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <CarouselItem
                    key={index}
                    className="min-w-0 shrink-0 grow-0 
                               basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 
                               pr-4"
                  >
                    <Card className="h-full border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 w-full">
                      <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                        <div className="mb-4 flex justify-center">
                          <div className="p-4 rounded-full bg-primary/10">
                            <IconComponent
                              className={`w-10 h-10 ${feature.color}`}
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-4 h-10 w-10 border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground shadow-lg" />
            <CarouselNext className="-right-4 h-10 w-10 border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
