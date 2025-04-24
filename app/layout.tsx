import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scriim Panic System",
  description: "Monitor and view panic alerts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <header className="bg-[#e74c3c] text-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-xl font-bold">Scriim</h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
