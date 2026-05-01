"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ImgBtn } from "@/components/common/ImgBtn";
import { LoadingLink } from "@/components/common/LoadingLink";
import { PBtn } from "@/components/common/PBtn";
import { useAppContext } from "@/contexts/AppContext";
import styles from "./MainShopBtn.module.scss";

const LOGO = "/xItem/i/shop/main/shopMainBtn.webp";

const ITEMS = [
  { href: "/home", label: "HOME" },
  { href: "/shop", label: "SHOP" },
] as const;

export function MainShopBtn() {
  const pathname = usePathname();
  const router = useRouter();
  const { setLoading } = useAppContext();
  const [open, setOpen] = useState(false);

  const isShopRoot = pathname === "/shop";

  const handleClick = () => {
    if (isShopRoot) {
      setOpen((v) => !v);
      return;
    }
    setLoading(true);
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
              <LoadingLink
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <PBtn
                  className={`pBtnNoRed ${styles.menuItem}`}
                  labelText={item.label}
                />
              </LoadingLink>
            ))}
          </>
        )}
      </div>
    </nav>
  );
}
