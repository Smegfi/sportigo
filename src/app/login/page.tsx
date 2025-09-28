import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
   return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-green-50 dark:from-background dark:via-card dark:to-background flex items-center justify-center">
         <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
               <div className="text-center mb-8">
                  <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
                     <Trophy className="h-8 w-8 text-blue-600" />
                     <span className="text-2xl font-bold text-foreground">Sportigo</span>
                  </Link>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
                  <p className="text-muted-foreground">Sign in to your Sportigo account</p>
               </div>

               <Card>
                  <CardHeader>
                     <CardTitle>Sign In</CardTitle>
                     <CardDescription>Enter your credentials to access your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                           Email
                        </label>
                        <input
                           id="email"
                           type="email"
                           placeholder="Enter your email"
                           className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                     </div>
                     <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium">
                           Password
                        </label>
                        <input
                           id="password"
                           type="password"
                           placeholder="Enter your password"
                           className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                     </div>
                     <Button className="w-full" size="lg">
                        Sign In
                     </Button>
                     <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                           Don&apos;t have an account?{" "}
                           <a href="#" className="text-primary hover:text-primary/80 font-medium">
                              Sign up
                           </a>
                        </p>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </div>
   );
}
