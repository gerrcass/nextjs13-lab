import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Next.js 13 Lab",
  description: "Next.js 13 Lab",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-800 ${roboto.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
