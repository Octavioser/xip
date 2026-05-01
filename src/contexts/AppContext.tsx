"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ConfirmAction = () => void | Promise<void>;

interface AppContextValue {
  loading: boolean;
  setLoading: (v: boolean) => void;
  confirm: boolean;
  confirmMessage: string;
  confirmAction: ConfirmAction;
  openConfirm: (message: string, action: ConfirmAction) => void;
  closeConfirm: () => void;
  musicPlaying: boolean;
  setMusicPlaying: (v: boolean) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within <AppProvider>");
  return ctx;
}

const NOOP: ConfirmAction = () => {};
const MUSIC_SRC = "/xItem/m/wow.wav";

export function AppProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [confirmAction, setConfirmAction] = useState<ConfirmAction>(() => NOOP);
  const [musicPlaying, setMusicPlayingState] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Browsers (esp. iOS Safari) require play() to be called synchronously inside
  // the user-gesture handler. Routing state through useEffect breaks that chain,
  // so we play/pause here directly when the setter is called from a click.
  const setMusicPlaying = useCallback((v: boolean) => {
    if (typeof window === "undefined") return;
    if (!audioRef.current) {
      audioRef.current = new Audio(MUSIC_SRC);
      audioRef.current.loop = true;
    }
    if (v) {
      audioRef.current.play().catch((err) => {
        // Most likely autoplay policy — ignore, the toggle button gives the user another chance.
        console.warn("[music] play blocked:", err);
      });
    } else {
      audioRef.current.pause();
    }
    setMusicPlayingState(v);
  }, []);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const openConfirm = useCallback((message: string, action: ConfirmAction) => {
    setConfirmMessage(message);
    setConfirmAction(() => action);
    setConfirm(true);
  }, []);

  const closeConfirm = useCallback(() => {
    setConfirm(false);
    setConfirmMessage("");
    setConfirmAction(() => NOOP);
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        confirm,
        confirmMessage,
        confirmAction,
        openConfirm,
        closeConfirm,
        musicPlaying,
        setMusicPlaying,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
