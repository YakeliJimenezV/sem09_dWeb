
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LumiPlay",
    template: "%s | LumiPlay",
  },
  description:
    "LumiPlay: explora películas y series, encuentra tus favoritas y descubre sus detalles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

