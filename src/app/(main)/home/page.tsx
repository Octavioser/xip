"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import styles from "./page.module.scss";

const ModelViewer = dynamic(() => import("@/components/three/ModelViewer"), {
  ssr: false,
});

const MODEL_PATH = "/models/ceramic3Dlogo.glb";
const LOADER_SRC = "/xItem/i/main/loadingLogo.gif";

const calcDegree = (oldX: number, oldY: number, x: number, y: number) => {
  const radians = Math.atan2(x - oldX, y - oldY);
  return `${radians * (180 / Math.PI) * -1 + 180}deg`;
};

export default function Home() {
  const isMobile = useIsMobile();
  const [pos, setPos] = useState({ x: "50vw", y: "50vh", degree: "0deg" });
  const [modelReady, setModelReady] = useState(false);
  const prevRef = useRef({ x: 0, y: 0 });

  // GLB 프리페치 — three 번들 다운로드와 병렬로 GLB도 받기 시작 → 모바일 체감 속도 ↑
  useEffect(() => {
    fetch(MODEL_PATH).catch(() => {
      // network failure here is non-fatal; the actual loader will show its own error path
    });
  }, []);

  useEffect(() => {
    if (isMobile) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    let rafId: number | null = null;
    let pendingX = 0;
    let pendingY = 0;
    const handle = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        const degree = calcDegree(
          prevRef.current.x,
          prevRef.current.y,
          pendingX,
          pendingY,
        );
        prevRef.current = { x: pendingX, y: pendingY };
        setPos({ x: `${pendingX}px`, y: `${pendingY}px`, degree });
        rafId = null;
      });
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handle);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOADER_SRC}
        alt=""
        aria-hidden
        className={`${styles.modelLoader} ${modelReady ? styles.modelLoaderFaded : ""}`}
      />
      <div className="logoImage">
        <ModelViewer modelPath={MODEL_PATH} onReady={() => setModelReady(true)} />
      </div>
      <div className={styles.cursorOverflow}>
        {!isMobile && (
          <div
            className={styles.cursor}
            style={{
              left: pos.x,
              top: pos.y,
              transform: `rotateZ(${pos.degree}) translate(0%, 0%)`,
            }}
          >
            <div className="spermCursor" />
          </div>
        )}
      </div>
    </div>
  );
}
