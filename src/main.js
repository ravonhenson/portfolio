import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const edges = new THREE.EdgesGeometry(geometry);
const material = new THREE.LineBasicMaterial({ 
  color: 0xffffff,
  linewidth: 1
});

const line = new THREE.LineSegments(edges, material);
scene.add(line);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  line.rotation.x += 0.01;
  line.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();