import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeScene = () => {
  const canvasRef = useRef(null);
  const mixerRef = useRef(null); // Store the mixer

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Set canvas size to 500x500px
    const canvasWidth = 350
    ;
    const canvasHeight = 600;

    // Create a camera with a perspective view
    const camera = new THREE.PerspectiveCamera(65, canvasWidth / canvasHeight, 0.1, 1000);

    // Create a WebGL renderer and set canvas size
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current ,alpha: true});
    renderer.setSize(canvasWidth, canvasHeight);
    scene.background = null;

    // Add some basic ambient light and directional light
    const ambientLight = new THREE.AmbientLight(0x404040, 3); // Soft light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3); // Bright directional light
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Load the GLTF model
    const loader = new GLTFLoader();
    loader.load('/model.glb', (gltf) => {
      // Ensure the model is added to the scene
      scene.add(gltf.scene);

      // Scale up the model
      gltf.scene.scale.set(1,1, 1); // Scale up the model more

      // Position the model at the center of the scene
      gltf.scene.position.set(0, 0, 0);

      // Create the animation mixer for the model
      const mixer = new THREE.AnimationMixer(gltf.scene);
      mixerRef.current = mixer; // Store the mixer in the ref for later use

      // Loop through animations and add them to the mixer
      gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play(); // Play each animation
      });

      // Calculate the model's bounding box to find its height
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const modelHeight = box.max.y - box.min.y;

      // Adjust the camera position to fit the model within the viewport
      camera.position.z = modelHeight * 1; // Adjust this to keep the model in view after scaling up
      camera.position.y = modelHeight / 2; // Adjust to center vertically
    }, undefined, (error) => {
      console.error('Error loading model:', error);
    });

    // Animation loop to render the scene
    const animate = () => {
      requestAnimationFrame(animate);

      // Update the mixer to play animations
      if (mixerRef.current) {
        mixerRef.current.update(0.01); // Update animation with delta time
      }

      // Optionally add some rotation to the model to make it more dynamic
      if (scene.children.length > 0) {
        scene.children[0].rotation.y += 0.01;
      }

      // Render the scene from the perspective of the camera
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas" />;
};

export default ThreeScene;
