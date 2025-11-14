import { BarChart3, Globe2, Shield, Zap, Users, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: BarChart3,
    title: "Comprehensive Statistics",
    description: "Full suite of statistical tools including descriptive statistics, hypothesis testing, regression analysis, and more.",
  },
  {
    icon: Globe2,
    title: "Multilingual Support",
    description: "Built for a global audience with support for multiple languages, making statistics accessible worldwide.",
  },
  {
    icon: Zap,
    title: "Climate Data Analysis",
    description: "Specialized menu for historical climatic data analysis, perfect for environmental research.",
  },
  {
    icon: Code2,
    title: "Powered by R",
    description: "Leverages the full power of R programming language with an intuitive graphical interface.",
  },
  {
    icon: Shield,
    title: "Open Source",
    description: "Completely free and open-source software, ensuring transparency and community-driven development.",
  },
  {
    icon: Users,
    title: "African Innovation, Global Impact",
    description: "African talent-led, serving professional and academic users with increasing global relevance.",
  },
];

const Features = () => {
  return (
    <section id="features" className="scroll-mt-24 pt-2 pb-12 lg:pt-4 lg:pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for comprehensive statistical analysis, wrapped in an intuitive interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 hover:shadow-large transition-all duration-300 hover:-translate-y-1 border-border bg-gradient-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
