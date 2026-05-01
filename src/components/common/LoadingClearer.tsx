"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/contexts/AppContext";

// 라우트 전환이 끝나면 (= 새 페이지가 마운트되면) loading 자동 해제
export function LoadingClearer() {
  const pathname = usePathname();
  const { setLoading } = useAppContext();
  useEffect(() => {
    setLoading(false);
  }, [pathname, setLoading]);
  return null;
}
