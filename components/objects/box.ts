import {
  PlaneGeometry,
  MeshLambertMaterial,
  Mesh,
  TextureLoader,
  BoxGeometry,
  MeshBasicMaterial,
  ColorRepresentation,
} from 'three';

export default function createBox(props: { color: ColorRepresentation }) {
  const geometry = new BoxGeometry(1, 1, 1);

  const material = new MeshLambertMaterial({
    color: props.color,
  });

  const box = new Mesh(geometry, material);
  box.rotation.x -= Math.PI * 0.35;

  return box;
}
