import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Ring, Sparkles } from "@react-three/drei";
import { motion } from "framer-motion";

export default function HologramSphere() {
  const sphereRef = useRef();

  useFrame(({ mouse }) => {
    sphereRef.current.rotation.y += 0.01;
    sphereRef.current.rotation.x = mouse.y * 0.3;
  });

  return (
    <group>
      {/* Glowing Animated Sphere */}
      <motion.mesh 
        ref={sphereRef}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial 
          color={"#00ffcc"} 
          distort={0.5} 
          speed={3} 
          emissive={"#00ffcc"} 
          emissiveIntensity={3}
        />
      </motion.mesh>

      {/* Floating Rings */}
      <Ring args={[1.8, 2, 64]} position={[0, 0, 0]} rotation={[1.5, 0, 0]}>
        <meshBasicMaterial color="#00ffff" wireframe />
      </Ring>

      <Ring args={[2.2, 2.5, 64]} position={[0, 0, 0]} rotation={[0.5, 1, 0]}>
        <meshBasicMaterial color="#ff00ff" wireframe />
      </Ring>

      {/* Floating Sparkles */}
      <Sparkles count={50} scale={3} color={"#ffffff"} />
    </group>
  );
}
