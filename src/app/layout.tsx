import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "700"],
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${cormorant.variable} ${raleway.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
