import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-body",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  title: "Graduation Invitation | Nguyen Nhat Chi",
  description: "Thu moi le tot nghiep nganh Marketing cua Nguyen Nhat Chi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fff7fa] text-[#3c2530]">
        {children}
      </body>
    </html>
  );
}
