import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Banner1 from "@/components/Banner1";
import ProductsSection from "@/components/ProductsSection";
import Services from "@/components/Services";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Videos from "@/components/Videos";
import Testimonials from "@/components/Testimonials";
import ClientsCarousel from "@/components/ClientsCarousel";
import WhyUs from "@/components/WhyUs";
import Banner2 from "@/components/Banner2";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import SocialMedia from "@/components/SocialMedia";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import InternalLinkingWidget from "@/components/InternalLinkingWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header>
        <Navigation />
        <BreadcrumbNavigation currentSection="Home" />
      </header>
      <main>
        <Hero />
        <Banner1 />
        <section id="products" aria-label="GPS Products">
          <ProductsSection />
        </section>
        <section id="services" aria-label="GPS Services">
          <Services />
          {/* <div className="max-w-7xl mx-auto container-padding">
            <InternalLinkingWidget />
          </div> */}
        </section>
        <section id="features" aria-label="Key Features">
          <FeaturesCarousel />
        </section>
        <section id="industries" aria-label="Industries We Serve">
          <Industries />
        </section>
        <section id="about" aria-label="About Company">
          <About />
        </section>
        <section id="videos" aria-label="Demo Videos">
          <Videos />
        </section>
        <section id="testimonials" aria-label="Customer Testimonials">
          <Testimonials />
        </section>
        <section id="clients" aria-label="Our Clients">
          <ClientsCarousel />
        </section>
        <section id="why-us" aria-label="Why Choose Us">
          <WhyUs />
        </section>
        <Banner2 />
        <section id="contact" aria-label="Contact Information">
          <Contact />
        </section>
      </main>
      <Footer />
      <ChatBot />
      <SocialMedia />
    </div>
  );
};

export default Index;