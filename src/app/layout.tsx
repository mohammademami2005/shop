import type { Metadata } from "next";
import { Arvo} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./providers/providers";

const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"]
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "QUENX.",
  description: "Elevate your style with exceptional footwear.",
 icons: {
    icon: [
      { url: "/favicon1.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },

  alternates: {
    canonical: "https://shop.mohammademamiproject.ir/",
    languages: {
      "en-US": "https://shop.mohammademamiproject.ir/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arvo.className} antialiased`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>

      </body>
    </html>
  );
}
