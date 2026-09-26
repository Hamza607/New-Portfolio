import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import { useRef } from 'react'

function Orb() {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.12
    ref.current.rotation.y += delta * 0.18
    const t = state.clock.elapsedTime
    ref.current.position.y = Math.sin(t * 0.7) * 0.15
  })

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} scale={2.15}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#152d2a"
          wireframe
          transparent
          opacity={0.74}
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>
      <mesh scale={1.35}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#0f1f1c" roughness={0.2} metalness={0.2} />
      </mesh>
    </Float>
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 42 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1.1} />
      <pointLight position={[3, 3, 4]} intensity={16} color="#6ee7b7" />
      <pointLight position={[-4, -2, 3]} intensity={10} color="#67e8f9" />
      <Orb />
      <Stars radius={30} depth={20} count={700} factor={1.6} saturation={0} fade speed={0.4} />
    </Canvas>
  )
}
