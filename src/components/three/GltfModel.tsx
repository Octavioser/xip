"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import type { Group } from "three";

interface GltfModelProps {
  modelPath: string;
  rotationSpeed?: number;
  onReady?: () => void;
}

export function GltfModel({
  modelPath,
  rotationSpeed = 0.003,
  onReady,
}: GltfModelProps) {
  const ref = useRef<Group>(null);
  const gltf = useGLTF(modelPath);

  // useGLTF가 Suspense 풀린 후(=GLB 로드 완료 후) 첫 렌더에서 발화
  useEffect(() => {
    onReady?.();
  }, [onReady]);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += rotationSpeed;
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={[0, 0, 0]}
      scale={[5, 5, 5]}
    />
  );
}
