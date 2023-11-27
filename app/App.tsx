'use client'
import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image as ImageImpl } from '@react-three/drei'

function Image({ c = new THREE.Color(), ...props }) {
  const ref = useRef() as any
  const [hovered, hover] = useState(false)
  useFrame(() => {
    ref.current.material.color.lerp(c.set(hovered ? 'white' : '#ccc'), hovered ? 0.4 : 0.05)
  })
  return <ImageImpl ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} {...(props as any)} />
}

function Images() {
  const { width, height } = useThree((state) => state.viewport)
  const data = useScroll()
  const group = useRef() as any
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1
    group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3
    group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
  })
  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="bar/14.jpg" />
      <Image position={[2, 0, 1]} scale={3} url="bar/213.jpg" />
      <Image position={[-2.3, -height, 2]} scale={[1, 3, 1]} url="bar/155.jpg" />
      <Image position={[-0.6, -height, 3]} scale={[1, 2, 1]} url="bar/119.jpg" />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url="bar/141.jpg" />
      <Image position={[0, -height * 1.5, 2.5]} scale={[1.5, 3, 1]} url="bar/48.jpg" />
      <Image position={[0, -height * 2.5 - height / 4, 0]} scale={[width, height / 2, 1]} url="bar/218.jpg" />
    </group>
  )
}

export default function App() {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls damping={0.2} pages={3.5}>
          <Scroll>
            <Images />
          </Scroll>
          <Scroll html>
            <h1 className="absolute top-[23vh] left-[0.5em] text-7xl ">Catering & Cocktails</h1>
            <h1 className="absolute top-[70vh] left-[1vw] text-[18rem]">Feliks</h1>
            <div className="absolute top-[270vh] left-[2vw] text-4xl w-[80vw] space-y-4 m-4 p-4 py-8">
              <h1 className="text-4xl">Contacts: </h1>
              <p className=" text-2xl">
                Email:{' '}
                <a className="cursor-pointer" href="mailto:felix.mitish@gmail.com">
                  felix.mitish@gmail.com{' '}
                </a>
              </p>
              <p className=" text-2xl">
                Phone:{' '}
                <a className="cursor-pointer" href="tel:+33751470478">
                  +33751470478{' '}
                </a>
              </p>

              <p></p>
            </div>
            <div className="absolute top-[215vh] left-[2vw] text-4xl w-[80vw] space-y-4 m-4 p-4 py-8">
              <p className=" text-2xl">
                <p>Discover catering from our team!</p> Welcome to &quot;Cocktail d&apos;Azur&quot;, your premier destination for
                exceptional bartending experiences! From tailored mixology to event coverage, we offer top-notch services across the French
                Riviera, ensuring unforgettable moments for your special occasions. Contact us to elevate your events today!
              </p>
            </div>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  )
}
