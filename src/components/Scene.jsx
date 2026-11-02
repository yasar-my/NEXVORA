import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function OrbitalCore() {
  const group = useRef();
  const ringA = useRef();
  const ringB = useRef();
  const nodes = useMemo(() => Array.from({length: 34}, (_, i) => {
    const phi = Math.acos(-1 + (2 * i) / 34);
    const theta = Math.sqrt(34 * Math.PI) * phi;
    return [Math.cos(theta) * Math.sin(phi) * 2.35, Math.cos(phi) * 2.35, Math.sin(theta) * Math.sin(phi) * 2.35];
  }), []);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * .12;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * .16) * .12;
    if (ringA.current) ringA.current.rotation.z -= delta * .09;
    if (ringB.current) ringB.current.rotation.x += delta * .07;
  });
  return <group ref={group}>
    <mesh>
      <icosahedronGeometry args={[1.05, 2]} />
      <meshStandardMaterial color="#102d28" metalness={.75} roughness={.24} wireframe />
    </mesh>
    <mesh>
      <icosahedronGeometry args={[.72, 1]} />
      <meshPhysicalMaterial color="#a6ffcb" emissive="#2affad" emissiveIntensity={.28} metalness={.42} roughness={.19} transmission={.12} transparent opacity={.82} />
    </mesh>
    <mesh ref={ringA} rotation={[.8, .2, .2]}>
      <torusGeometry args={[1.58, .008, 8, 180]} />
      <meshBasicMaterial color="#a6ffcb" />
    </mesh>
    <mesh ref={ringB} rotation={[1.4, .5, -.4]}>
      <torusGeometry args={[2.02, .006, 8, 180]} />
      <meshBasicMaterial color="#527cfc" />
    </mesh>
    {nodes.map((pos, i) => <mesh key={i} position={pos} scale={i % 4 === 0 ? .045 : .022}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial color={i % 3 === 0 ? '#a6ffcb' : '#7890ff'} />
    </mesh>)}
  </group>;
}

function FloatingPanel({position, rotation, scale, color}) {
  const ref = useRef();
  useFrame(({clock}) => { if(ref.current) ref.current.position.y = position[1] + Math.sin(clock.elapsedTime * .55 + position[0]) * .08; });
  return <group ref={ref} position={position} rotation={rotation} scale={scale}>
    <mesh>
      <boxGeometry args={[1.15, .78, .025]} />
      <meshPhysicalMaterial color="#111b20" metalness={.5} roughness={.25} transparent opacity={.92} />
    </mesh>
    <mesh position={[0, .29, .02]}>
      <boxGeometry args={[.88, .035, .008]} />
      <meshBasicMaterial color={color} />
    </mesh>
    {[-.18, -.05, .08, .21].map((y, i) => <mesh key={i} position={[-.08, y, .02]}>
      <boxGeometry args={[.65 - i * .08, .018, .006]} />
      <meshBasicMaterial color={i === 0 ? color : '#405158'} />
    </mesh>)}
  </group>;
}

function Environment() {
  return <>
    <color attach="background" args={['#090b10']} />
    <fog attach="fog" args={['#090b10', 5, 12]} />
    <ambientLight intensity={.8} />
    <pointLight position={[4, 4, 5]} intensity={20} color="#a6ffcb" />
    <pointLight position={[-4, -2, 3]} intensity={12} color="#536dff" />
    <OrbitalCore />
    <FloatingPanel position={[-2.45, .95, -.5]} rotation={[.1, .5, -.12]} scale={.78} color="#a6ffcb" />
    <FloatingPanel position={[2.35, -1.15, -.8]} rotation={[-.12, -.4, .16]} scale={.9} color="#7890ff" />
    <gridHelper args={[16, 32, '#19322e', '#131c20']} position={[0, -2.7, 0]} />
  </>;
}

export default function Scene() {
  return <div className="scene-wrap" aria-hidden="true">
    <Canvas camera={{position:[0,0,7.4], fov:42}} dpr={[1, 1.5]} gl={{antialias:true, alpha:true}}>
      <Suspense fallback={null}><Environment /></Suspense>
    </Canvas>
  </div>;
}