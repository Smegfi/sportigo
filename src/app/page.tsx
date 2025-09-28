import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/ui/themes/theme-toggle";
import { BarChart3, Calendar, Shield, Trophy, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
   return (
      <div className="min-h-screen">
         <nav className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
               <div className="flex items-center space-x-2">
                  <Trophy className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold text-foreground">Sportigo</span>
               </div>

               <NavigationMenu>
                  <NavigationMenuList>
                     <NavigationMenuItem>
                        <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                        <NavigationMenuContent>
                           <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                              <div className="row-span-3">
                                 <NavigationMenuLink asChild>
                                    <Link
                                       className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                       href="/"
                                    >
                                       <Trophy className="h-6 w-6" />
                                       <div className="mb-2 mt-4 text-lg font-medium">Sportigo Platform</div>
                                       <p className="text-sm leading-tight text-muted-foreground">
                                          The ultimate platform for managing sports events, teams, and competitions.
                                       </p>
                                    </Link>
                                 </NavigationMenuLink>
                              </div>
                              <NavigationMenuLink asChild>
                                 <Link
                                    href="/features/teams"
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                 >
                                    <div className="text-sm font-medium leading-none">Team Management</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Organize players, coaches, and staff with ease</p>
                                 </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                 <Link
                                    href="/features/events"
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                 >
                                    <div className="text-sm font-medium leading-none">Event Scheduling</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Plan and manage tournaments and events</p>
                                 </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                 <Link
                                    href="/features/analytics"
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                 >
                                    <div className="text-sm font-medium leading-none">Analytics</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Track performance and make data-driven decisions</p>
                                 </Link>
                              </NavigationMenuLink>
                           </div>
                        </NavigationMenuContent>
                     </NavigationMenuItem>
                     <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                           <Link
                              href="/pricing"
                              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                           >
                              Pricing
                           </Link>
                        </NavigationMenuLink>
                     </NavigationMenuItem>
                     <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                           <Link
                              href="/about"
                              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                           >
                              About
                           </Link>
                        </NavigationMenuLink>
                     </NavigationMenuItem>
                  </NavigationMenuList>
               </NavigationMenu>

               <div className="flex items-center space-x-4">
                  <Link href="/login">
                     <Button variant="outline" className="hidden sm:inline-flex">
                        Sign In
                     </Button>
                  </Link>
                  <ThemeToggle />
               </div>
            </div>
         </nav>

         {/* Hero Section */}
         <section className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto text-center">
               <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                  Elevate Your <span className="text-primary">Sports</span> Experience
               </h1>
               <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  The ultimate platform for managing sports events, teams, and competitions. Streamline your organization and boost engagement with our
                  comprehensive sports management solution.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <Link href="/login">
                     <Button size="lg">Get Started Today</Button>
                  </Link>
                  <Button variant="outline" size="lg">
                     Watch Demo
                  </Button>
               </div>
            </div>
         </section>

         <section className="py-20">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                     <h2 className="text-4xl font-bold text-foreground mb-4">Everything You Need for Sports Management</h2>
                     <p className="text-xl text-muted-foreground">Powerful features designed to streamline your sports organization</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                           <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                              <Users className="h-6 w-6 text-primary" />
                           </div>
                           <CardTitle>Team Management</CardTitle>
                           <CardDescription>Organize players, coaches, and staff with ease</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-muted-foreground">
                              Create and manage teams, track player statistics, and maintain comprehensive rosters.
                           </p>
                        </CardContent>
                     </Card>

                     <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                           <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                              <Calendar className="h-6 w-6 text-green-600" />
                           </div>
                           <CardTitle>Event Scheduling</CardTitle>
                           <CardDescription>Plan and manage tournaments and events</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-muted-foreground">Schedule games, tournaments, and events with automated notifications and reminders.</p>
                        </CardContent>
                     </Card>

                     <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                           <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                              <BarChart3 className="h-6 w-6 text-purple-600" />
                           </div>
                           <CardTitle>Analytics & Insights</CardTitle>
                           <CardDescription>Track performance and make data-driven decisions</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-muted-foreground">
                              Comprehensive analytics to track team performance, player development, and engagement metrics.
                           </p>
                        </CardContent>
                     </Card>

                     <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                           <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                              <Trophy className="h-6 w-6 text-orange-600" />
                           </div>
                           <CardTitle>Tournament Management</CardTitle>
                           <CardDescription>Organize and run competitions seamlessly</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-muted-foreground">
                              Create brackets, manage standings, and track tournament progress with real-time updates.
                           </p>
                        </CardContent>
                     </Card>

                     <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                           <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                              <Shield className="h-6 w-6 text-red-600" />
                           </div>
                           <CardTitle>Secure & Reliable</CardTitle>
                           <CardDescription>Enterprise-grade security and reliability</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-muted-foreground">
                              Your data is protected with industry-leading security measures and 99.9% uptime guarantee.
                           </p>
                        </CardContent>
                     </Card>

                     <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                           <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                              <Zap className="h-6 w-6 text-yellow-600" />
                           </div>
                           <CardTitle>Real-time Updates</CardTitle>
                           <CardDescription>Stay connected with instant notifications</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-muted-foreground">
                              Get instant updates on games, scores, and important announcements across all your devices.
                           </p>
                        </CardContent>
                     </Card>
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-20">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Transform Your Sports Organization?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                     Join thousands of sports organizations already using Sportigo to streamline their operations and enhance their community engagement.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Link href="/login">
                        <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                           Start Your Free Trial
                        </Button>
                     </Link>
                     <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                        Contact Sales
                     </Button>
                  </div>
               </div>
            </div>
         </section>

         {/* Footer */}
         <footer className="bg-background text-foreground py-12">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-4 gap-8">
                     <div>
                        <div className="flex items-center space-x-2 mb-4">
                           <Trophy className="h-6 w-6 text-blue-400" />
                           <span className="text-xl font-bold">Sportigo</span>
                        </div>
                        <p className="text-muted-foreground text-sm">The ultimate platform for sports management and community engagement.</p>
                     </div>
                     <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                           <li>
                              <a href="#" className="hover:text-white transition-colors">
                                 Features
                              </a>
                           </li>
                           <li>
                              <a href="#" className="hover:text-white transition-colors">
                                 Pricing
                              </a>
                           </li>
                           <li>
                              <a href="#" className="hover:text-white transition-colors">
                                 API
                              </a>
                           </li>
                        </ul>
                     </div>
                     <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                           <li>
                              <a href="#" className="hover:text-white transition-colors">
                                 Help Center
                              </a>
                           </li>
                           <li>
                              <a href="#" className="hover:text-white transition-colors">
                                 Documentation
                              </a>
                           </li>
                           <li>
                              <a href="#" className="hover:text-white transition-colors">
                                 Contact
                              </a>
                           </li>
                        </ul>
                     </div>
                     <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                           <li>
                              <a href="#" className="hover:text-white transition-colors">
                                 About
                              </a>
                           </li>
                           <li>
                              <a href="#" className="hover:text-white transition-colors">
                                 Blog
                              </a>
                           </li>
                           <li>
                              <a href="#" className="hover:text-white transition-colors">
                                 Careers
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
                     <p>&copy; 2024 Sportigo. All rights reserved.</p>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
}
