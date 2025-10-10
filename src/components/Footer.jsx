import { MapPin, Mail, Phone } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About Us", href: "/#about" },
      { label: "Industries", href: "/#industries" },
      { label: "Blog", href: "/blog" },
      { label: "Events", href: "/events" }
    ],
    services: [
      { label: "GPS Tracking", href: "/services/gps-tracking" },
      { label: "Fuel Monitoring", href: "/services/gps-fuel" },
      { label: "Temperature Control", href: "/services/gps-temperature" },
      { label: "Video Surveillance", href: "/services/gps-video" },
      { label: "Padlock Security", href: "/services/gps-padlock" },
      { label: "Mining Tracking", href: "/services/gps-mining" }
    ],
    support: [
      { label: "Help Center", href: "/#contact" },
      // { label: "Documentation", href: "#/" },
      { label: "API Reference", href: "https://gpsreports.in/api_document/api/" },
      // { label: "System Status", href: "/#status" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy", target: "_blank" },
      { label: "Terms & Conditions", href: "https://merchant.razorpay.com/policy/MYJHJgIWIOwmEz/terms" },
      { label: "Cancellation & Refund Policy", href: "https://merchant.razorpay.com/policy/MYJHJgIWIOwmEz/refund" },
      { label: "Shipping & Delivery Policy", href: "https://merchant.razorpay.com/policy/MYJHJgIWIOwmEz/shipping" }
    ]
  };

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto container-padding py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/lovable-uploads/tgglogo.webp"
                alt="Trans Global Geomatics Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gradient hidden sm:block">
                Trans Global Geomatics Pvt Ltd
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Leading provider of advanced GPS tracking solutions with over 24
              years of experience. We help businesses monitor, protect, and
              optimize their valuable assets worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  +91-9849252434 / 9866479962
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  info@transglobalgeomatics.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  409, SVSS Nivas, Czech Colony, Sanath Nagar, Hyderabad -500018, India
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("/#") ? (
                    <HashLink
                      smooth
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </HashLink>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("/#") ? (
                    <HashLink
                      smooth
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </HashLink>
                  ) : (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/50">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025 Trans Global Geomatics
            <span className="hidden sm:inline"> Pvt Ltd</span>. All rights
            reserved.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {footerLinks.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.target || "_self"}
                rel={
                  link.target === "_blank" ? "noopener noreferrer" : undefined
                }
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
