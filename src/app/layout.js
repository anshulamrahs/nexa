import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar/Navbar'
import Footer from "@/components/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TheOuthouse",
  description: "Always a bias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container  2xl:w-[1280px]  xl:w-[1280px] xl:pl-[20px] xl:pr-[20px] lg:w-[768px] md:w-[640px] sm:w-[475px]  m-auto pl-[30px] pr-[30px] min-h-[100vh] flex flex-col justify-between" >
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
