// import * as THREE from 'three';
import * as THREE from 'three';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';

// const dat = require('dat.gui');
// import { OrbitControls } from 'OrbitControls.js';

// import * from 'three-dat.gui'; // Import initialization method
// init(Dat);
// var gui = new Dat.GUI();


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

// const mat = new THREE.LineBasicMaterial({ color: 'pink' });
// const points = [];
// // points.push(new THREE.Vector2(-, 0));
// points.push(new THREE.Vector2(-5,-10));
// points.push(new THREE.Vector2(-5, 10));
// points.push(new THREE.Vector2(5, -10));
// points.push(new THREE.Vector2(5, 10));

// const geo = new THREE.BufferGeometry().setFromPoints(points);

// const line = new THREE.Line(geo, mat);
// scene.add(line);

// const cloud = new THREE.Group();
const cloudClr = '#686564';

// gui.addMaterial('material', cloudClr);

const cloudGeometry = new THREE.CircleGeometry( 0.5, 32 );
const cloudMaterial = new THREE.MeshBasicMaterial( { color: cloudClr });
const cloud = new THREE.Mesh( cloudGeometry, cloudMaterial );
// scene.add( cloud );

const minicloud1 = new THREE.Mesh(
  new THREE.CircleGeometry( 0.52, 32),
  new THREE.MeshBasicMaterial({ color: cloudClr })
);
minicloud1.position.set(0.5,0.1,0);

const minicloud2 = new THREE.Mesh(
  new THREE.CircleGeometry( 0.52, 32),
  new THREE.MeshBasicMaterial({ color: cloudClr })
);
minicloud2.position.set(1,0.05,0);

const minicloud3 = new THREE.Mesh(
  new THREE.CircleGeometry( 0.52, 32),
  new THREE.MeshBasicMaterial({ color: cloudClr })
)
minicloud3.position.set(1.5,0.05,0);

const minicloud4 = new THREE.Mesh(
  new THREE.CircleGeometry( 0.59, 32),
  new THREE.MeshBasicMaterial({ color: cloudClr })
)
minicloud4.position.set(0.5,-0.5,0);

const minicloud5 = new THREE.Mesh(
  new THREE.CircleGeometry( 0.59, 32),
  new THREE.MeshBasicMaterial({ color: cloudClr })
)
minicloud5.position.set(1.2,-0.4,0);

const cloudGrp = new THREE.Group();
cloudGrp.add(minicloud1, minicloud2, minicloud3, minicloud4, minicloud5, cloud);
scene.add(cloudGrp);
cloudGrp.position.set(-3,0,0);




// const geometry1 = new THREE.CircleGeometry( 1, 32 );
// const material1 = new THREE.MeshBasicMaterial( { color: 'white' } );
// const circle = new THREE.Mesh( geometry1, material1 );
// scene.add( circle );
// circle.position.set(0,5,0);


// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

// const obj = new THREE.Object3D.add(cube, circle);
// scene.add(obj)


camera.position.z = 10;

function animate() {
  requestAnimationFrame( animate );

  // cube.rotation.x += 0.03;
  // cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();