import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import "swiper/swiper-bundle.css";
import Footer from "./Components/Footer/page";
import Header from "./Components/Header/page";
import { Providers } from "./Store/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor Ready",
  description: "Meet the best Doctor with best services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
