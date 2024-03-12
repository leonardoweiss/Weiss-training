import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import '@fortawesome/fontawesome-free/css/all.css'
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TRAINING APP",
  description: "App to Gym Lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
