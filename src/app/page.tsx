import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
   return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
         <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
               <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6">Welcome to Next.js + shadcn/ui</h1>
               <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                  A clean, minimalistic setup with TypeScript, Tailwind CSS, and shadcn/ui components.
               </p>

               <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <Card>
                     <CardHeader>
                        <CardTitle>Modern Stack</CardTitle>
                        <CardDescription>Built with Next.js 15, React 19, and TypeScript</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Latest features and best practices for modern web development.</p>
                     </CardContent>
                  </Card>

                  <Card>
                     <CardHeader>
                        <CardTitle>Beautiful UI</CardTitle>
                        <CardDescription>shadcn/ui components with Tailwind CSS</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Pre-built, accessible components that look great out of the box.</p>
                     </CardContent>
                  </Card>
               </div>

               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8 py-6">
                     Get Started
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                     Learn More
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
