"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import type { Group } from "three";

interface GltfModelProps {
  modelPath: string;
  rotationSpeed?: number;
}

export function GltfModel({ modelPath, rotationSpeed = 0.003 }: GltfModelProps) {
  const ref = useRef<Group>(null);
  const gltf = useGLTF(modelPath);

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
