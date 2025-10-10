import { MessageCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SocialMedia = () => {
  const socialLinks = [
    { 
      icon: MessageCircle, 
      href: "https://wa.me/919849252434", 
      label: "WhatsApp",
      color: "hover:bg-green-500"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/transglobalgeomatics", 
      label: "Instagram",
      color: "hover:bg-pink-500"
    },
    { 
      icon: Facebook, 
      href: "https://facebook.com/transglobalgeomatics", 
      label: "Facebook",
      color: "hover:bg-blue-600"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/transglobalgeomatics", 
      label: "LinkedIn",
      color: "hover:bg-blue-700"
    }
  ];

  return (
    <TooltipProvider>
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 ${social.color}`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>{social.label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;