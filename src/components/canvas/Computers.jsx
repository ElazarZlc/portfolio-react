import {suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <Canvas 
    frameloop='demand'
    shadows
    camera={{position:[20,3,5], fov:25}}
    gl={{preserveDrawingBuffer:true}}></Canvas>
  )
}

export default Computers