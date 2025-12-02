import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Sousouras Trans – Αξιόπιστες Μεταφορές & Logistics",
  description:
    "Η Sousouras Trans προσφέρει ολοκληρωμένες λύσεις μεταφοράς σε Ελλάδα και εξωτερικό. Εμπιστευθείτε μας για ασφαλείς, γρήγορες και αξιόπιστες αποστολές – Απλά και Σίγουρα.",
  keywords: [
    "Sousouras Trans",
    "μεταφορές",
    "logistics",
    "εμπορευματικές μεταφορές",
    "εθνικές μεταφορές",
    "διεθνείς μεταφορές",
    "ειδικές αποστολές",
    "επιχειρησιακές μεταφορές"
  ],
  authors: [{ name: "Sousouras Trans", url: "https://sousourastrans.gr" }],
  creator: "Sousouras Trans",
  publisher: "Sousouras Trans",
  metadataBase: new URL("https://sousourastrans.gr"),
  openGraph: {
    type: "website",
    title: "Sousouras Trans – Αξιόπιστες Μεταφορές & Logistics",
    description:
      "Η Sousouras Trans προσφέρει ολοκληρωμένες λύσεις μεταφοράς σε Ελλάδα και εξωτερικό. Ασφαλείς και γρήγορες αποστολές – Απλά και Σίγουρα.",
    url: "https://sousourastrans.gr",
    siteName: "Sousouras Trans",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sousouras Trans Logo"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sousouras Trans – Αξιόπιστες Μεταφορές & Logistics",
    description:
      "Η Sousouras Trans προσφέρει ολοκληρωμένες λύσεις μεταφοράς σε Ελλάδα και εξωτερικό. Ασφαλείς και γρήγορες αποστολές – Απλά και Σίγουρα.",
    images: ["/logo.png"],
    creator: "@SousourasTrans",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}


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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
