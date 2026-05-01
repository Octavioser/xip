import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.scss";
import { AppProvider } from "@/contexts/AppContext";
import { Loading } from "@/components/common/Loading";
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

export const metadata: Metadata = {
  title: "XIP",
  description: "XIP portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${roboto.variable} ${openSans.variable}`}>
      <body>
        <AppProvider>
          <ConfirmModal />
          <Loading />
          {children}
          <MusicBtn />
        </AppProvider>
      </body>
    </html>
  );
}
