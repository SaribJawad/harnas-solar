import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

const MODEL_PATH = "/models/solar-real.glb";

function ModelDisplayPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 1, 70); // Center the camera closer to the model

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(
      canvasRef.current.clientWidth,
      canvasRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);

    // HDRI Loader
    new RGBELoader().load(
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/rosendal_plains_2_1k.hdr",
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture; // Set the HDRI as the environment map
        // scene.background = texture; // Optionally, set as the background
      }
    );

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(5, 5, 5);
    scene.add(spotLight);

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.load(
      MODEL_PATH,
      (gltf) => {
        gltf.scene.scale.set(0.5, 0.5, 0.5); // Scale down the model
        gltf.scene.position.set(-105, 0, 0); // Center the model

        scene.add(gltf.scene);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("An error occurred loading the model", error);
      }
    );

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth camera movement
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;

    // Animation loop
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative  w-full h-screen">
      <div className="absolute inset-0 z-10 p-6 pointer-events-none">
        {/* Top Section */}
        <div className="flex flex-col h-full ">
          <div className="w-full flex flex-col items-start gap-5 bg-black/30 backdrop-blur-sm">
            <div className="pointer-events-auto">
              <h1 className="text-2xl md:text-4xl font-semibold text-white mb-4">
                Solar System
              </h1>
              <ul className="text-white/80 md:text-md text-sm space-y-2">
                <li>• Drag to rotate the view</li>
                <li>• Scroll to zoom in/out</li>
              </ul>
            </div>
          </div>

          {/* Middle Section (empty to allow model interaction) */}
          <div className="flex-grow" />

          {/* Bottom Section */}
          {/* <div className="pointer-events-auto">
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg max-w-xl">
              <h2 className="text-xl md:text-xl font-semibold text-white mb-2">
                Interactive Controls
              </h2>
              <ul className="text-white/80 md:text-md text-sm space-y-2">
                <li>• Drag to rotate the view</li>
                <li>• Scroll to zoom in/out</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>

      <canvas
        ref={canvasRef}
        id="myThreeJsCanvas"
        className="w-full h-screen "
      />
    </div>
  );
}

export default ModelDisplayPage;
