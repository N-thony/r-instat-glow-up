import { Github, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">R-Instat</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Making statistical analysis accessible to everyone, everywhere.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/IDEMSInternational/R-Instat"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                target="_blank"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@RInstat"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                target="_blank"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Features", "Download", "Documentation"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://ecampus.r-instat.org/course/view.php?id=14#section-0" className="text-white/70 hover:text-white transition-colors" target="_blank">
                  User Guide
                </a>
              </li>
              <li>
                <a href="https://ecampus.r-instat.org/mod/page/view.php?id=212" className="text-white/70 hover:text-white transition-colors" target="_blank">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="https://ecampus.r-instat.org/mod/glossary/view.php?id=241" className="text-white/70 hover:text-white transition-colors" target="_blank">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("activities");
                  }}
                  className="text-primary hover:text-primary/80 font-medium text-sm underline underline-offset-4 transition-colors"
                >
                  Community Forum
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li>University of Reading</li>
              <li>Reading, UK</li>
              <li className="pt-3">
                <a
                  href="mailto:info@r-instat.org"
                  className="hover:text-white transition-colors"
                >
                  info@r-instat.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} R-Instat. Open-source software under GPL-3.0 License.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
