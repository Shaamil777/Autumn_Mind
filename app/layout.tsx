import "./globals.css";
import "./colors.css";
import Navbar from "./components/layout/Navbar";
import { Quicksand, Playfair_Display, Inter } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${playfair.variable} ${inter.variable} font-quicksand`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
