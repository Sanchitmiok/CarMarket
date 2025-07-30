import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AutoAI Market",
  description: "Find your Dream Car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-white.svg" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-gray-900 text-white py-8 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
                  <h3 className="text-lg md:text-xl font-bold text-blue-400">AutoAI Market</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Your trusted partner in finding the perfect vehicle. 
                    Connecting buyers and sellers nationwide.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm md:text-base">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">Browse Cars</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">Sell Your Car</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">About Us</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">Contact</a></li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm md:text-base">Support</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">Help Center</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">FAQ</a></li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm md:text-base">Connect</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors p-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-label="Twitter">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors p-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-label="Facebook">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors p-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-label="LinkedIn">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    Follow us for the latest updates
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">
                  © 2024 AutoAI Market. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
