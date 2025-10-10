// import { useState } from "react";
// import { Menu, X, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { label: "About Us", href: "/#about" },
//     { label: "Products", href: "/#products" },
//     { label: "Services", href: "/#services" },
//     { label: "Industries", href: "/#industries" },
//     { label: "Why Us", href: "/#why-us" },
//     { label: "Events", href: "/events" },   // normal page
//     { label: "Blog", href: "/blog" },       // normal page
//     { label: "Contact", href: "/#contact" },
//   ];

//   return (
//     <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border/50 z-50">
//       <div className="max-w-7xl mx-auto container-padding">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-3 cursor-pointer" onClick={() => {
//             window.location.href = '/';
//           }}>
//             <img 
//               src="/lovable-uploads/tgglogo.webp" 
//               alt="Trans Global Geomatics Logo" 
//               className="w-10 h-10"
//             />
//             <span className="text-xl font-bold text-gradient hidden sm:block">Trans Global Geomatics Pvt Ltd</span>
//           </div>

//           {/* Desktop Navigation - Only show on large screens */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="nav-link text-sm font-medium"
//               >
//                 {item.label}
//               </a>
//             ))}
//             <Button className="btn-hero" onClick={() => {
//               window.location.href = '/#contact';
//             }}>Get Started</Button>
//           </div>

//           {/* Mobile/Tablet menu button */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile/Tablet Navigation */}
//         {isOpen && (
//           <div className="lg:hidden bg-card border-t border-border/50">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="block px-3 py-2 text-base font-medium nav-link"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//               <div className="px-3 py-2">
//                 <Button className="btn-hero w-full" onClick={() => {
//                   window.location.href = '/#contact';
//                   setIsOpen(false);
//                 }}>Get Started</Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;





//*

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { NavLink } from "react-router-dom";
// import { HashLink } from "react-router-hash-link"; // ✅ for #ids

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { label: "About Us", href: "/#about", type: "hash" },
//     { label: "Products", href: "/#products", type: "hash" },
//     { label: "Services", href: "/#services", type: "hash" },
//     { label: "Industries", href: "/#industries", type: "hash" },
//     { label: "Why Us", href: "/#why-us", type: "hash" },
//     { label: "Events", href: "/events", type: "page" }, // separate page
//     { label: "Blog", href: "/blog", type: "page" },     // separate page
//     { label: "Contact", href: "/#contact", type: "hash" },
//   ];

//   return (
//     <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border/50 z-50">
//       <div className="max-w-7xl mx-auto container-padding">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div
//             className="flex items-center space-x-3 cursor-pointer"
//             onClick={() => {
//               window.location.href = "/";
//             }}
//           >
//             <img
//               src="/lovable-uploads/tgglogo.webp"
//               alt="Trans Global Geomatics Logo"
//               className="w-10 h-10"
//             />
//             <span className="text-xl font-bold text-gradient hidden sm:block">
//               Trans Global Geomatics Pvt Ltd
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) =>
//               item.type === "page" ? (
//                 <NavLink
//                   key={item.label}
//                   to={item.href}
//                   className="nav-link text-sm font-medium"
//                 >
//                   {item.label}
//                 </NavLink>
//               ) : (
//                 <HashLink
//                   key={item.label}
//                   smooth
//                   to={item.href}
//                   className="nav-link text-sm font-medium"
//                 >
//                   {item.label}
//                 </HashLink>
//               )
//             )}
//             <Button
//               className="btn-hero"
//               onClick={() => {
//                 window.location.href = "/#contact";
//               }}
//             >
//               Get Started
//             </Button>
//           </div>

//           {/* Mobile/Tablet menu button */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile/Tablet Navigation */}
//         {isOpen && (
//           <div className="lg:hidden bg-card border-t border-border/50">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) =>
//                 item.type === "page" ? (
//                   <NavLink
//                     key={item.label}
//                     to={item.href}
//                     className="block px-3 py-2 text-base font-medium nav-link"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.label}
//                   </NavLink>
//                 ) : (
//                   <HashLink
//                     key={item.label}
//                     smooth
//                     to={item.href}
//                     className="block px-3 py-2 text-base font-medium nav-link"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.label}
//                   </HashLink>
//                 )
//               )}
//               <div className="px-3 py-2">
//                 <Button
//                   className="btn-hero w-full"
//                   onClick={() => {
//                     window.location.href = "/#contact";
//                     setIsOpen(false);
//                   }}
//                 >
//                   Get Started
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;




//*

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About Us", href: "/#about", type: "hash" },
    { label: "Products", href: "/#products", type: "hash" },
    { label: "Services", href: "/#services", type: "hash" },
    { label: "Industries", href: "/#industries", type: "hash" },
    { label: "Why Us", href: "/#why-us", type: "hash" },
    { label: "Events", href: "/events", type: "page" },
    { label: "Blog", href: "/blog", type: "page" },
    { label: "Contact", href: "/#contact", type: "hash" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border/50 z-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <img
              src="/lovable-uploads/tgglogo.webp"
              alt="Trans Global Geomatics Logo"
              className="w-10 h-10"
            />
            <span className="text-lg sm:text-xl font-bold text-gradient">
              Trans Global Geomatics Pvt Ltd
            </span>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.type === "page" ? (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="nav-link text-sm font-medium"
                >
                  {item.label}
                </NavLink>
              ) : (
                <HashLink
                  key={item.label}
                  smooth
                  to={item.href}
                  className="nav-link text-sm font-medium"
                >
                  {item.label}
                </HashLink>
              )
            )}
            <Button
              className="btn-hero"
              onClick={() => {
                window.location.href = "/#contact";
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) =>
                item.type === "page" ? (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <HashLink
                    key={item.label}
                    smooth
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </HashLink>
                )
              )}
              <div className="px-3 py-2">
                <Button
                  className="btn-hero w-full"
                  onClick={() => {
                    window.location.href = "/#contact";
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