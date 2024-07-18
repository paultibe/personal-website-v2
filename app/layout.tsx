import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paul Tiberghien",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/website-logo.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        />
        <title>Paul Tiberghien</title>
      </head>
      <body>
        <Link href="/" className="absolute top-7 left-7 z-10 opacity-0 md:opacity-100">
          <Image
            src="/website-logo.png"
            alt="website-logo"
            className="w-12 h-12 rounded-lg"
            width={48}
            height={48}
          ></Image>
        </Link>
        <NavBar></NavBar>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
