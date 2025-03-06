import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';

const Ribbons = ({ colors, baseSpring, baseFriction, baseThickness, speedMultiplier }) => {
  const meshRef = useRef();

  // Create random wave movements
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.elapsedTime * speedMultiplier) * 5;
      meshRef.current.rotation.z += 0.002;
    }
  });

  // Generate gradient material
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_color1: { value: new THREE.Color(colors[0]) },
        u_color2: { value: new THREE.Color(colors[1]) },
        u_color3: { value: new THREE.Color(colors[2]) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec3 u_color1;
        uniform vec3 u_color2;
        uniform vec3 u_color3;
        varying vec2 vUv;
        
        void main() {
          float wave = sin(vUv.y * 10.0 + u_time) * 0.5 + 0.5;
          vec3 color = mix(u_color1, u_color2, wave);
          color = mix(color, u_color3, wave * 0.5);
          gl_FragColor = vec4(color, 0.9);
        }
      `,
      transparent: true,
    });
  }, [colors]);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[30, 30, 64, 64]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const RibbonsBackground = () => {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full -z-10">
      <Ribbons
        colors={['#FC8EAC', '#A29BFE', '#74B9FF']}
        baseSpring={0.03}
        baseFriction={0.9}
        baseThickness={30}
        speedMultiplier={0.6}
      />
    </Canvas>
  );
};

export default RibbonsBackground;
