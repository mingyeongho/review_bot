import type { Metadata } from "next";
import { Noto_Sans_KR, Black_Han_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/app";
import { cn } from "@/lib/utils";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--noto-sans-kr",
});
const blackHanSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--black-han-sans",
});

export const metadata: Metadata = {
  title: "ㄹㅂㅂ",
  description: "리뷰봇",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background noto-sans-kr black-han-sans antialiased",
          notoSansKR.variable,
          blackHanSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
