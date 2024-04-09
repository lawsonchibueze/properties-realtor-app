import "@/assets/styles/global.css";

export const metadata = {
  title: "Property | Find the Perfect Home",
  description: "Find your Dream Home Rental",
  keywords: "Home, Flat, Duplex",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
