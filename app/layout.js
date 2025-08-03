import "./globals.css";
import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-luckiest-guy",
});

export const metadata = {
  title: "Kitty The Mechanic | Solana",
  description: "Kity is forever on Solana",
  icons: {
    icon: "https://cdn.builder.io/api/v1/image/assets%2F6e8fa0e4f9974b6bbde244f74d2d30d6%2F71a92f4234ca4e5e8d09f2a1c96e3ed3?format=webp&width=32",
    shortcut: "https://cdn.builder.io/api/v1/image/assets%2F6e8fa0e4f9974b6bbde244f74d2d30d6%2F71a92f4234ca4e5e8d09f2a1c96e3ed3?format=webp&width=32",
    apple: "https://cdn.builder.io/api/v1/image/assets%2F6e8fa0e4f9974b6bbde244f74d2d30d6%2F71a92f4234ca4e5e8d09f2a1c96e3ed3?format=webp&width=180",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${luckiestGuy.variable}`}>{children}</body>
    </html>
  );
}
