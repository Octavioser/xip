"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { useAppContext } from "@/contexts/AppContext";

type Props = ComponentProps<typeof Link>;

// 무거운 페이지(갤러리, 상품 상세)로 이동 시 로딩 오버레이 띄우는 Link 래퍼.
// 도착 페이지가 마운트되면 LoadingClearer가 자동으로 끔.
// 단, 같은 경로 클릭 시엔 라우트 변화가 없어 LoadingClearer가 안 발동 → loading 영구 표시 버그
// 따라서 href가 현재 pathname과 같으면 setLoading 스킵.
export function LoadingLink({ onClick, ...rest }: Props) {
  const pathname = usePathname();
  const { setLoading } = useAppContext();
  return (
    <Link
      {...rest}
      onClick={(e) => {
        const href = typeof rest.href === "string" ? rest.href : "";
        if (href && href !== pathname) {
          setLoading(true);
        }
        onClick?.(e);
      }}
    />
  );
}
