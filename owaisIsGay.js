import * as THREE from './js/three.module.js'
import { OrbitControls } from './js/OrbitControls.js'

const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 500, 1000 );
camera.position.set( 0, 0, 1);


const scene = new THREE.Scene();
scene.background = new THREE.Color( 'black' );
scene.fog = new THREE.Fog( 0xffffff, 0.015, 500 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}
)

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 1;
controls.maxDistance = 20;

const geometry = new THREE.PlaneGeometry( 0.45, 1 );
const material = new THREE.MeshBasicMaterial( { color: 'white' });
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.set(1.155,0,0)

const greenSide = new THREE.PlaneGeometry(1.25,1);
const greenMaterial = new THREE.MeshBasicMaterial( { color: '#76d442' });
const green = new THREE.Mesh( greenSide, greenMaterial );
// green.position.set(0.75,0,0);
scene.add(green);

const flagCloth = new THREE.Group();
flagCloth.add(cube, greenSide);
scene.add(flagCloth);

flagCloth.position.set(-2,0,0);

// make crescent shape
const crescent = new THREE.Shape();
crescent.moveTo( 0, 0 );
crescent.absarc( 0, 0, 0.45, 0, Math.PI * 12 );
const crescentGeometry = new THREE.ShapeGeometry( crescent );
const crescentMaterial = new THREE.MeshBasicMaterial( { color: 'white' });
const crescentMesh = new THREE.Mesh( crescentGeometry, crescentMaterial );
crescentMesh.position.set(0,0,0.1);
// scene.add(crescentMesh);

// make half moon

const halfMoon = new THREE.Shape();
halfMoon.moveTo( 0, 0 );
halfMoon.absarc( 0, 0, 0.45, 0, Math.PI * 12 );
const halfMoonGeometry = new THREE.ShapeGeometry( halfMoon );
const halfMoonMaterial = new THREE.MeshBasicMaterial( { color: 'white' });
const halfMoonMesh = new THREE.Mesh( halfMoonGeometry, halfMoonMaterial );
halfMoonMesh.position.set(0,0,0.1);
scene.add(halfMoonMesh);


function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();


// this is all boilerplate code