import { createCamera } from '~/components/camera';
import { createScene } from '~/components/scene';
import { createRenderer } from '~/systems/renderer';
import { Resizer } from '~/systems/resizer';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import createBox from './box';

// These variables are module-scoped: we cannot access them
// from outside the module.
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;

class World {
  constructor(container: any) {
    // Instances of camera, scene, and renderer
    camera = createCamera();
    scene = createScene(0xdddddd);
    renderer = createRenderer();

    container.append(renderer.domElement);

    // RESIZER
    const resizer = new Resizer(camera, renderer);
    resizer.onResize = () => {
      this.render();
    };

    // LIGHT
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0.5, 1.0, 0.5).normalize();

    scene.add(light);

    // GRID
    const grid = new THREE.GridHelper(50, 50, 0xffffff, 0x333333);
    scene.add(grid);

    // BOX
    let box = createBox({
      color: 'green',
    });

    scene.add(box);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', this.render);
    controls.update();

    // ANIMATION LOOP
    function animate() {
      requestAnimationFrame(animate);

      box.rotation.x += 0.01;
      box.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  }
  render() {
    // Draw a single frame
    renderer.render(scene, camera);
  }
}
export { World };
