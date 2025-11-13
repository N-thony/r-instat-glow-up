import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download as DownloadIcon, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const previousVersions64 = [
  { version: "0.8.8", date: "September 15, 2025", size: "485 MB" },
  { version: "0.8.7", date: "July 22, 2025", size: "482 MB" },
  { version: "0.8.6", date: "May 10, 2025", size: "478 MB" },
  { version: "0.8.5", date: "March 5, 2025", size: "475 MB" },
  { version: "0.8.4", date: "January 12, 2025", size: "470 MB" },
  { version: "0.8.3", date: "November 8, 2024", size: "468 MB" },
];

const previousVersions32 = [
  { version: "0.8.8", date: "September 15, 2025", size: "420 MB" },
  { version: "0.8.7", date: "July 22, 2025", size: "418 MB" },
  { version: "0.8.6", date: "May 10, 2025", size: "415 MB" },
  { version: "0.8.5", date: "March 5, 2025", size: "412 MB" },
  { version: "0.8.4", date: "January 12, 2025", size: "408 MB" },
  { version: "0.8.3", date: "November 8, 2024", size: "405 MB" },
];

const Download = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="download" className="scroll-mt-24 pt-2 pb-12 lg:pt-4 lg:pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Download R-Instat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with the latest stable release of R-Instat for Windows.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 lg:p-12 bg-gradient-card border-border shadow-large">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary text-sm font-semibold">Latest Stable Release</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-2">
                  R-Instat 0.8.9
                </h3>
                <p className="text-muted-foreground mb-6">
                  Released: October 27, 2025
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-blue-bright shadow-medium"
                  >
                    <DownloadIcon className="mr-2 h-5 w-5" />
                    Download for Windows
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Release Notes
                  </Button>
                </div>
              </div>

              <div className="lg:border-l lg:border-border lg:pl-8">
                <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">Windows 10/11 64-bit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">4GB RAM minimum</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">500MB disk space</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-12">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 flex items-center justify-center gap-2"
                >
                  {isOpen ? (
                    <>
                      <ChevronUp className="h-5 w-5" />
                      Hide Previous Versions
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-5 w-5" />
                      View Previous Versions
                    </>
                  )}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="mt-6 space-y-6">
                {/* 64-bit versions */}
                <div>
                  <h4 className="text-lg font-display font-semibold text-foreground mb-3">
                    Windows 64-bit
                  </h4>
                  <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-muted/50">
                          <tr>
                            <th className="text-left py-4 px-6 font-display font-semibold text-foreground">
                              Version
                            </th>
                            <th className="text-left py-4 px-6 font-display font-semibold text-foreground">
                              Release Date
                            </th>
                            <th className="text-left py-4 px-6 font-display font-semibold text-foreground">
                              Size
                            </th>
                            <th className="text-right py-4 px-6 font-display font-semibold text-foreground">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {previousVersions64.map((version, index) => (
                            <tr
                              key={version.version}
                              className="border-t border-border hover:bg-muted/30 transition-colors"
                            >
                              <td className="py-4 px-6 font-medium text-foreground">
                                R-Instat {version.version}
                              </td>
                              <td className="py-4 px-6 text-muted-foreground">
                                {version.date}
                              </td>
                              <td className="py-4 px-6 text-muted-foreground">
                                {version.size}
                              </td>
                              <td className="py-4 px-6 text-right">
                                <div className="flex gap-2 justify-end">
                                  <Button size="sm" variant="outline">
                                    <DownloadIcon className="mr-1 h-4 w-4" />
                                    Download
                                  </Button>
                                  <Button size="sm" variant="ghost">
                                    <FileText className="mr-1 h-4 w-4" />
                                    Notes
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>

                {/* 32-bit versions */}
                <div>
                  <h4 className="text-lg font-display font-semibold text-foreground mb-3">
                    Windows 32-bit
                  </h4>
                  <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-muted/50">
                          <tr>
                            <th className="text-left py-4 px-6 font-display font-semibold text-foreground">
                              Version
                            </th>
                            <th className="text-left py-4 px-6 font-display font-semibold text-foreground">
                              Release Date
                            </th>
                            <th className="text-left py-4 px-6 font-display font-semibold text-foreground">
                              Size
                            </th>
                            <th className="text-right py-4 px-6 font-display font-semibold text-foreground">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {previousVersions32.map((version, index) => (
                            <tr
                              key={version.version}
                              className="border-t border-border hover:bg-muted/30 transition-colors"
                            >
                              <td className="py-4 px-6 font-medium text-foreground">
                                R-Instat {version.version}
                              </td>
                              <td className="py-4 px-6 text-muted-foreground">
                                {version.date}
                              </td>
                              <td className="py-4 px-6 text-muted-foreground">
                                {version.size}
                              </td>
                              <td className="py-4 px-6 text-right">
                                <div className="flex gap-2 justify-end">
                                  <Button size="sm" variant="outline">
                                    <DownloadIcon className="mr-1 h-4 w-4" />
                                    Download
                                  </Button>
                                  <Button size="sm" variant="ghost">
                                    <FileText className="mr-1 h-4 w-4" />
                                    Notes
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
