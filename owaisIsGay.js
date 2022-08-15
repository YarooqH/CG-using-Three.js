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

const curve = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	0.5, 0.7,           // xRadius, yRadius
	0,  1 * Math.PI,  // aStartAngle, aEndAngle
	true,            // aClockwise
	5                 // aRotation
);

const points = curve.getPoints( 100 );
const geometry1 = new THREE.BufferGeometry().setFromPoints( points );

const material1 = new THREE.LineBasicMaterial( { color: 'white' } );
const ellipse = new THREE.Line( geometry1, material1 );

scene.add( ellipse );

ellipse.scale.set(0.5,0.5,0);

const curve1 = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	0.5, 0.7,           // xRadius, yRadius
	0,  1 * Math.PI,  // aStartAngle, aEndAngle
	true,            // aClockwise
	5                 // aRotation
);

const points1 = curve1.getPoints( 100 );
const geometry11 = new THREE.BufferGeometry().setFromPoints( points1 );

const material11 = new THREE.LineBasicMaterial( { color: 'white' } );

const ellipse1 = new THREE.Line( geometry11, material11 );

scene.add( ellipse1 );

ellipse1.scale.set(0.3,0.3,0);

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();