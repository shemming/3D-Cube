import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // FOV = Field Of View
    window.innerWidth / window.innerHeight, // Aspect ratio
    1, // Near clipping plane
    500 // Far clipping plane
  );

  // Move the camera back so we can view the scene
  camera.position.y = 5;
  camera.position.z = 10;

  return camera;
}

export { createCamera };
