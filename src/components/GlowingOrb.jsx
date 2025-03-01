import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export default function SparkClubLogo() {
  const planeRef = useRef();
  const logoTexture = useTexture("/logo.png"); // Ensure the image is inside `public/` folder

  useFrame(({ clock }) => {
    if (planeRef.current) {
      planeRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.1; // Subtle animation
    }
  });

  return (
    <mesh ref={planeRef} position={[0, 0, -5]}>
      <planeGeometry args={[3, 3]} />
      <meshBasicMaterial map={logoTexture} transparent />
    </mesh>
  );
}
