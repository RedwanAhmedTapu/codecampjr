"use client"
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const Globe = () => {
  
  return (
    <div className="globe-container bg-black">
      <Canvas className="globe-canvas bg">
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} intensity={100} />
        <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
          <meshBasicMaterial attach="material" />
        </Sphere>
      </Canvas>
    </div>
  );
};

export default Globe;
