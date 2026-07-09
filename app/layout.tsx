import type { Metadata } from "next";
import "./globals.css";

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
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#fff7fa] text-[#3c2530]">
        {children}
      </body>
    </html>
  );
}
