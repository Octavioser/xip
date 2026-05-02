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

const DESCRIPTION = "born from XIP die with XIP.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "xip",
    template: "%s | xip",
  },
  description: DESCRIPTION,
  applicationName: "xip",
  keywords: ["xip", "portfolio", "fashion", "archive", "newtype", "xhell"],
  icons: {
    other: [
      { rel: "mask-icon", url: "/img/safari-pinned-tab.svg", color: "#FF0000" },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "xip",
    title: "xip",
    description: DESCRIPTION,
    url: BASE_URL,
    images: [
      {
        url: "/img/logo270.png",
        width: 270,
        height: 270,
        alt: "xip",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "xip",
    description: DESCRIPTION,
    images: ["/img/logo270.png"],
  },
  appleWebApp: {
    title: "xip",
    statusBarStyle: "black-translucent",
  },
  other: {
    "msapplication-TileColor": "#FF0000",
    "msapplication-TileImage": "/img/mstile-150x150.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#FF0000",
  width: "device-width",
  initialScale: 1,
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
