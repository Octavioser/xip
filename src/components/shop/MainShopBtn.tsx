"use client";

import Link from "next/link";
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
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className={styles.wrap}>
        <ImgBtn
          src={LOGO}
          alt="menu"
          className={`imgBtnNoRed ${styles.logo}`}
          onClick={() => setOpen((v) => !v)}
        />
        {open && (
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
