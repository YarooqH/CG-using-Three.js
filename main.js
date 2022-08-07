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
// scene.add(cloudGrp);
cloudGrp.position.set(-3,0,0);

const cloud2 = cloudGrp.clone();
// scene.add( cloud2 );
cloud2.scale.set(1.1,1.1, 0);
cloud2.position.set(-1,0.6,0);

const cloud3 = cloudGrp.clone();
// scene.add( cloud3 );
cloud3.scale.set(1.5,1.5, 0);
cloud3.position.set(-3,1.2,0);

const cloudGroup2 = new THREE.Group();
cloudGroup2.add(cloudGrp, cloud2, cloud3);
// scene.add(cloudGroup2);
cloudGroup2.position.set(-4.29,1.95,0);
cloudGroup2.scale.set(0.7,0.7,0);


const cloudGroup3 = cloudGroup2.clone();
// scene.add( cloudGroup3 );
cloudGroup3.scale.set(0.7,0.7, 0);
// cloudGroup3.rotation.y += 250;
cloudGroup3.rotateZ(3.2);
cloudGroup3.position.set(-5.6,2.5,0);

const cloudGrpLeft = new THREE.Group();
cloudGrpLeft.add(cloudGroup2, cloudGroup3);
scene.add(cloudGrpLeft);
cloudGrpLeft.position.set(-0.85,0.3,0);
// cloudGrpLeft.

const cloudGroup4 = cloudGrpLeft.clone();
// scene.add( cloudGroup4 );
cloudGroup4.position.set(3.1,0.3,0);

const cloudGroup5 = cloudGrpLeft.clone();
// scene.add( cloudGroup5 );
cloudGroup5.position.set(5,0.3,0);



const cloudLeft = new THREE.Group();
cloudLeft.add(cloudGroup4, cloudGroup5);
scene.add(cloudLeft);



const cloudRight = cloudLeft.clone();
scene.add(cloudRight);
cloudRight.position.set(5,0.3,0);

cloudLeft.scale.set(1.2,1.2,0);
cloudRight.scale.set(1.2,1.2,0);


// cloudLeft.position.set(-0.6,0,0);

// Create a texture loader so we can load our image file
var loader = new THREE.TextureLoader();

// Load an image file into a custom material
var imgMaterial = new THREE.MeshLambertMaterial({
  map: loader.load('./assets/background.jpg')
});

// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
var imgGeometry = new THREE.PlaneGeometry(15, 10*.75);

// combine our image geometry and material into a mesh
var mesh = new THREE.Mesh(imgGeometry, imgMaterial);

// set the position of the image mesh in the x,y,z dimensions
mesh.position.set(0,0,-0.3)

// add the image to the scene
scene.add(mesh);

let lightIntensity = 1;

// Add a point light with #fff color, .7 intensity, and 0 distance
var light = new THREE.PointLight( 0xffffff, lightIntensity , 0 );

// Specify the light's position
light.position.set(1, 1, 100 );

// Add the light to the scene
scene.add(light)





// const geometry1 = new THREE.CircleGeometry( 1, 32 );
// const material1 = new THREE.MeshBasicMaterial( { color: 'white' } );
// const circle = new THREE.Mesh( geometry1, material1 );
// scene.add( circle );
// circle.position.set(0,5,0);


// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

// const obj = new THREE.Object3D.add(cube, circle);
// scene.add(obj)


camera.position.z = 3.5;

function animate() {
  requestAnimationFrame( animate );

  // cube.rotation.x += 0.03;
  // cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();