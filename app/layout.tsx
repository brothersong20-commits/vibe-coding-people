import type { Metadata } from "next";
import { TopNav } from "@/components/brand/top-nav";
import { Footer } from "@/components/brand/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe Coding People",
  description:
    "바이브 코딩으로 함께 만드는 사이드 프로젝트 모임. 공지, 일정, 프로젝트 결과물을 한곳에서.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <TopNav />
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
