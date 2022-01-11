import './style.css'

import * as THREE from 'three';

import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

// FOV, Aspect Ratio, (View Frustum)*2
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene,camera);







const moiTexture = new THREE.TextureLoader().load('moi.png');

const geometry = new THREE.SphereGeometry(10,32,32);
const material = new THREE.MeshBasicMaterial({
  map: moiTexture
});
const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10,10,10);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight,ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200,50);
// scene.add(lightHelper,gridHelper);


const controls = new OrbitControls(camera, renderer.domElement);





const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;




// Function called every animation frame
function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}


animate();