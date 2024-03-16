import "./globals.css";
import Header from "@/components/Header";
import '@fortawesome/fontawesome-free/css/all.css'
import Footer from "@/components/Footer";

export const metadata = {
  title: "TRAINING APP",
  description: "App to Gym Lovers"
};

export default function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <body className='dark'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
