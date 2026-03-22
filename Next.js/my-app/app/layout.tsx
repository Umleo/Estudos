import "./globals.css";
import Header from "../components/header"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aula Next.js!",
  description: "Aprendendo Next.js do zero."
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        
        {/* Importamos o componente para criar um cabeçalho para nosso projeto. */}
        <Header/>
        {children}

      </body>
    </html>
  );
}
