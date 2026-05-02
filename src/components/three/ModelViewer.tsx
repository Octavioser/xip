"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GltfModel } from "./GltfModel";

interface ModelViewerProps {
  modelPath: string;
  onReady?: () => void;
}

export default function ModelViewer({ modelPath, onReady }: ModelViewerProps) {
  return (
    <Canvas>
      <ambientLight intensity={-1.5} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} onReady={onReady} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
