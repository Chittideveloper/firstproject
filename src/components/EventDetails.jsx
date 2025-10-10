import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  CalendarDays,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import SocialMedia from "@/components/SocialMedia";
import eventsData from "@/lib/eventsData"; // Import data from central file

const EventDetails = () => {
  // ✅ Correctly get the `eventId` parameter from the URL, matching the route in App.jsx
  const { eventId } = useParams();
  const [showAllImages, setShowAllImages] = useState(false);

  // ✅ Find the event by matching its `id` with the `eventId` from the URL
  const event = eventsData.find((e) => e.id === eventId);

  // If no event is found for the given ID, show a "Not Found" page.
  if (!event) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find the event you were looking for.
            </p>
            <Button asChild>
              <Link to="/events">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Events
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const imagesToShow = showAllImages
    ? event.galleryImages
    : event.galleryImages.slice(0, 6);

  return (
    <div className="bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[300px] text-white">
          <img
            src={event.image}
            alt={`${event.title} banner`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
            <div className="max-w-7xl mx-auto w-full">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <span>
                    {event.date.day} {event.date.month}, {event.date.year}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Content Section */}
        <section className="px-4 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Column */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gradient mb-6">
                  About The Event
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                  <p>{event.detailedDescription}</p>
                </div>
              </div>

              {/* Side Column */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24 shadow-lg border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      Key Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {/* {event.galleryImages && event.galleryImages.length > 0 && (
          <section className="px-4 pb-16 md:pb-24 bg-secondary/20">
            <div className="max-w-7xl mx-auto ">
              <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
                Event Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {imagesToShow.map((img, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-md group aspect-w-16 aspect-h-9"
                  >
                    <img
                      src={img}
                      alt={`Gallery image ${index + 1} from ${event.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              {event.galleryImages.length > 6 && !showAllImages && (
                <div className="text-center mt-12">
                  <Button
                    size="lg"
                    onClick={() => setShowAllImages(true)}
                    aria-label="Show all gallery images"
                  >
                    Show More
                  </Button>
                </div>
              )}
            </div>
          </section>
        )} */}
      </main>

      <Footer />
      <ChatBot />
      <SocialMedia />
    </div>
  );
};

export default EventDetails;