// import * as THREE from 'three';
import * as THREE from 'three';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
// import { OrbitControls } from 'OrbitControls.js';


const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 0);
camera.lookAt( 0, 0, 0 );

// const fpc = THREE.FirstPersonControls( camera, document.documentElement );

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 1;
controls.maxDistance = 20;

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: '#f3da69' });
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

const mat = new THREE.LineBasicMaterial({ color: 'pink' });
const points = [];
// points.push(new THREE.Vector2(-, 0));
points.push(new THREE.Vector2(-5,-10));
points.push(new THREE.Vector2(-5, 10));
points.push(new THREE.Vector2(5, -10));
points.push(new THREE.Vector2(5, 10));

const geo = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geo, mat);
scene.add(line);

// const cloud = new THREE.Group();

const cloudGeometry = new THREE.CircleGeometry( 0.5, 32 );
const cloudMaterial = new THREE.MeshBasicMaterial( { color: '#f3da69' });
const cloud = new THREE.Mesh( cloudGeometry, cloudMaterial );
scene.add( cloud );


// const geometry1 = new THREE.CircleGeometry( 1, 32 );
// const material1 = new THREE.MeshBasicMaterial( { color: 'white' } );
// const circle = new THREE.Mesh( geometry1, material1 );
// scene.add( circle );
// circle.position.set(0,5,0);


// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

// const obj = new THREE.Object3D.add(cube, circle);
// scene.add(obj)


camera.position.z = 20;

function animate() {
  requestAnimationFrame( animate );

  // cube.rotation.x += 0.03;
  // cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();