import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  MeshReflectorMaterial,
  Float,
  useTexture,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useMemo } from "react";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Mesh } from "three";
import { RiShoppingCartLine } from "react-icons/ri";

const Model = () => {
  const obj = useLoader(OBJLoader, "/models/simplify_cloud.obj");
  const materialTextures = useTexture({
    roughnessMap: "/models/textures/rust_coarse_01_arm_1k.jpg",
    aoMap: "/models/textures/rust_coarse_01_arm_1k.jpg",
    metalnessMap: "/models/textures/rust_coarse_01_arm_1k.jpg",
  });

  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.name === "") {
        const _c = c as Mesh;
        console.log(c);
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  console.log(obj);
  return (
    <>
      <mesh geometry={geometry} scale={0.15} position={[0, 5.5, 0]}>
        <meshPhysicalMaterial
          map={null}
          aoMap={materialTextures.aoMap}
          roughness={0.04}
          metalness={0.8}
        />
      </mesh>
    </>
  );
};

export default function App() {
  return (
    <div className="App h-screen bg-black	">
      <Canvas>
        <Float
          speed={2} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[0, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Model />
        </Float>

        <OrbitControls makeDefault />
        <Environment preset="sunset" />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.2}
            luminanceSmoothing={0.4}
            height={800}
          />
        </EffectComposer>
      </Canvas>

      <div className="absolute right-8 top-4 p-3 opacity-50 hover:opacity-100 hover:cursor-pointer transition duration-700 ">
        <RiShoppingCartLine size="2rem" color="white" />
      </div>
      <div className="absolute top-10 left-10 text-white opacity-50 font-Rubik text-6xl hover:opacity-100 transition duration-700 sm:text-l">
        <h1>Clout </h1>
        <h1>pendant </h1>
      </div>
    </div>
  );
}
