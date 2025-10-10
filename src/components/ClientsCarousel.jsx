import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const clients = [
  {
    name: "Mining Corp International",
    logo: "🏭",
    industry: "Mining",
    description:
      "Increased operational efficiency by 35% with our GPS tracking solutions.",
  },
  {
    name: "Logistics Company",
    logo: "🚚",
    industry: "Logistics",
    description:
      "Reduced fuel costs by 28% through optimized route planning and monitoring.",
  },
  {
    name: "Urban Transit Authority",
    logo: "🚌",
    industry: "Transportation",
    description:
      "Improved passenger safety and reduced maintenance costs by 40%.",
  },
  {
    name: "Construction Leaders",
    logo: "🏗️",
    industry: "Construction",
    description:
      "Enhanced equipment security and prevented theft with real-time tracking.",
  },
  {
    name: "Agricultural Solutions",
    logo: "🚜",
    industry: "Agriculture",
    description:
      "Optimized farming operations with precision GPS technology.",
  },
  {
    name: "Emergency Services",
    logo: "🚑",
    industry: "Emergency",
    description:
      "Faster response times and improved resource allocation.",
  },
];

const ClientsCarousel = () => {
  return (
    <section
      id="clients"
      className="py-16 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <header className="text-center mb-12">
          <h2
            id="clients-heading"
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Trusted by{" "}
            <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of companies worldwide who rely on our{" "}
            <strong>GPS tracking and fleet management solutions</strong> to
            optimize operations, reduce costs, and enhance security.
          </p>
        </header>

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
              {clients.map((client, index) => (
                <CarouselItem
                  key={index}
                  className="min-w-0 shrink-0 grow-0 
                             basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 
                             pr-4"
                >
                  <article
                    className="h-full hover-scale border-primary/20 hover:border-primary/40 transition-all duration-300 w-full"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <Card className="h-full">
                      <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                        {/* Logo / Emoji */}
                        <div
                          className="text-5xl mb-4"
                          role="img"
                          aria-label={`${client.industry} logo`}
                        >
                          {client.logo}
                          <span className="sr-only">{client.industry}</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3
                            className="text-xl font-semibold mb-3"
                            itemProp="name"
                          >
                            {client.name}
                          </h3>
                          <div
                            className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4"
                            itemProp="department"
                          >
                            {client.industry}
                          </div>
                          <p
                            className="text-muted-foreground italic leading-relaxed text-sm"
                            itemProp="description"
                          >
                            "{client.description}"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Nav buttons with aria labels */}
            <CarouselPrevious
              aria-label="Previous Clients"
              className="-left-4 h-10 w-10 border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground shadow-lg"
            />
            <CarouselNext
              aria-label="Next Clients"
              className="-right-4 h-10 w-10 border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground shadow-lg"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
