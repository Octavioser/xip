import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.scss";
import { AppProvider } from "@/contexts/AppContext";
import { Loading } from "@/components/common/Loading";
import { LoadingClearer } from "@/components/common/LoadingClearer";
import { ConfirmModal } from "@/components/common/ConfirmModal";
import { MusicBtn } from "@/components/shell/MusicBtn";

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://xipred.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "XIP",
    template: "%s | XIP",
  },
  description: "XIP — visual portfolio + archive",
  applicationName: "XIP",
  keywords: ["XIP", "portfolio", "fashion", "archive", "newtype", "xhell"],
  openGraph: {
    type: "website",
    siteName: "XIP",
    title: "XIP",
    description: "XIP — visual portfolio + archive",
    images: [
      {
        url: "/xItem/i/newtype/main/newtypeMain.webp",
        width: 1200,
        height: 1200,
        alt: "XIP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XIP",
    description: "XIP — visual portfolio + archive",
    images: ["/xItem/i/newtype/main/newtypeMain.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${roboto.variable} ${openSans.variable}`}>
      <body>
        <AppProvider>
          <LoadingClearer />
          <ConfirmModal />
          <Loading />
          {children}
          <MusicBtn />
        </AppProvider>
      </body>
    </html>
  );
}
