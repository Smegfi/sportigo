import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Trophy } from "lucide-react";

export default function LoginPage() {
   return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
         <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
               <div className="text-center mb-8">
                  <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
                     <Trophy className="h-8 w-8 text-blue-600" />
                     <span className="text-2xl font-bold text-slate-900 dark:text-white">Sportigo</span>
                  </Link>
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                     Welcome Back
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400">
                     Sign in to your Sportigo account
                  </p>
               </div>

               <Card>
                  <CardHeader>
                     <CardTitle>Sign In</CardTitle>
                     <CardDescription>
                        Enter your credentials to access your account
                     </CardDescription>
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
                           className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                           className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                     </div>
                     <Button className="w-full" size="lg">
                        Sign In
                     </Button>
                     <div className="text-center">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                           Don't have an account?{" "}
                           <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
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