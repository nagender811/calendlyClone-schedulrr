import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Shedulrr",
  description: "Free Online Appointment App",
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {children}
        </main>
        {/* Footer */}
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with 💗 by Nagender kumar</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
