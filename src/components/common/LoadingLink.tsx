"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useAppContext } from "@/contexts/AppContext";

type Props = ComponentProps<typeof Link>;

// 무거운 페이지(갤러리, 상품 상세)로 이동 시 로딩 오버레이 띄우는 Link 래퍼.
// 도착 페이지가 마운트되면 LoadingClearer가 자동으로 끔.
export function LoadingLink({ onClick, ...rest }: Props) {
  const { setLoading } = useAppContext();
  return (
    <Link
      {...rest}
      onClick={(e) => {
        setLoading(true);
        onClick?.(e);
      }}
    />
  );
}
