import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Sportigo - Elevate Your Sports Experience",
   description: "The ultimate platform for managing sports events, teams, and competitions. Streamline your organization and boost engagement with our comprehensive sports management solution.",
   keywords: "sports management, team management, tournament organization, sports events, sports platform",
   authors: [{ name: "Sportigo Team" }],
   openGraph: {
      title: "Sportigo - Elevate Your Sports Experience",
      description: "The ultimate platform for managing sports events, teams, and competitions.",
      type: "website",
   },
};

interface RootLayoutProps {
   children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
   return (
      <html lang="en">
         <body className="antialiased">{children}</body>
      </html>
   );
}
