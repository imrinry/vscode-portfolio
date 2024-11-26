// // components/ModelViewer.js

// import { useRef, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';

// function Model({ url }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1} />;
// }

// export default function ModelViewer({ modelUrl }) {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <Model url={modelUrl} />
//     </Canvas>
//   );
// }
