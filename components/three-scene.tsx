"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const starsRef = useRef<THREE.Points | null>(null);
  const galaxyRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controlsRef.current = controls;

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
    });

    const starsVertices = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    starsRef.current = stars;

    // Function to get a random alpha map texture
    const getRandomAlphaMap = () => {
      const textureLoader = new THREE.TextureLoader();
      const textureIndex = Math.floor(Math.random() * 10) + 1; // Assuming you have 10 textures named 1.png to 10.png
      return textureLoader.load(`/textures/particles/${textureIndex}.png`);
    };

    // Create galaxy
    const galaxyGeometry = new THREE.BufferGeometry();
    const galaxyMaterial = new THREE.PointsMaterial({
      color: 0x8866ff,
      size: 0.1,
      transparent: true,
    });
    galaxyMaterial.depthWrite = false;
    galaxyMaterial.blending = THREE.AdditiveBlending;
    galaxyMaterial.vertexColors = true;
    galaxyMaterial.alphaMap = getRandomAlphaMap();

     const galaxyVertices = [];
    const galaxyColors = [];
    const colorPalette = [
      new THREE.Color(0x4f46e5), // Indigo
      new THREE.Color(0xa855f7), // Purple
      new THREE.Color(0xec4899), // Pink
    ];

    for (let i = 0; i < 10000; i++) {
      const radius = Math.random() * 10;
      const angle = radius * 5;
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * 2;
      const z = Math.sin(angle) * radius;

      galaxyVertices.push(x, y, z);

      const colorIndex = Math.floor(Math.random() * colorPalette.length);
      const color = colorPalette[colorIndex];
      galaxyColors.push(color.r, color.g, color.b);
    }

    galaxyGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(galaxyVertices, 3)
    );
    galaxyGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(galaxyColors, 3)
    );
    galaxyMaterial.vertexColors = true;

    const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
    scene.add(galaxy);
    galaxyRef.current = galaxy;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (controlsRef.current) {
        controlsRef.current.update();
      }

      if (starsRef.current) {
        starsRef.current.rotation.y += 0.001;
      }

      if (galaxyRef.current) {
        galaxyRef.current.rotation.y += 0.001;
      }

      if (rendererRef.current && cameraRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        const aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.aspect = aspect;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
  
        // Adjust camera position for better centering on mobile devices
        if (window.innerWidth <= 768) {  // Mobile view
          cameraRef.current.position.z = 9;  // Reduce the camera Z position for closer view
        } else {
          cameraRef.current.position.z = 5;  // Default position for larger screens
        }
      }
    };
  
    // Initial call
    handleResize();
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
  
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
  
      if (sceneRef.current) {
        if (starsRef.current) {
          sceneRef.current.remove(starsRef.current);
          starsRef.current.geometry.dispose();
          (starsRef.current.material as THREE.Material).dispose();
        }
  
        if (galaxyRef.current) {
          sceneRef.current.remove(galaxyRef.current);
          galaxyRef.current.geometry.dispose();
          (galaxyRef.current.material as THREE.Material).dispose();
        }
      }
  
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
  <div
    ref={containerRef}
    className="absolute top-0 left-0 w-full h-screen pointer-events-none z-0 flex justify-center items-center"
  />
);
}
