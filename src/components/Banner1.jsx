import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Banner1 = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Advanced <span className="text-gradient">GPS Solutions</span> for Every Industry
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            From mining operations to fleet management, our cutting-edge technology ensures 
            complete visibility and control over your valuable assets.
          </p>
          <Button className="btn-hero group">
            Explore Solutions
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner1;