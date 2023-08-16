import {Canvas} from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls} from '@react-three/drei';
import '../../styles/models.css'


const Island =() => {

function Model(props){
    const { scene } = useGLTF("/car.glb")
    return <primitive object={scene} {...props} />
}

return (
    <>
    
    <div className="3dmodel-container">
    <Canvas id="canvasId" dpr={[1, 2]} shadows camera={{ fov: 100, alpha: true }} style={{ position: "static" }}>
        <color attach="" args={[0,0,0,0]} /> {/* Fondo transparente */}
        <PresentationControls speed={1.5} global zoom={0.5} >
            <Stage environment={"sunset"}>
                <Model scale={0.01} />
            </Stage>
        </PresentationControls>
    </Canvas>
    </div>
</>
)

}

export default Island;