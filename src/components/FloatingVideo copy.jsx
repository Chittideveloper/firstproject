import { X } from "lucide-react";
import { useState, useRef } from "react";

const FloatingVideo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef(null);

  if (!isVisible) return null;

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isExpanded) {
        videoRef.current.pause(); // Pause when shrinking back
      } else {
        videoRef.current.play(); // Play when expanding
      }
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed bottom-4 left-4 z-[9999] transition-all duration-500 ease-in-out 
         ${isExpanded ? "w-[300px] h-[550px]" : "w-[145px] h-[250px]"}`}
    >
      <div className="relative w-full h-full">
        {/* Dismiss Button (outside top-right corner) */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-3 -right-3 bg-black/80 text-white rounded-full p-1 shadow-lg hover:bg-gray-700 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Video */}
        <video
          ref={videoRef}
          src="assets/video/tgg.mp4" // <- place your AI-generated video here
          autoPlay
          mute
          loop
          playsInline
          onClick={handleVideoClick}
          className="w-full h-full rounded-xl shadow-lg cursor-pointer object-cover"
        />
      </div>
    </div>
  );
};

export default FloatingVideo;
