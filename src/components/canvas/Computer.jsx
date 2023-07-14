import React, { Suspense, UseEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber' // an empty canvas provided by the React renderer to work with 3d graphics and animation 
import { OrbitControls, Preload, useGLTF } from '@react-three/drei' // OC enables camera control, P optimises asset loading, useGLTF simplifies usage of 3D models in GLTF format

const Computer = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight intensity={1}/>
      <primitive 
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}    // xyz axis, field of view
      gl={{ preserveDrawingBuffer: true }}
    > 
      <Suspense>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas