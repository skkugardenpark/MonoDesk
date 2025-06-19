import type { Metadata } from "next";
import { Playfair_Display, Inter } from 'next/font/google';
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MONODESK - 감성적인 데스크테리어 소품",
  description: "따뜻하고 감성적인 데스크테리어 소품으로 당신만의 특별한 공간을 만들어보세요. MONODESK와 함께 일상에 감동을 더하세요.",
  keywords: "데스크테리어, 소품, 인테리어, 감성소품, 홈데코, 오피스용품",
  authors: [{ name: "MONODESK" }],
  openGraph: {
    title: "MONODESK - 감성적인 데스크테리어 소품",
    description: "따뜻하고 감성적인 데스크테리어 소품으로 당신만의 특별한 공간을 만들어보세요.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-wood-cream text-wood-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}
