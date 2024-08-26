import type { Metadata } from "next";
import { Noto_Sans_KR, Black_Han_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/app";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/src/widgets";
import { APP_SUB_NAME } from "@/src/shared";

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
  title: `리뷰봇: ${APP_SUB_NAME}`,
  description: APP_SUB_NAME,
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
          "noto-sans-kr black-han-sans antialiased relative",
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
          <div className="m-auto relative min-h-dvh h-dvh w-full max-w-screen-sm">
            {children}
          </div>
          <ModeToggle className="absolute bottom-7 right-7" />
        </ThemeProvider>
      </body>
    </html>
  );
}
