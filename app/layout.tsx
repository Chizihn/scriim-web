import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scriim Emergency Alert System",
  description: "Monitor and manage emergency alerts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <header className="bg-blue-600 text-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-xl font-bold">Scriim Panic Alert System</h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
