import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidepanel from "@/components/SidePanel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "kpunno",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[F0F0F0]`}
      >
        <Sidepanel/>
          <div className="justify-center px-8 max-w-[48rem] mx-auto py-12">
            {children}
          </div>
      </body>
    </html>
  );
}
