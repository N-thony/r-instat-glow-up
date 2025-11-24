import React from 'react'; // useRef is not strictly needed for basic vertical scroll
import { Card } from "@/components/ui/card";
import { Linkedin, Mail, Github } from "lucide-react";

// (Keep the 'team' data array as it is)
const team = [
  // ... (Your team data remains here)
  { name: "Prof. Roger Stern", role: "Project Director", linkedin: "#", mail: "", github: "", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit-crop", },
  { name: "Danny Parsons", role: "Lead Developer", linkedin: "#", mail: "", github: "", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit-crop", },
  { name: "Lily Clements", role: "Software Developer", linkedin: "#", mail: "", github: "", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit-crop", },
  { name: "David Stern", role: "Senior Statistician", linkedin: "#", mail: "", github: "", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit-crop", },
  { name: "James Musyoka", role: "Senior Statistician", linkedin: "#", mail: "", github: "", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit-crop", },
  { name: "Chris Marsh", role: "Software Engineer", linkedin: "#", mail: "", github: "", image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit-crop", },
  { name: "Antoine Ntalumeso", role: "Software Engineer", linkedin: "https://www.linkedin.com/in/antoine-ntalumeso-905276158/", mail: "", github: "", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit-crop", },
  { name: "Derrick Agorhom", role: "Software Developer", linkedin: "#", mail: "", github: "", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit-crop", },
  { name: "Sophie Malla", role: "Software Developer", linkedin: "https://www.linkedin.com/in/sophie-malla-tatchum/", mail: "sophie.malla@aims-cameroon.org", github: "https://github.com/MeSophie", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit-crop", },
  { name: "Patrick Munyoki", role: "Software Engineer", linkedin: "#", mail: "", github: "", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit-crop", },
  { name: "Beryl Waswa", role: "Documentation and Data Integration Specialist", linkedin: "#", mail: "", github: "", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit-crop", },
  { name: "Vitalis Kwambai", role: "Software Developer", linkedin: "#", mail: "", github: "", image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit-crop", },
  { name: "Rachel Stern", role: "Documentation Lead", linkedin: "#", mail: "", github: "", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit-crop", },
  { name: "Anastasia Mbite", role: "Software Developer", linkedin: "#", mail: "", github: "", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit-crop", },
  { name: "Emmanuel Afrifa", role: "Software Developer", linkedin: "https://www.linkedin.com/in/emmanuel-afrifa-840674214/", mail: "eafrifa@aims.edu.gh", github: "https://github.com/Emmanuel-Afrifa", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit-crop", },
  { name: "Joseph Baya", role: "Software Developer", linkedin: "https://www.linkedin.com/in/joseph-baya-7bb1ab2a3/", mail: "josephbaya9648@gmail.com", github: "https://github.com/bayakarisa", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit-crop", },
  { name: "Maragia Rodgers", role: "Software Developer", linkedin: "https://www.linkedin.com/in/rodgers-maragia-20a8b5265/", mail: "maragiarodgers254@gmail.com", github: "https://github.com/Rockjunior", image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit-crop", },
  //{ name: "Rachel Stern", role: "Documentation Lead", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit-crop", },
  //{ name: "Emmanuel Afrifa", role: "Software Developer", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit-crop", }
];


const Team = () => {
  return (
    <section id="team" className="scroll-mt-24 pt-2 pb-12 lg:pt-4 lg:pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated team of over 15 professionals working together to make statistical analysis accessible to everyone.
          </p>
        </div>

        {/* --- Start of the Vertical Scrollable Section --- */}
        <div className="max-w-7xl mx-auto border rounded-lg p-6 bg-card shadow-xl">
          <div
            // 1. Set a max-height to limit the container size
            className="max-h-[600px] overflow-y-auto pr-2"
          >
            {/* 2. Revert to the responsive grid layout */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
              {team.map((member, index) => (
                <Card
                  key={index}
                  // 3. Removed horizontal scroll specific classes (w-[280px], flex-shrink-0)
                  className="overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-base font-display font-semibold text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">{member.role}</p>
                    <div className="flex gap-2">
                      <button className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-3 w-3 text-primary" />
                        </a>
                      </button>
                      <button className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                        <a
                          href={member.mail}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Mail className="h-3 w-3 text-primary" />
                        </a>
                      </button>
                      <button className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-3 w-3 text-primary" />
                        </a>
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* --- End of the Vertical Scrollable Section --- */}

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 rounded-full">
            <span className="text-foreground font-medium">Plus many more contributors from our global community</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;