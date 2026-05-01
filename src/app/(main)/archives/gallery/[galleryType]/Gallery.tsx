"use client";

import { useCallback, useEffect, useState, type CSSProperties } from "react";
import {
  GALLERY_COLUMNS,
  GALLERY_IMAGES,
  toOriginalUrl,
  toThumbnailUrl,
  type GalleryType,
} from "@/lib/galleryData";
import styles from "./Gallery.module.scss";

const VIMEO_XHELL_URL =
  "https://player.vimeo.com/video/1165179732?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1";

interface CssVars extends CSSProperties {
  "--cols"?: number;
}

export function Gallery({ galleryType }: { galleryType: GalleryType }) {
  const images = GALLERY_IMAGES[galleryType];
  const columns = GALLERY_COLUMNS[galleryType];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Reset loaded state whenever the displayed image changes
  useEffect(() => {
    setImgLoaded(false);
  }, [openIndex]);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i + 1) % images.length,
    );
  }, [images.length]);
  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  const gridStyle: CssVars = { "--cols": columns };
  const isMovieProject = galleryType === "xhellMovieProject";

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.inner}>
          {isMovieProject && (
            <section className={styles.vimeoBox}>
              <div>
                <iframe
                  src={VIMEO_XHELL_URL}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="XhELL"
                />
              </div>
            </section>
          )}
          <div className={styles.grid} style={gridStyle}>
            {images.map((path, i) => (
              <div
                key={path}
                className={`${styles.cell} ${
                  isMovieProject ? styles.movieProject : ""
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.thumb}
                  src={toThumbnailUrl(path)}
                  alt=""
                  loading="lazy"
                  onClick={() => setOpenIndex(i)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="popUp"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            type="button"
            className={`${styles.navBtn} ${styles.prev}`}
            onClick={prev}
            aria-label="previous"
          >
            ◀
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            {!imgLoaded && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                className={styles.popLoader}
                src="/xItem/i/main/loadingLogo.gif"
                alt="loading"
              />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={images[openIndex]}
              className={`${styles.popImage} ${imgLoaded ? styles.popImageReady : ""}`}
              src={toOriginalUrl(images[openIndex])}
              alt=""
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgLoaded(true)}
            />
          </div>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.next}`}
            onClick={next}
            aria-label="next"
          >
            ▶
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/xItem/i/works/closeSlideBtn.webp"
            alt="close"
            className={styles.closeBtn}
            onClick={close}
          />
        </div>
      )}
    </>
  );
}
