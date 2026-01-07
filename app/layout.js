import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata= {
  title: "Pranav Abhimanyu | Full Stack Developer",
  description: "Portfolio of Pranav Abhimanyu – Full Stack Developer & GenAI Enthusiast",
  icons: {
    icon: "/vercel.ico"
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-gray-900${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SocialSidebar />
         <main className="flex-1">{children}</main>
       
    
      </body>
    
    </html>
  );
}
