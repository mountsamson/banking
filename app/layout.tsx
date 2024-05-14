import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const imbPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-imb-plex-serif",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Horizon Bank",
  description: "Horizen a modern banking app for everyone",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${imbPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
