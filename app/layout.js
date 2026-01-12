import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const NunitoFont = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "700"],
});

const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Portfolio - Iaroslava Goncharova",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${NunitoFont.variable} ${InterFont.variable} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
