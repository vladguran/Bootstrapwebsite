import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
new OrbitControls( camera, renderer.domElement );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 30;
camera.position.y = 10;

const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
	'./Hintergrund.jpg',
	'./Hintergrund.jpg',
	'./Hintergrund.jpg',
	'./Hintergrund.jpg',
	'./Hintergrund.jpg',
	'./Hintergrund.jpg',
]);
scene.background = texture;

var roboter;

const gloader = new GLTFLoader();
gloader.load("Roboterarm2.gltf",  (gltf) => {
	roboter = gltf.scene;
	scene.add(roboter);
	animate();
} );

const light = new THREE.AmbientLight( 0x404040, 3); 
scene.add( light );

const directLight = new THREE.DirectionalLight( 0xffffff, 2);
scene.add( directLight );


function animate() {
	requestAnimationFrame( animate );
	roboter.rotation.y += 0.01;
	renderer.render( scene, camera );
}