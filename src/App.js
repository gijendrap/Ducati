import * as THREE from 'three'
import {  useRef, useState } from 'react'
import { Canvas,  useFrame } from '@react-three/fiber'
import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment, Lightformer, Float, useGLTF } from '@react-three/drei'
import { LayerMaterial, Color, Depth } from 'lamina'


export function App() {
  const [degraded, degrade] = useState(false)
  return (
    <div>
    <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}
    style={{ height: '630px' }}>
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <ambientLight intensity={0.5} />
      <Porsche scale={0.031} position={[-2., -2.18, 0]} rotation={[0, Math.PI / 0.3, 0]} />
      <AccumulativeShadows position={[0, 0, 0]} frames={100} alphaTest={0.9} scale={10}>
        <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
      </AccumulativeShadows>
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={1}>
        <Lightformers />
      </Environment>
      <CameraRig />
    </Canvas>
    </div>
    
  )
}



export function Porsche(props) {
  const { nodes, materials } = useGLTF('/do.glb')
  const groupRef = useRef()


  useFrame((state) => {
    groupRef.current.rotation.y += 0.003
  })

  return (
    <group  ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.model_0.geometry} material={materials['Material.002']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_1.geometry} material={materials['Material.003']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_2.geometry} material={materials['Material.004']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_3.geometry} material={materials['Material.005']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_4.geometry} material={materials['Material.006']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_5.geometry} material={materials['Material.007']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_6.geometry} material={materials['Material.008']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_7.geometry} material={nodes.model_7.material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_8.geometry} material={materials['Material.009']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_9.geometry} material={materials['Material.010']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_10.geometry} material={materials['Material.012']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_11.geometry} material={materials['Material.013']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.position.lerp(v.set(Math.sin(t / 5), 0, 12 + Math.cos(t / 5) / 2), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}

function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef()
  useFrame((state, delta) => (group.current.position.z += delta * 10) > 20 && (group.current.position.z = -60))
  return (
    <>
      <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer key={i} form="circle" intensity={2} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
          ))}
        </group>
      </group>
      <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
      <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
      <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer form="ring" color="red" intensity={1} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
      </Float>
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide}>
          <Color color="#444" alpha={1} mode="normal" />
          <Depth colorA="black" colorB="black" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
        </LayerMaterial>
      </mesh>
    </>
  )
}





