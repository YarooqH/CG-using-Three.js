import * as THREE from './js/three.module.js'
import { OrbitControls } from './js/OrbitControls.js'

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 200 );
camera.lookAt( 0, 0, 0 );

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 1;
controls.maxDistance = 20;

const scene = new THREE.Scene();

// function to generate random number between two numbers

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const material = new THREE.LineBasicMaterial({
  color: 'pink',
  scale: 1,
  dashSize: 2,
  gapSize: 1,
});


// function a(x, y) {
  
//   line.computeLineDistances();
//   scene.add(line);
//   renderer.render( scene, camera );
//   setInterval(b, 1000);
// }
// function b() {
//   scene.clear();
//   renderer.render( scene, camera );

// }

// for (let x = -100, y = 5; x < 100; x+=4) {
//   c(x,y);
// }

// function c(x, y){
//   setInterval(function(){ a(x, y); }, 1000);
// }


function animate() {
    requestAnimationFrame( animate );
    const points = [];

    points.push(new THREE.Vector3(0, 7, 0));
    points.push(new THREE.Vector3(-2.6, 1, 0));

  // points.push(new THREE.Vector3(15, 5, 0));
  // points.push(new THREE.Vector3(15, 0, 0));
  
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    // const line = new THREE.LineSegments(geometry, material);

    var raindrop=[];
    var rainCount = 50;

    for(let i=0; i<=rainCount;i++){
        raindrop.push(new THREE.Line(geometry, material));
        
        scene.add(raindrop[i]);
        
        let posi= getRandomInt(-50,50);
        let posi1=getRandomInt(-80,80);
        
        raindrop[i].position.set(posi1,posi,0);

    }

    renderer.render(scene, camera);   

    for(let i=0; i<=rainCount;i++){
        scene.remove(raindrop[i])
    }
    // renderer.render( scene, camera );
};

animate();