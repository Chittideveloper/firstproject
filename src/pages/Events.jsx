import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import ChatBot from "@/components/ChatBot";
import SocialMedia from "@/components/SocialMedia";
import { Link } from "react-router-dom";
import eventsData from "@/lib/eventsData"; // Import data from central file

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const displayedEvents = eventsData.filter(
    (event) => event.status === activeTab
  );

  return (
    <div className="bg-background">
      <Navigation />

      <main>
        {/* Hero */}
        <section
          className="pt-28 pb-20 px-4 bg-gradient-to-b from-background to-secondary/20 text-center"
          aria-labelledby="events-hero"
        >
          <div className="max-w-4xl mx-auto">
            <h1
              id="events-hero"
              className="text-4xl md:text-6xl font-bold text-gradient mb-6 tracking-tight"
            >
              Industry Events & Expos
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Connect with us at leading industry events across India. Discover our
              cutting-edge GPS tracking and asset management solutions firsthand.
            </p>
          </div>
        </section>

        {/* Events */}
        <section className="px-4 py-16" aria-labelledby="events-section">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12">
              <h2
                id="events-section"
                className="text-3xl md:text-4xl font-bold text-gradient"
              >
                {activeTab === "upcoming" ? "Upcoming Events" : "Past Events"}
              </h2>
            </header>

            {/* Tabs */}
            <nav
              aria-label="Event categories"
              className="flex justify-center border-b mb-12"
            >
              <Button
                variant="ghost"
                className={`text-lg rounded-none relative pb-3 after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-full after:transition-transform after:duration-300 ${
                  activeTab === "upcoming"
                    ? "text-primary after:bg-primary after:scale-x-100"
                    : "text-muted-foreground after:bg-primary after:scale-x-0 hover:after:scale-x-100"
                }`}
                onClick={() => setActiveTab("upcoming")}
                aria-pressed={activeTab === "upcoming"}
              >
                Upcoming Events
              </Button>
              <Button
                variant="ghost"
                className={`text-lg rounded-none relative pb-3 after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-full after:transition-transform after:duration-300 ${
                  activeTab === "past"
                    ? "text-primary after:bg-primary after:scale-x-100"
                    : "text-muted-foreground after:bg-primary after:scale-x-0 hover:after:scale-x-100"
                }`}
                onClick={() => setActiveTab("past")}
                aria-pressed={activeTab === "past"}
              >
                Past Events
              </Button>
            </nav>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {displayedEvents.length > 0 ? (
                displayedEvents.map((event) => (
                  <Link to={`/events/${event.id}`}>
                  <article
                    key={event.id}
                    className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border flex flex-col"
                    itemScope
                    itemType="https://schema.org/Event"
                  >
                    <img
                      src={event.image}
                      alt={`${event.title} event in ${event.location}`}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                      itemProp="image"
                    />
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mb-2" itemProp="name">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span itemProp="location">{event.location}</span>
                      </div>
                      <p
                        className="text-muted-foreground flex-grow"
                        itemProp="description"
                      >
                        {event.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div
                          className="bg-card border rounded-lg p-2 w-24 text-center"
                          itemProp="startDate"
                          content={`${event.date.year}-${event.date.month}-${event.date.day}`}
                        >
                          <p className="text-lg font-bold text-primary">
                            {event.date.day}
                          </p>
                          <p className="text-sm font-semibold uppercase tracking-wider">
                            {event.date.month}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {event.date.year}
                          </p>
                        </div>
                        
                          <Button
                            className="group"
                            aria-label={`Learn more about ${event.title}`}
                          >
                            {event.ctaText}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                       
                      </div>
                    </div>
                  </article> </Link>
                ))
              ) : (
                <div className="text-center py-16 md:col-span-2">
                  <p className="text-muted-foreground text-lg">
                    No {activeTab} events available.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
      <SocialMedia />
    </div>
  );
};

export default Events;