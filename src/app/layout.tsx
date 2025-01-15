"use client";
import Header from "@/components/shared/Header";
import "./globals.css";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col gap-1 min-h-screen bg-gray-50 ">
        <Header />
        <main className="max-w-7xl mx-auto flex flex-row flex-grow justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
