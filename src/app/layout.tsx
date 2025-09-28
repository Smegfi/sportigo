import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Sportigo",
   description: "Sportigo is a platform for managing sports events and teams",
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
