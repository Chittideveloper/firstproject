import { X } from "lucide-react";
import { useState, useRef } from "react";

const FloatingVideo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShrinkedOnce, setIsShrinkedOnce] = useState(false);
  const videoRef = useRef(null);

  if (!isVisible) return null;

  const handleVideoClick = () => {
    if (!isExpanded) {
      // Expand video on first click
      setIsExpanded(true);
    } else {
      // Toggle play/pause on subsequent clicks
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }
  };

  const handleDismiss = () => {
    if (isExpanded) {
      // If expanded → shrink back
      setIsExpanded(false);
      setIsShrinkedOnce(true);
    } else {
      // If minimized → remove directly
      setIsVisible(false);
    }
  };

  return (
    <div
      className={`fixed bottom-4 left-4 z-[9999] transition-all duration-500 ease-in-out 
        ${isExpanded ? "w-[300px] h-[550px]" : "w-[145px] h-[250px]"}`}
    >
      <div className="relative w-full h-full">
        {/* Dismiss Button (outside corner) */}
        <button
          onClick={handleDismiss}
          className="absolute -top-3 -right-3 bg-black/80 text-white rounded-full p-1 shadow-lg hover:bg-gray-700 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Video */}
        <video
          ref={videoRef}
          src="assets/video/tgg.mp4"
          autoPlay
          loop
          
          playsInline
          controls={false}
          className="w-full h-full rounded-xl shadow-lg cursor-pointer object-cover"
          onClick={handleVideoClick}
        />
      </div>
    </div>
  );
};

export default FloatingVideo;
