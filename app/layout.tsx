import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "./Components/BootstrapClient";

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
      <body>
        <NavBar></NavBar>
        <main>{children}</main>
        <Footer></Footer>
        <BootstrapClient></BootstrapClient>
      </body>
    </html>
  );
}
