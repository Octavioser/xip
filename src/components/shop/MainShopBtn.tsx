"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ImgBtn } from "@/components/common/ImgBtn";
import { PBtn } from "@/components/common/PBtn";
import styles from "./MainShopBtn.module.scss";

const LOGO = "/xItem/i/shop/main/shopMainBtn.webp";

const ITEMS = [
  { href: "/home", label: "HOME" },
  { href: "/shop", label: "SHOP" },
] as const;

export function MainShopBtn() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isShopRoot = pathname === "/shop";

  const handleClick = () => {
    if (isShopRoot) {
      setOpen((v) => !v);
      return;
    }
    // /shop/detailproduct/* 같은 하위 페이지: 뒤로가기 시도, 안 되면 /shop으로
    const before = window.location.pathname;
    router.back();
    window.setTimeout(() => {
      if (window.location.pathname === before) {
        router.push("/shop");
      }
    }, 200);
  };

  return (
    <nav>
      <div className={styles.wrap}>
        <ImgBtn
          src={LOGO}
          alt="menu"
          className={`imgBtnNoRed ${styles.logo}`}
          onClick={handleClick}
        />
        {open && isShopRoot && (
          <>
            {ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <PBtn
                  className={`pBtnNoRed ${styles.menuItem}`}
                  labelText={item.label}
                />
              </Link>
            ))}
          </>
        )}
      </div>
    </nav>
  );
}
