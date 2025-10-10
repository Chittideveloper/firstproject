import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      // position: "Fleet Manager",
      company: "Government Agency",
      rating: 5,
      content: "Trans Global IOT has revolutionized our fleet management. The GPS tracking with fuel monitoring has helped us reduce fuel theft by 85% and improve our delivery efficiency significantly.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Anil Mehta",
      // position: "Operations Director",
      company: "Mining Owner",
      rating: 5,
      content: "The mining GPS solutions from Trans Global IOT have been game-changing for our operations. Real-time equipment tracking in harsh environments has improved our productivity by 40%.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Amit Patel",
      // position: "School Transport Coordinator",
      company: "International School",
      rating: 5,
      content: "Student safety is our top priority. Trans Global IOT's school bus tracking system gives parents peace of mind and helps us ensure every child reaches safely. Excellent service!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Dr. Meera Singh",
      // position: "Supply Chain Manager",
      company: "Pharma Company",
      rating: 5,
      content: "Cold chain monitoring for our pharmaceutical products is critical. The temperature tracking with GPS has helped us maintain product integrity and comply with regulatory requirements.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Suresh Reddy",
      // position: "Municipal Commissioner",
      company: "Government Agency",
      rating: 5,
      content: "Managing our municipal vehicle fleet was challenging until we implemented Trans Global IOT's solutions. Now we have complete visibility and have optimized our city services remarkably.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Kavita Joshi",
      // position: "Security Manager",
      company: " Logistics Company",
      rating: 5,
      content: "For our high-value cargo transportation, the padlock GPS tracking system provides unmatched security. Real-time tamper alerts have prevented multiple theft attempts.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by businesses across India. Here's what our clients have to say about 
            Trans Global IOT's GPS tracking solutions and exceptional service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-glass p-6 hover:scale-105 transition-all duration-300 group">
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">50,000+</div>
            <div className="text-sm text-muted-foreground">Vehicles Tracked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-glass p-8 lg:p-12 inline-block">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Satisfied Clients
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Experience the difference that professional GPS tracking solutions can make. 
              Start your journey with India's most trusted GPS tracking company.
            </p>
            <button className="btn-primary">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;