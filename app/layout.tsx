import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Black at Western Alumni",
  description:
    "A platform dedicated to celebrating and connecting Black alumni of Western University, fostering a vibrant community through shared stories, resources, and events.The Black at Western Alumni (BAWA) association at Western University is a transformative force dedicated to fostering a vibrant, supportive, and empowering community for Black students and alumni. Through mentorship, networking opportunities, community engagement and advocacy. BAWA strives to strengthen the Black student and graduate experience, deepen connections with London’s Black community, and celebrate Black excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
