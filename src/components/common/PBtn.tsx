"use client";

import type { CSSProperties, MouseEventHandler, ReactNode, Ref } from "react";

interface PBtnProps {
  id?: string;
  className?: string;
  labelText?: ReactNode;
  onClick?: MouseEventHandler<HTMLParagraphElement>;
  style?: CSSProperties;
  ref?: Ref<HTMLParagraphElement>;
}

export function PBtn({
  id,
  className = "pBtn",
  labelText,
  onClick,
  style,
  ref,
}: PBtnProps) {
  return (
    <p
      id={id}
      className={className}
      onClick={onClick}
      style={style}
      ref={ref}
    >
      {labelText}
    </p>
  );
}
