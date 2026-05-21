import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olisa Anniversary",
  description: "Wedding anniversary celebration website",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon-192.png",
    apple: "/icon-512.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}