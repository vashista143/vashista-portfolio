import React, { useRef } from 'react'
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, useAnimations } from "@react-three/drei";
import { useState, useEffect } from 'react';
import * as THREE from 'three';
import { Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
function Model({ mouse }) {
  const group= useRef();
  const { scene, animations } = useGLTF("/models/hatsune_miku_lbx_ver_yuki_custom__redesign.glb");
  const {actions}= useAnimations(animations, group);
  useEffect(() => {
    if (actions && actions["Armature|ArmatureAction"]) {
      const action = actions["Armature|ArmatureAction"];

      action.reset(); 
      const startingTime = 1.5; 
      action.time = startingTime;
      action.setLoop(THREE.LoopOnce);
      action.clampWhenFinished = true; 
      action.play();
    }
  }, [actions]);
  useEffect(() => {
  scene.traverse((object) => {
    if (object.isBone) {
      console.log("Bone Name:", object.name);
    }
  });
}, [scene]);
  // useFrame(() => {
  //   if (group.current) {
  //     group.current.rotation.y += (mouse.x * 0.8 - group.current.rotation.y) * 0.05;
  //     group.current.rotation.x += (-mouse.y * 0.5 - group.current.rotation.x) * 0.05;
  //   }
  // });
  
  useFrame(() => {
    // 1. Grab the head bone by the name we found
    const head = scene.getObjectByName('Bone003_09');

    if (head) {
      // 2. Define the target rotation based on mouse position
      // We limit the rotation (0.4) so her neck doesn't snap
      const targetRotationY = mouse.x * 0.4; 
      const targetRotationX = -mouse.y * 0.4;

      // 3. Smoothly interpolate (Lerp) to the target rotation
      // 0.1 is the speed—lower is smoother
      head.rotation.y = THREE.MathUtils.lerp(head.rotation.y, targetRotationY, 0.5);
      head.rotation.x = THREE.MathUtils.lerp(head.rotation.x, targetRotationX, 0.5);
    }
  });

  return (
  <Center>
  <primitive  ref={group} object={scene} scale={1.2}/>
    </Center>);
}

const Hatsune = ({mouse}) => {
  return (
    <Canvas className='w-full h-full'>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />

      <Model mouse={mouse} />

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

export default Hatsune
