import { Play } from "lucide-react";

const Videos = () => {
  const videos = [
    {
      title: "Tracks Monitoring through Our Cloud Platform",
      description: "Experience comprehensive vehicle tracking through our advanced cloud-based platform. Monitor your entire fleet in real-time with detailed analytics, route optimization, and instant alerts. See how our intuitive dashboard provides complete visibility into vehicle locations, driver behavior, and operational efficiency across all your assets.",
      youtubeId: "hL0lz9FS5R8",
      thumbnail: "https://img.youtube.com/vi/hL0lz9FS5R8/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=hL0lz9FS5R8"
    },
    {
      title: "Monitoring the Vehicles",
      description: "Discover advanced vehicle monitoring capabilities that go beyond basic tracking. Our comprehensive system provides real-time insights into vehicle performance, driver behavior analysis, maintenance alerts, and fuel consumption patterns. Watch how businesses optimize their fleet operations with our intelligent monitoring solutions.",
      youtubeId: "dVBscmoieDg",
      thumbnail: "https://img.youtube.com/vi/dVBscmoieDg/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=dVBscmoieDg"

    },
    {
      title: "Geofences",
      description: "Learn about our powerful geofencing technology that creates virtual boundaries for enhanced security and operational control. Set up custom zones, receive instant notifications when vehicles enter or exit designated areas, and improve compliance with automated reporting. Perfect for construction sites, mining operations, and restricted zones.",
      youtubeId: "JAfhk9CKOtc",
      thumbnail: "https://img.youtube.com/vi/JAfhk9CKOtc/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=JAfhk9CKOtc"
    },
    {
      title: "Engine Hours Location",
      description: "Explore our engine hour tracking and location monitoring system designed for heavy machinery and industrial equipment. Track engine usage, schedule preventive maintenance, monitor equipment utilization, and optimize operational costs. Essential for mining, construction, and agricultural operations where engine hours directly impact profitability.",
      youtubeId: "4CPrdveVpp4",
      thumbnail: "https://img.youtube.com/vi/4CPrdveVpp4/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=4CPrdveVpp4"
    }
  ];

  const handleVideoClick = (url) => {
    // Create a temporary anchor element to ensure proper navigation
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="videos" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Watch Our <span className="text-gradient">Solutions</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how Trans Global IOT's GPS tracking solutions work in real-world scenarios.
            See our technology in action across different industries and applications.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="card-glass overflow-hidden group hover:scale-105 transition-all duration-300">
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Play Button Overlay */}
                <div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors cursor-pointer"
                  onClick={() => handleVideoClick(video.url)}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* YouTube Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-1 bg-red-600 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium">
                    <Play className="w-3 h-3" />
                    <span>YouTube</span>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {video.description}
                </p>

                {/* Watch Button */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <button
                    className="text-primary hover:text-primary-light font-medium text-sm group flex items-center"
                    onClick={() => handleVideoClick(video.url)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-glass p-8 lg:p-12 inline-block">
            <h3 className="text-2xl font-bold mb-4">
              Want to See a Live Demo?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Schedule a personalized demonstration of our GPS tracking solutions.
              See how our technology can transform your operations.
            </p>
            <button
              className="btn-primary"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Schedule Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;