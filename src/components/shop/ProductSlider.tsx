"use client";

import { useEffect, useRef, useState } from "react";
import { toProductImageUrl } from "@/lib/productData";
import styles from "./ProductSlider.module.scss";

export function ProductSlider({ images }: { images: readonly string[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            setActiveIdx(idx);
          }
        }
      },
      { root: slider, threshold: 0.6 },
    );

    const slides = slider.querySelectorAll("[data-idx]");
    slides.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [images]);

  const goTo = (idx: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const slide = slider.querySelector(
      `[data-idx="${idx}"]`,
    ) as HTMLElement | null;
    slide?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className={styles.wrap}>
      <div ref={sliderRef} className={styles.slider}>
        {images.map((src, i) => (
          <div key={src} className={styles.slide} data-idx={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.image}
              src={toProductImageUrl(src)}
              alt={`slide ${i + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className={styles.dots}>
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`${styles.dot} ${i === activeIdx ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
