"use client";

import Player from "@vimeo/player";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./VimeoPlayer.module.scss";

interface VimeoPlayerProps {
  videoId: string | number;
  title?: string;
  className?: string;
}

const fmtTime = (s: number) => {
  const safe = Number.isFinite(s) && s > 0 ? s : 0;
  const m = Math.floor(safe / 60);
  const sec = Math.floor(safe % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

export function VimeoPlayer({ videoId, title = "video", className }: VimeoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!iframeRef.current) return;
    const player = new Player(iframeRef.current);
    playerRef.current = player;

    player.on("play", () => setPaused(false));
    player.on("pause", () => setPaused(true));
    player.on("volumechange", () => {
      void player.getMuted().then(setMuted);
    });
    player.on("timeupdate", (e) => {
      setCurrentTime(e.seconds);
      setDuration(e.duration);
    });
    player.on("loaded", () => {
      void player.getDuration().then(setDuration);
      void player.getMuted().then(setMuted);
    });

    return () => {
      void player.destroy();
      playerRef.current = null;
    };
  }, [videoId]);

  const togglePlay = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    void (paused ? p.play() : p.pause());
  }, [paused]);

  const toggleMute = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    void p.setMuted(!muted);
  }, [muted]);

  const onSeek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const p = playerRef.current;
      if (!p || duration <= 0) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const pct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      void p.setCurrentTime(pct * duration);
    },
    [duration],
  );

  // muted=0: 사운드 ON으로 시도. 단 브라우저 자동재생 정책 때문에
  // 사이트와 사용자 인터랙션 이력이 부족하면 자동재생 차단됨 → 사용자가 ▶ 클릭해야 재생.
  // 메뉴 클릭 등 사용자 제스처 직후라면 보통 통과함.
  const src = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=0&loop=1&autopause=0&controls=0&playsinline=1&dnt=1`;

  const fillPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`${styles.wrap} ${className ?? ""}`}>
      <iframe
        ref={iframeRef}
        className={styles.iframe}
        src={src}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        title={title}
      />
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.iconBtn}
          onClick={togglePlay}
          aria-label={paused ? "play" : "pause"}
        >
          {paused ? (
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path
                d="M10.6667 6.6548C10.6667 6.10764 11.2894 5.79346 11.7295 6.11862L24.377 15.4634C24.7377 15.7298 24.7377 16.2692 24.3771 16.5357L11.7295 25.8813C11.2895 26.2065 10.6667 25.8923 10.6667 25.3451L10.6667 6.6548Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path
                d="M8.66667 6.66667C8.29848 6.66667 8 6.96514 8 7.33333V24.6667C8 25.0349 8.29848 25.3333 8.66667 25.3333H12.6667C13.0349 25.3333 13.3333 25.0349 13.3333 24.6667V7.33333C13.3333 6.96514 13.0349 6.66667 12.6667 6.66667H8.66667Z"
                fill="currentColor"
              />
              <path
                d="M19.3333 6.66667C18.9651 6.66667 18.6667 6.96514 18.6667 7.33333V24.6667C18.6667 25.0349 18.9651 25.3333 19.3333 25.3333H23.3333C23.7015 25.3333 24 25.0349 24 24.6667V7.33333C24 6.96514 23.7015 6.66667 23.3333 6.66667H19.3333Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>

        <div
          className={styles.slider}
          onClick={onSeek}
          role="slider"
          aria-label="seek"
          aria-valuemin={0}
          aria-valuemax={duration || 0}
          aria-valuenow={currentTime}
          tabIndex={0}
        >
          <div className={styles.track} />
          <div className={styles.thumb} style={{ left: `${fillPct}%` }} />
        </div>

        <span className={styles.time}>{fmtTime(currentTime)}</span>

        <button
          type="button"
          className={styles.soundBtn}
          onClick={toggleMute}
          aria-label={muted ? "unmute" : "mute"}
        >
          <span className={styles.soundLabel}>Sound:</span>
          <span className={styles.soundState}>{muted ? "Off" : "On"}</span>
        </button>
      </div>
    </div>
  );
}
