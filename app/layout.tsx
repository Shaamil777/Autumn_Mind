import "./globals.css";
import "./colors.css";
import Navbar from "./components/layout/Navbar";
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} font-quicksand`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
