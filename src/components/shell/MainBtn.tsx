"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ImgBtn } from "@/components/common/ImgBtn";
import { LoadingLink } from "@/components/common/LoadingLink";
import { PBtn } from "@/components/common/PBtn";
import { useAppContext } from "@/contexts/AppContext";
import styles from "./MainBtn.module.scss";

const MENU_LOGO = "/xItem/i/main/mainXLogo.webp";

const MENU_ITEMS = [
  { href: "/archives", label: "archives" },
  { href: "/video", label: "video" },
  { href: "/shop", label: "shop" },
  { href: "/credit", label: "credit" },
] as const;

export function MainBtn() {
  const pathname = usePathname();
  const router = useRouter();
  const { setLoading } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(true);

  if (pathname === "/") return null;

  const isHome = pathname === "/home";

  const handleClick = () => {
    if (isHome) {
      setMenuOpen((v) => !v);
      return;
    }
    setLoading(true);
    const before = window.location.pathname;
    router.back();
    window.setTimeout(() => {
      if (window.location.pathname === before) {
        router.push("/home");
      }
    }, 200);
  };

  return (
    <nav>
      <div className={styles.wrap}>
        <ImgBtn
          src={MENU_LOGO}
          alt="menu"
          className={`imgBtnNoRed ${styles.logo} ${
            isHome ? styles.logoHome : styles.logoElsewhere
          }`}
          onClick={handleClick}
        />
        {isHome && menuOpen && (
          <>
            {MENU_ITEMS.map((item) => (
              <LoadingLink key={item.href} href={item.href}>
                <PBtn
                  labelText={item.label}
                  onClick={() => setMenuOpen(false)}
                />
              </LoadingLink>
            ))}
          </>
        )}
      </div>
    </nav>
  );
}
