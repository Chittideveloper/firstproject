import { ChevronRight, Home } from "lucide-react";

const BreadcrumbNavigation = ({ currentSection = "Home" }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const breadcrumbItems = [
    { label: "Home", id: "home", icon: Home },
    { label: "Products", id: "products" },
    { label: "Services", id: "services" },
    { label: "Industries", id: "industries" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const getCurrentIndex = () => {
    return breadcrumbItems.findIndex(item => 
      item.label.toLowerCase() === currentSection.toLowerCase()
    );
  };

  const currentIndex = getCurrentIndex();

  return (
    <nav 
      aria-label="Breadcrumb Navigation"
      className="bg-background/80 backdrop-blur-sm border-b border-border/50 py-2 sticky top-16 z-40"
    >
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.slice(0, currentIndex + 1).map((item, index) => (
            <li key={item.id} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />
              )}
              <button
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
                  index === currentIndex
                    ? "text-primary font-medium bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                aria-current={index === currentIndex ? "page" : undefined}
              >
                {index === 0 && item.icon && (
                  <item.icon className="w-3 h-3" />
                )}
                {item.label}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNavigation;