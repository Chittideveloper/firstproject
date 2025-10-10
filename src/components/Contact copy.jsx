import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields (Name, Email, Message).",
        variant: "destructive",
      });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    toast({
      title: "Message Sent",
      description: "Our team will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gray-50"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            Connect with us for <strong>GPS tracking services</strong>,{" "}
            <strong>fleet management solutions</strong>, and{" "}
            <strong>industrial monitoring</strong>. We’re here to help 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <Phone className="text-blue-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919876543210"
                    itemProp="telephone"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Mail className="text-blue-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:info@transglobalgeomatics.com"
                    itemProp="email"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    info@transglobalgeomatics.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin className="text-blue-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600" itemProp="address">
                    Hyderabad, India
                  </p>
                </div>
              </li>
            </ul>

            <Button
              className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <a
                href="tel:+919876543210"
                aria-label="Quick call to Trans Global Geomatics support"
              >
                Quick Call
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-label="Contact form for Trans Global Geomatics"
            >
              <Input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Full Name"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Business Email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Email Address"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                aria-label="Phone Number"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                aria-label="Select GPS tracking service interest"
              >
                <option value="">Select Service Interest</option>
                <option value="fleet">Fleet Management Solutions</option>
                <option value="mining">Mining GPS Tracking</option>
                <option value="industrial">
                  Industrial Asset Monitoring
                </option>
              </select>

              <Textarea
                name="message"
                placeholder="Tell us about your project or query"
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Message"
              />

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Optional Map Embed for Local SEO */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Trans Global Geomatics Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.514!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb976!2sHyderabad!5e0!3m2!1sen!2sin!4v1691834085"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
