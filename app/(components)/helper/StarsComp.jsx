'use client'
import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import getSeasonByMonth from './index'

const StarsComp = (props) => {
  const ref = useRef()
  const [currentSeason, setCurrentSeason] = useState('')
  let sizeOfItem = 0.01
  let AmountOfItem = 4000

  useEffect(() => {
    const temp = getSeasonByMonth()
    setCurrentSeason(temp)

    // console.log(currentSeason)
  }, [currentSeason])

  if (currentSeason === 'maple-leaf.png') {
    AmountOfItem = 500
    sizeOfItem = 0.02
  }

  const sphere = new Float32Array(AmountOfItem * 3)
  //   const snowflakeTexture = new THREE.TextureLoader().load(snowflake)
  const snowflakeTexture = new THREE.TextureLoader().load(
    `http://localhost:3000/${currentSeason}`
  )

  snowflakeTexture.wrapS = THREE.RepeatWrapping
  snowflakeTexture.wrapT = THREE.RepeatWrapping

  for (let i = 0; i < sphere.length; i += 3) {
    // Randomize snowflake positions
    sphere[i] = Math.random() * 2 - 1
    sphere[i + 1] = Math.random() * 2 - 1
    sphere[i + 2] = Math.random() * 2 - 1
  }
  useFrame((state, delta) => {
    // Update snowflake positions
    for (let i = 0; i < sphere.length; i += 3) {
      sphere[i + 1] -= delta * 0.1 // Move snowflake up by delta units (from bottom to top)
      if (sphere[i + 1] < -1) {
        sphere[i + 1] = 1 + Math.random() * 0.1 // Reset snowflake position to a random value near the top
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true // Update the positions in the GPU
  })

  return (
    <group>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          map={snowflakeTexture}
          size={sizeOfItem} // Adjust the size of the snowflakes
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
export default StarsComp
