import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import '../../styles/models.css';

const Island = () => {
  function Model(props) {
    const { scene } = useGLTF("/island.glb");
    return <primitive object={scene} {...props} />;
  }

  return (
    <>
    <div className='canvas-container'>
      <Canvas id="canvasId" dpr={[1, 2]} shadows camera={{ fov: 50, alpha: true }}>
        <color attach="" args={[0, 0, 0, 0]} /> {/* Fondo transparente */}
        <OrbitControls zoom={true} />
        <Stage environment={'sunset'}>
          <Model scale={0.02} />
        </Stage>
      </Canvas>
    </div>
    </>
  );
};

export default Island;
