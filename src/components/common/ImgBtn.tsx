"use client";

import type { CSSProperties, MouseEventHandler, Ref } from "react";

interface ImgBtnProps {
  id?: string;
  className?: string;
  src: string;
  alt: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
  style?: CSSProperties;
  ref?: Ref<HTMLImageElement>;
}

export function ImgBtn({
  id,
  className = "imgBtn",
  src,
  alt,
  onClick,
  style,
  ref,
}: ImgBtnProps) {
  return (
    <img
      id={id}
      className={className}
      src={src}
      alt={alt}
      onClick={onClick}
      style={style}
      ref={ref}
    />
  );
}
