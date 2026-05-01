"use client";

import { ImgBtn } from "@/components/common/ImgBtn";
import { useAppContext } from "@/contexts/AppContext";
import styles from "./MusicBtn.module.scss";

const ICON_PLAYING = "/xItem/i/main/soundControl.webp";
const ICON_STOPPED = "/xItem/i/main/soundStop.webp";

export function MusicBtn() {
  const { musicPlaying, setMusicPlaying } = useAppContext();
  return (
    <ImgBtn
      className={`soundBtn imgBtnNoHover ${styles.btn}`}
      src={musicPlaying ? ICON_PLAYING : ICON_STOPPED}
      alt={musicPlaying ? "pause music" : "play music"}
      onClick={() => setMusicPlaying(!musicPlaying)}
    />
  );
}
