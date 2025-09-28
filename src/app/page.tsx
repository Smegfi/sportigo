import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Trophy, Users, Calendar, BarChart3, Shield, Zap } from "lucide-react";

export default function Home() {
   return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
         {/* Navigation */}
         <nav className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
               <div className="flex items-center space-x-2">
                  <Trophy className="h-8 w-8 text-blue-600" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">Sportigo</span>
               </div>
               <Link href="/login">
                  <Button variant="outline" className="hidden sm:inline-flex">
                     Sign In
                  </Button>
               </Link>
            </div>
         </nav>

         {/* Hero Section */}
         <section className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto text-center">
               <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6">
                  Elevate Your <span className="text-blue-600">Sports</span> Experience
               </h1>
               <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
                  The ultimate platform for managing sports events, teams, and competitions. 
                  Streamline your organization and boost engagement with our comprehensive sports management solution.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <Link href="/login">
                     <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
                        Get Started Today
                     </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                     Watch Demo
                  </Button>
               </div>
            </div>
         </section>

         {/* Features Section */}
         <section className="py-20 bg-slate-50 dark:bg-slate-800">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                     <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                        Everything You Need for Sports Management
                     </h2>
                     <p className="text-xl text-slate-600 dark:text-slate-400">
                        Powerful features designed to streamline your sports organization
                     </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                           <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                              <Users className="h-6 w-6 text-blue-600" />
                           </div>
                           <CardTitle>Team Management</CardTitle>
                           <CardDescription>Organize players, coaches, and staff with ease</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-slate-600 dark:text-slate-400">
                              Create and manage teams, track player statistics, and maintain comprehensive rosters.
                           </p>
                        </CardContent>
                     </Card>

                     <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                           <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                              <Calendar className="h-6 w-6 text-green-600" />
                           </div>
                           <CardTitle>Event Scheduling</CardTitle>
                           <CardDescription>Plan and manage tournaments and events</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-slate-600 dark:text-slate-400">
                              Schedule games, tournaments, and events with automated notifications and reminders.
                           </p>
                        </CardContent>
                     </Card>

                     <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                           <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                              <BarChart3 className="h-6 w-6 text-purple-600" />
                           </div>
                           <CardTitle>Analytics & Insights</CardTitle>
                           <CardDescription>Track performance and make data-driven decisions</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-slate-600 dark:text-slate-400">
                              Comprehensive analytics to track team performance, player development, and engagement metrics.
                           </p>
                        </CardContent>
                     </Card>

                     <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                           <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                              <Trophy className="h-6 w-6 text-orange-600" />
                           </div>
                           <CardTitle>Tournament Management</CardTitle>
                           <CardDescription>Organize and run competitions seamlessly</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-slate-600 dark:text-slate-400">
                              Create brackets, manage standings, and track tournament progress with real-time updates.
                           </p>
                        </CardContent>
                     </Card>

                     <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                           <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                              <Shield className="h-6 w-6 text-red-600" />
                           </div>
                           <CardTitle>Secure & Reliable</CardTitle>
                           <CardDescription>Enterprise-grade security and reliability</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-slate-600 dark:text-slate-400">
                              Your data is protected with industry-leading security measures and 99.9% uptime guarantee.
                           </p>
                        </CardContent>
                     </Card>

                     <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                           <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                              <Zap className="h-6 w-6 text-yellow-600" />
                           </div>
                           <CardTitle>Real-time Updates</CardTitle>
                           <CardDescription>Stay connected with instant notifications</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-slate-600 dark:text-slate-400">
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
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                     Ready to Transform Your Sports Organization?
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                     Join thousands of sports organizations already using Sportigo to streamline their operations and enhance their community engagement.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Link href="/login">
                        <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
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
         <footer className="bg-slate-900 text-white py-12">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-4 gap-8">
                     <div>
                        <div className="flex items-center space-x-2 mb-4">
                           <Trophy className="h-6 w-6 text-blue-400" />
                           <span className="text-xl font-bold">Sportigo</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                           The ultimate platform for sports management and community engagement.
                        </p>
                     </div>
                     <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                           <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                           <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                           <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                        </ul>
                     </div>
                     <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                           <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                          <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                     </div>
                     <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                          <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
                     <p>&copy; 2024 Sportigo. All rights reserved.</p>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
}
