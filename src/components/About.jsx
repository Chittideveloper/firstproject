import { Shield, Users, Trophy, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { value: "10,000+", label: "Active Clients", icon: Users },
    { value: "24+", label: "Years Experience", icon: Clock },
    { value: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { value: "50+", label: "Industry Awards", icon: Trophy },
  ];

  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <article>
            <header>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              >
                About{" "}
                <span className="text-gradient">
                  Trans Global Geomatics
                  <span className="hidden md:inline"> Pvt Ltd</span>
                </span>
              </h2>
            </header>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Established in <strong>2001</strong>,{" "}
              <strong>Trans Global Geomatics Pvt Ltd</strong> has been a leader
              in <strong>GPS tracking technology</strong>, offering innovative
              solutions for fleet management, mining, logistics, and industrial
              operations. Our dedication to <em>cutting-edge technology</em> and
              reliable service has made us a trusted global partner.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We provide <strong>comprehensive tracking systems</strong> that go
              beyond simple location monitoring. Our advanced solutions include{" "}
              <strong>fuel management, temperature control, video
              surveillance</strong>, and <strong>asset security</strong>—ensuring
              complete operational visibility and protection.
            </p>

            {/* Mission */}
            <section
              aria-labelledby="mission-heading"
              className="card-glass p-6 mb-8"
            >
              <h3
                id="mission-heading"
                className="text-xl font-semibold mb-3 text-gradient"
              >
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To empower businesses with intelligent tracking solutions that
                enhance security, improve operational efficiency, and provide
                complete peace of mind through innovative technology and
                exceptional service.
              </p>
            </section>
          </article>

          {/* Stats */}
          <aside className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="card-glass p-6 text-center glow-box"
                  aria-label={stat.label}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      className="w-8 h-8 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-3xl font-bold text-gradient mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </aside>
        </div>

        {/* Values */}
        <section
          className="mt-20"
          aria-labelledby="core-values-heading"
        >
          <h3
            id="core-values-heading"
            className="text-2xl font-bold text-center mb-12"
          >
            Our <span className="text-gradient">Core Values</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="card-glass p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Security First</h4>
              <p className="text-muted-foreground">
                Your data and assets are protected with
                enterprise-grade security measures and encryption.
              </p>
            </article>

            <article className="card-glass p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Customer Focused</h4>
              <p className="text-muted-foreground">
                We prioritize our customers' needs and provide 24/7 support
                to ensure your success.
              </p>
            </article>

            <article className="card-glass p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Innovation</h4>
              <p className="text-muted-foreground">
                Continuous innovation drives us to develop cutting-edge
                solutions for evolving needs.
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
