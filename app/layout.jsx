import "@/assets/styles/global.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Property | Find the Perfect Home",
  description: "Find your Dream Home Rental",
  keywords: "Home, Flat, Duplex",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
