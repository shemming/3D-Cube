import * as THREE from 'three';

const setSize = (
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer
) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

class Resizer {
  constructor(camera: any, renderer: any) {
    // Set initial size on load.
    setSize(camera, renderer);
    window.addEventListener(
      'resize',
      () => {
        // Set the size again if a resize occurs.
        setSize(camera, renderer);
        // Perform any custom actions.
        this.onResize();
      },
      false
    );
  }
  onResize() {}
}
export { Resizer };
