import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About Us", href: "/#about" },
    { label: "Products", href: "/#products" },
    { label: "Services", href: "/#services" },
    { label: "Industries", href: "/#industries" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Events", href: "/events" },   // normal page
    { label: "Blog", href: "/blog" },       // normal page
    { label: "Contact", href: "/#contact" },
  ];

  const renderLink = (item, onClick = () => { }) => {
    // If href has #id → use HashLink (smooth scroll)
    if (item.href.includes("#")) {
      return (
        <HashLink
          key={item.label}
          smooth
          to={item.href}
          className="nav-link text-sm font-medium"
          onClick={onClick}
        >
          {item.label}
        </HashLink>
      );
    }
    // Otherwise normal NavLink (page route)
    return (
      <NavLink
        key={item.label}
        to={item.href}
        className={({ isActive }) =>
          `nav-link text-sm font-medium ${isActive ? "text-primary" : ""}`
        }
        onClick={onClick}
      >
        {item.label}
      </NavLink>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border/50 z-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <HashLink
            smooth
            to="/#hero"
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img
              src="/lovable-uploads/tgglogo.webp"
              alt="Trans Global Geomatics Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-gradient hidden sm:block">
              Trans Global Geomatics Pvt Ltd
            </span>
          </HashLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => renderLink(item))}
            <Button
              className="btn-hero"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => renderLink(item, () => setIsOpen(false)))}
              <div className="px-3 py-2">
                <Button
                  className="btn-hero w-full"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setIsOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
