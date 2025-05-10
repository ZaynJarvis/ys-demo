import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cube Construction | F&B Interior Design Singapore",
  description: "Cube Construction is a Singapore-based F&B commercial renovation company, specializing in restaurant, cafe, and bar interior design and fit-out.",
  keywords: [
    "F&B interior design Singapore",
    "restaurant renovation Singapore",
    "commercial kitchen design Singapore",
    "cafe fit out Singapore",
    "Cube Construction",
    "餐饮空间设计 新加坡",
    "商业装修 新加坡"
  ],
  openGraph: {
    title: "Cube Construction | F&B Interior Design Singapore",
    description: "Cube Construction is a Singapore-based F&B commercial renovation company, specializing in restaurant, cafe, and bar interior design and fit-out.",
    url: "https://your-domain.com",
    siteName: "Cube Construction",
    locale: "en_SG",
    type: "website"
  }
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
