import {Canvas} from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls} from '@react-three/drei';
import '../../styles/models.css'
import ParallaxStars from '../menu/ParallaxStars';

const Planet =() => {

function Model(props){
    const { scene } = useGLTF("/planet.glb")
    return <primitive object={scene} {...props} />
}

return (
    <>

        <Canvas id="canvasId" dpr={[1, 2]} shadows camera={{ fov: 50, alpha: true }} style={{ position: 'flex' }}>
          <color attach="" args={[0, 0, 0, 0]} /> {/* Fondo transparente */}
          <PresentationControls speed={1.5} global zoom={0.5}>
            <Stage environment={'sunset'}>
              <Model scale={0.02} /> {/* Ajusta la escala aquí */}
            </Stage>
          </PresentationControls>
        </Canvas>

</>
)

}

export default Planet;