import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show success toast notification
    toast.success('Thank you for your inquiry. We will get back to you within 24 hours.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91-9849252434 / 9866479962",
      subtitle: "Call us directly"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@transglobalgeomatics.com",
      subtitle: "Send us an email"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "409, SVSS Nivas, Czech Colony, Sanath Nagar",
      subtitle: "Hyderabad -500018, India"
    },
    {
      icon: Clock,
      title: "Support",
      details: "+91-9515131500",
      subtitle: "Monday - Sunday",
      timing: "10:00 AM - 06:00 PM"
    }
  ];

  return (
    <>
      {/* Toast Container - Rendered at the root level */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your tracking capabilities? Contact our experts today 
              for a personalized consultation and see how Trans Global Geomatics<span className="hidden md:inline"> Pvt Ltd</span> can work for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-foreground font-medium">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                        <p className="text-sm text-muted-foreground">{info.timing}</p>
                        
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Contact */}
              <div className="card-glass p-6 mt-8">
                <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Need immediate assistance ?
                </p>
                <Button onClick={() => window.location.href = 'tel:+919849252434'} className="btn-hero w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="+91-9849252434"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="gps-tracking">GPS Tracking</option>
                      <option value="fuel-monitoring">GPS with Fuel Monitoring</option>
                      <option value="temperature-control">GPS with Temperature Control</option>
                      <option value="video-surveillance">GPS with Video Surveillance</option>
                      <option value="padlock-security">GPS with Padlock Security</option>
                      <option value="custom-solution">Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Tell us about your tracking needs and how we can help..."
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>


          
          <div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Trans Global Geomatics Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d718.3551343164297!2d78.43500809969126!3d17.45444680968935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c6974f122d%3A0xb6fa63a2ae6099ba!2sTrans%20Global%20Geomatics%20Pvt%20Ltd!5e1!3m2!1sen!2sus!4v1756809977223!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        </div>
      </section>
    </>
  );
};

export default Contact;