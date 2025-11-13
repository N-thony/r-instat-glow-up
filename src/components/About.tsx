const About = () => {
  return (
    <section id="about" className="scroll-mt-24 pt-2 pb-12 lg:pt-4 lg:pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Good statistical understanding can be easy to learn and should be accessible to everyone. 
                It is invaluable for informed decision making across disciplines and education levels.
              </p>
              <p>
                R-Instat provides a front-end to R, designed to broaden the users of the software, 
                particularly in Africa. R is an open-source programming language and software environment 
                for statistical computing and graphics that is supported by the R Foundation.
              </p>
              <p>
                The original Instat was an easy-to-use statistics package, produced at the University of 
                Reading, UK. It was designed to support good statistical practice and included a special 
                menu for the analysis of historical climatic data.
              </p>
              <p className="font-medium text-foreground">
                R-Instat started thanks to a crowd-sourcing campaign in 2015, with software development 
                led by African talent for a broad-multilingual audience.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
              <p className="text-foreground italic">
                "Making statistical analysis accessible to researchers and students worldwide, 
                one user-friendly interface at a time."
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-video bg-gradient-hero rounded-xl overflow-hidden shadow-large">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0_YAjLBVPrI"
                title="R-Instat Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <div className="text-3xl font-display font-bold text-primary mb-2">2015</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <div className="text-3xl font-display font-bold text-primary mb-2">v0.8.9</div>
                <div className="text-sm text-muted-foreground">Latest Version</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
