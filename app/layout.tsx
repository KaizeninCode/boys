import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Best Outcomes Youth Solace",
  description:
    "Raising Boys into Responsible Men",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-spartan scroll-smooth">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
