import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import Ball from "./Ball";
import Loader from "../Loader";

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 5]} />

        <Ball imgUrl={icon} />

        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;