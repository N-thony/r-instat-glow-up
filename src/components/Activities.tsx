import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const activities = [
    {
        title: "R-Instat Data Analysis Workshop",
        date: "March 15-17, 2024",
        location: "Nairobi, Kenya",
        description: "Three-day intensive workshop covering advanced statistical analysis techniques using R-Instat. Participants learned data visualization, hypothesis testing, and report generation.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
        attendees: "45 participants"
    },
    {
        title: "Climate Data Analysis Training",
        date: "February 8-10, 2024",
        location: "Kampala, Uganda",
        description: "Specialized training focused on analyzing climate and weather data. Topics included time series analysis, seasonal patterns, and climate trend visualization.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        attendees: "32 participants"
    },
    {
        title: "R-Instat Development Sprint",
        date: "January 20-22, 2024",
        location: "Online Event",
        description: "Community development sprint bringing together developers and contributors to enhance R-Instat features, fix bugs, and improve documentation.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        attendees: "28 contributors"
    },
    {
        title: "Agricultural Statistics Seminar",
        date: "December 5-6, 2023",
        location: "Dar es Salaam, Tanzania",
        description: "Two-day seminar on applying statistical methods to agricultural research. Covered experimental design, ANOVA, and regression analysis for crop trials.",
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
        attendees: "38 participants"
    },
    {
        title: "Student Data Science Bootcamp",
        date: "November 12-15, 2023",
        location: "Kigali, Rwanda",
        description: "Intensive bootcamp introducing university students to data science fundamentals using R-Instat. Included hands-on projects and real-world datasets.",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
        attendees: "52 students"
    },
    {
        title: "Health Data Analysis Workshop",
        date: "October 18-20, 2023",
        location: "Lusaka, Zambia",
        description: "Workshop focused on health statistics and epidemiological data analysis. Participants learned survey data analysis and public health reporting techniques.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
        attendees: "41 participants"
    }
];

const Activities = () => {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="activities" className="scroll-mt-24 pt-2 pb-12 lg:pt-4 lg:pb-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                        Our Activities
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join us in workshops, training sessions, and community events. We're committed to building a strong community around statistical education and R-Instat.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto border rounded-lg p-6 bg-card shadow-xl">
                    <div className="max-h-[600px] overflow-y-auto pr-2">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {activities.map((activity, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-border animate-fade-in group"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <div className="aspect-video overflow-hidden relative">
                                        <img
                                            src={activity.image}
                                            alt={activity.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-medium">
                                            {activity.attendees}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-display font-semibold text-foreground mb-3 line-clamp-2">
                                            {activity.title}
                                        </h3>

                                        <div className="flex flex-col gap-2 mb-3">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Calendar className="h-4 w-4 text-primary" />
                                                <span>{activity.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <MapPin className="h-4 w-4 text-primary" />
                                                <span>{activity.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm text-muted-foreground line-clamp-3">
                                            {activity.description}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex flex-col items-center gap-3 px-6 py-4 bg-primary/5 rounded-lg">
                        <span className="text-foreground font-medium">Interested in hosting or attending an event?</span>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("contact");
                            }}
                            className="text-primary hover:text-primary/80 font-medium text-sm underline underline-offset-4 transition-colors"
                        >
                            Get in touch with us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;