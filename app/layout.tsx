import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Rifqi Fauzan | IT Support & System Engineer Portfolio",
  description: "Professional portfolio of Rifqi Fauzan, an experienced IT Support Specialist and System Engineer based in Jakarta, Indonesia. Highly skilled in hardware/software troubleshooting, Cisco & MikroTik networking, virtualization, and SQL databases.",
  keywords: [
    "Rifqi Fauzan",
    "IT Support Jakarta",
    "System Engineer Jakarta",
    "Network Engineer Portfolio",
    "MikroTik MTCNA",
    "Cisco CCNA",
    "VMware ESXi",
    "Oracle SQL",
    "IT Support Engineer"
  ],
  authors: [{ name: "Rifqi Fauzan" }],
  creator: "Rifqi Fauzan",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-zinc-950 text-zinc-50 flex flex-col">
        {children}
      </body>
    </html>
  );
}
