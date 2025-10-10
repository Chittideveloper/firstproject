import { CheckCircle, Zap, Globe, Headphones, Database, Cpu } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Response",
      description: "Real-time alerts and instant notifications ensure you're always informed of critical events."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide GPS tracking capabilities with seamless coverage across all continents."
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Round-the-clock technical support from our team of GPS tracking specialists."
    },
    {
      icon: Database,
      title: "Secure Data Storage",
      description: "Enterprise-grade security with encrypted data storage and regular backups."
    },
    {
      icon: Cpu,
      title: "Advanced Technology",
      description: "Cutting-edge hardware and software solutions with regular updates and improvements."
    },
    {
      icon: CheckCircle,
      title: "Proven Reliability",
      description: "99.9% uptime guarantee with robust infrastructure and redundant systems."
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">Trans Global IOT</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just provide GPS tracking - we deliver complete peace of mind. 
            Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card-glass p-8 glow-box group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="card-glass p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-gradient">Trans Global IOT</span> vs Others
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* TrackPro Column */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-primary">With Trans Global IOT</h4>
              <ul className="space-y-4">
                {[
                  "Real-time tracking with 5-second updates",
                  "Advanced analytics and reporting",
                  "Multiple sensor integrations",
                  "24/7 professional support",
                  "Custom alert configurations",
                  "Enterprise-grade security",
                  "Mobile app with full features",
                  "Flexible pricing plans"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Others Column */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-muted-foreground">With Others</h4>
              <ul className="space-y-4">
                {[
                  "Basic tracking with delayed updates",
                  "Limited reporting capabilities",
                  "Single-purpose devices only",
                  "Limited support hours",
                  "Generic alert systems",
                  "Basic security measures",
                  "Limited mobile functionality",
                  "One-size-fits-all pricing"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-muted rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
