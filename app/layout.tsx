import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doce Mãe de Deus",
  description: "Uma igreja para viver Cristo em comunidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}