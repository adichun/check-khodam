import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import '../../styles/globals.css'
import '../../styles/custom.css'

const roboto = Roboto({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 'Check Khodam',
  description: 'Check Khodam berdasarkan nama',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <div>
        <body>
          {children}
        </body>
      </div>
    </html>
  )
}
