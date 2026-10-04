import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Preload,
  useTexture,
  OrbitControls,
} from "@react-three/drei";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

function TechBall({ icon, position }) {
  const texture = useTexture(icon);

  return (
    <mesh position={position} scale={0.8}>
      <icosahedronGeometry args={[1, 3]} />

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
}

const Tech = () => {
  const isMobile = window.innerWidth < 768;

  // KEEPING YOUR DESKTOP CODE EXACTLY THE SAME
  const cols = isMobile ? 4 : 10;
  const spacingX = 2;
  const spacingY = 2;

  return (
    <section className="w-full h-[40vh] min-h-[450px]">
      <Canvas
        className="w-full h-full"
        camera={{
          position: [0, 0, isMobile ? 20 : 15],
          fov: isMobile ? 45 : 45,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[2, 2, 5]} intensity={1} />

         <group position={isMobile ? [0, 2, 0] : [0, -2, 0]}>
            {technologies.map((tech, index) => {
              const row = Math.floor(index / cols);
              const col = index % cols;

              return (
                <TechBall
                  key={tech.name}
                  icon={tech.icon}
                  position={
                    isMobile
                      ? [
                          (index % 4) * 2 - 3, // 4 columns on mobile
                          (2.5 - Math.floor(index / 4)) * 2,
                          0,
                        ]
                      : [
                          // YOUR ORIGINAL DESKTOP CALCULATION
                          (col - (cols - 1) / 2) * spacingX,
                          (2.5 - row) * spacingY,
                          0,
                        ]
                  }
                />
              );
            })}
          </group>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minAzimuthAngle={-Math.PI / 6}
            maxAzimuthAngle={Math.PI / 6}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={(5 * Math.PI) / 9}
          />
        </Suspense>

        <Preload all />
      </Canvas>
    </section>
  );
};

export default SectionWrapper(Tech, "");