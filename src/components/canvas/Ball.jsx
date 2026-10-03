import React from "react";
import { Decal, useTexture } from "@react-three/drei";

const Ball = ({ imgUrl }) => {
  const texture = useTexture(imgUrl);

  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1, 2]} />

      <meshStandardMaterial
        color="#3d3d3d"
        flatShading
        polygonOffset
        polygonOffsetFactor={-5}
      />

      <Decal
        position={[0, 0, 1]}
        rotation={[0, 0, 0]}
        map={texture}
      />
    </mesh>
  );
};

export default Ball;