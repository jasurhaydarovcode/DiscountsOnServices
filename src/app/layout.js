import './globals.css'
import "../assets/css/gotham.css";

export const metadata = {
  title: "DiscountsOnServices",
  description: "DiscountsOnServices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-gotham">{children}</body>
    </html>
  );
}
