import type { ReactNode } from "react";
import { MainShopBtn } from "@/components/shop/MainShopBtn";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainShopBtn />
      {children}
    </>
  );
}
