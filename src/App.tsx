import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { Bloom, ChromaticAberration, DotScreen, EffectComposer, Glitch, N8AO, SSAO } from "@react-three/postprocessing";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

function App() {
  const gltf = useLoader(GLTFLoader, '/appartement_pbr_pour_vr/scene.gltf');

  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <Canvas>
          <perspectiveCamera />
          <OrbitControls />

          <EffectComposer>
            <N8AO aoRadius={2.0}
              distanceFalloff={0.5}
              intensity={10.0}
              color="#000000" />
            <Bloom intensity={10} />
            <ChromaticAberration offset={[0.002, 0.002]} />
            <Glitch />
          </EffectComposer>

          <directionalLight intensity={1} color="white" position={[1, 10, 1]} castShadow />
          <ambientLight color={"#7c7ff9"} intensity={2} />
          <Environment preset="night" background />

          <primitive object={gltf.scene} />

          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Canvas>
      </div>
    </>
  )
}

export default App
