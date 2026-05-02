"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/contexts/AppContext";

// 라우트 전환이 끝나면 (= 새 페이지가 마운트되면) loading 자동 해제.
// 단, 페이지 자체에서 추가 로드(3D 모델 등)를 기다려야 하는 경로는 스킵 →
// 해당 페이지가 직접 setLoading(false)를 호출하는 책임을 짐.
const SKIP_AUTO_CLEAR = new Set<string>(["/home"]);

export function LoadingClearer() {
  const pathname = usePathname();
  const { setLoading } = useAppContext();
  useEffect(() => {
    if (SKIP_AUTO_CLEAR.has(pathname)) return;
    setLoading(false);
  }, [pathname, setLoading]);
  return null;
}
