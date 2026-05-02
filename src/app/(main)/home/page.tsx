"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "@/contexts/AppContext";
import { useIsMobile } from "@/hooks/useIsMobile";
import styles from "./page.module.scss";

const ModelViewer = dynamic(() => import("@/components/three/ModelViewer"), {
  ssr: false,
});

const MODEL_PATH = "/models/ceramic3Dlogo.glb";

const calcDegree = (oldX: number, oldY: number, x: number, y: number) => {
  const radians = Math.atan2(x - oldX, y - oldY);
  return `${radians * (180 / Math.PI) * -1 + 180}deg`;
};

export default function Home() {
  const isMobile = useIsMobile();
  const { setLoading } = useAppContext();
  const [pos, setPos] = useState({ x: "50vw", y: "50vh", degree: "0deg" });
  const prevRef = useRef({ x: 0, y: 0 });

  // GLB 프리페치 — three 번들 다운로드와 병렬로 GLB 받기 시작 (모바일 체감 ↑)
  useEffect(() => {
    fetch(MODEL_PATH).catch(() => {});
  }, []);

  // /home 도착 시 글로벌 로딩 켜기 (LoadingClearer는 /home을 스킵하도록 설정됨)
  // → 3D 준비 완료(onReady) 시점까지 로딩 오버레이 유지
  useEffect(() => {
    setLoading(true);
  }, [setLoading]);

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
      <div className="logoImage">
        <ModelViewer
          modelPath={MODEL_PATH}
          onReady={() => setLoading(false)}
        />
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
