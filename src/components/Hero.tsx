import { Button } from "@/components/ui/button";
import { Download, PlayCircle } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left animate-fade-in">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-white/90 text-sm font-medium">
                Open-Source Statistical Software
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Statistical Analysis
              <span className="block text-blue-light">Made Accessible</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              R-Instat provides a user-friendly front-end to R, designed to make statistical computing accessible to everyone, particularly in Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "#"; // actual R-Instat setup URL
                  // link.download = "R-Instat-Setup.exe";
                  link.click();
                }}
                size="lg"
                className="bg-primary hover:bg-blue-bright text-white shadow-large text-base px-8 py-6"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
              <Button
                onClick={() => window.open("https://www.youtube.com/watch?v=8REhEZqXEM0", "_blank")}
                size="lg"
                variant="outline"
                className="">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-3xl font-display font-bold text-white">10K+</div>
                <div className="text-white/70 text-sm">Downloads</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div>
                <div className="text-3xl font-display font-bold text-white">50+</div>
                <div className="text-white/70 text-sm">Countries</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div>
                <div className="text-3xl font-display font-bold text-white">100%</div>
                <div className="text-white/70 text-sm">Open Source</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-xl overflow-hidden shadow-large">
              <img
                src="https://r-instat.org/images/instat_demo1.png"
                alt="R-Instat Software Interface"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-light/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
