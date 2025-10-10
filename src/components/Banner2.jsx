import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Banner2 = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+919849252434';
  };

  return (
    <section className="py-16 bg-gradient-to-l from-secondary/20 via-background to-secondary/10">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your <span className="text-gradient">Operations?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join thousands of businesses worldwide who trust our GPS tracking solutions 
              for their critical operations. Get started with a free consultation today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <Button onClick={handleCallNow} className="btn-outline-hero group">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button onClick={scrollToContact} className="btn-hero group">
              <Mail className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;