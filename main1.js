import * as THREE from './js/three.module.js';
import { OrbitControls } from "./js/OrbitControls.js";
import {initializeDomEvents} from "./js/threex.domevents.js";
import * as TWEEN from './js/tween.esm.js';

const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 500 );
camera.position.set( 0, 0, 10);
camera.lookAt( 0, 0, 100 );

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 1;
controls.maxDistance = 20;

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: '#f3da69' });
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// const geometry = 
// const material = 
const ring0 = new THREE.Mesh( new THREE.RingGeometry( 4.5, 4.6, 64 ), new THREE.MeshBasicMaterial( { color: '#ff1419', side: THREE.DoubleSide }) );

const ring1 = new THREE.Mesh( new THREE.RingGeometry( 4.5, 4.6, 64 ), new THREE.MeshBasicMaterial( { color: '#fda016', side: THREE.DoubleSide }) );
ring1.scale.set(0.97,0.97,0)
// ring1.material.color.setHex(0xff10200)

const ring2 = new THREE.Mesh( new THREE.RingGeometry( 4.5, 4.6, 64 ), new THREE.MeshBasicMaterial( { color: '#fdfa15', side: THREE.DoubleSide }) );
ring2.scale.set(0.94,0.94,0)

const ring3 = new THREE.Mesh( new THREE.RingGeometry( 4.5, 4.6, 64 ), new THREE.MeshBasicMaterial( { color: '#76d442', side: THREE.DoubleSide }) );
ring3.scale.set(0.91,0.91,0)

const ring4 = new THREE.Mesh( new THREE.RingGeometry( 4.5, 4.6, 64 ), new THREE.MeshBasicMaterial( { color: '#00acf2', side: THREE.DoubleSide }) );
ring4.scale.set(0.88,0.88,0)

const ring5 = new THREE.Mesh( new THREE.RingGeometry( 4.5, 4.6, 64 ), new THREE.MeshBasicMaterial( { color: '#0973bd', side: THREE.DoubleSide }) );
ring5.scale.set(0.85,0.85,0)

const ring6 = new THREE.Mesh( new THREE.RingGeometry( 4.5, 4.6, 64 ), new THREE.MeshBasicMaterial( { color: '#67318e', side: THREE.DoubleSide }) );
ring6.scale.set(0.82,0.82,0)

scene.add( ring0, ring1, ring2, ring3, ring4, ring5, ring6 );




// cube.position.x = -5;


function animate(t) {
    // TWEEN.update();
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();