import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber' // an empty canvas provided by the React renderer to work with 3d graphics and animation 
import { OrbitControls, Preload, useGLTF } from '@react-three/drei' // OC enables camera control, P optimises asset loading, useGLTF simplifies usage of 3D models in GLTF format

import CanvasLoader from "../Loader";

const Computer = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight intensity={1}/>
      <spotLight position={[ -20, 50, 10]} angle={0.12} penumbra={1} intensity={1}/>

      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)") // create MediaQueryList obj that represents a media query for viewport widths of 500 pixels or less
    
    setIsMobile(mediaQuery.matches) // set initial match of the media query

    const handleMediaQueryChange = (event) => { // define callback function to handle changes to the media query
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange) // add callback function as a listener for changes to the media query

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange) // remove listener when component is unmounted
    }
  }, [])
  
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}    // xyz axis, field of view
      gl={{ preserveDrawingBuffer: true }}
    > 
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas