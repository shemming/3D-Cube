import { Color, ColorRepresentation, Scene } from 'three';

function createScene(color: ColorRepresentation | undefined) {
  const scene = new Scene();

  scene.background = new Color(color);

  return scene;
}

export { createScene };
