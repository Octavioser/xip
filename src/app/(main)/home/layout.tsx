import type { Metadata } from "next";
import type { ReactNode } from "react";

// /home 페이지는 'use client' 라 metadata를 export 못 함 → 같은 세그먼트 layout으로 우회
export const metadata: Metadata = {
  title: "Home",
  description: "XIP main",
};

export default function HomeLayout({ children }: { children: ReactNode; }) {
  return <>{children}</>;
}
