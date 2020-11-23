# ThreeJS Notes

I started learning through React-Three-Fiber, but found myself held back because I don't know ThreeJS. Time to learn it fully. I already know a decent amount of basics, so these notes will be anything I learn from this point on, not a full dictation of ThreeJS.


## Materials

You can make a MultiMaterialObject with an array of materials.

```js
var multiMaterial = [ darkMaterial, wireframeMaterial ];
var sphere = THREE.SceneUtils.createMultiMaterialObject(
		sphereGeom.clone(), multiMaterial );
```

## Textures

To load in textures, we use the `TextureLoader` constructor. You call `load()` with the string of a URL. All textures are transparent until loaded in.

ThreeJS comes with a `LoadingManager` that can handle the loading of all your assets.

```js
const loadManager = new THREE.LoadingManager();
const loader = new THREE.TextureLoader(loadManager);
```




## Geometry

You can copy geometry by using `clone()`, but I'm not sure the benefits of that exactly. [In these examples](view-source:https://stemkoski.github.io/Three.js/Wireframe.html), Stemkoski does it often.

## Mesh


Putting Mesh into an array allows us to loop through it later and easily animate or change it in the render function.
```js
  const cubes = [
    makeInstance(geometry, 0x44aa88,  0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844,  2),
  ];
```

## Responsive Design

The canvas on its own will always default to 300x150 in size.

On a project I set up myself I was getting a stretching issue where my 'square' was scaling with the window. We can fix that distortion by adding this to the render function:

```js
  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
```
This reads the Canvas DOM element and sets the proper aspect ratio of the Camera. Then we tell the camera that it needs to update.

To solve the low-resolution issue, we need to set the canvas's number of (intrinsic) pixels to the right number.

```js
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false); // Pass false to leave the CSS Size alone
  }
  return needResize;
}
```

We want to check and make sure the canvas isn't already the right size before resizing it.
We also need to pass `false` to `renderer.setSize()` so that it leaves the CSS size (Extrinsic) of the canvas alone.


## Camera Stuff

The `lookAt` function points the camera at whatever position you pass it (x,y,z)

We can attach cameras directly to objects by adding them just like we would mesh.
```js
  const turretCamera = makeCamera();
  turretCamera.position.y = .75 * .2;
  turretMesh.add(turretCamera);
```

We can rotate through an array of cameras by passing that camera to the render function. Whatever camera is passed to `render()` is the camera that's rendered with. Makes sense.

```js
    const camera = cameras[time * .25 % cameras.length | 0];
    infoElem.textContent = camera.desc;

    renderer.render(scene, camera.cam);
```


## The Scene Graph

You need to be aware of heirarchy when dealing with ThreeJS objects. [In the example](https://threejsfundamentals.org/threejs/lessons/threejs-scenegraph.html) they use a sun/earth/moon relationship. The earth orbits the sun, the moon orbits the earth. When you add the earth to the sun as a child, it will then spin when the sun spins.

The caveat is that if you scale the Sun, all children will also scale up.

To fix this sort of thing you can create an empty scene graph node.

`Object3D` is in the scene graph but has no material or geometry, it's just a local space.

This is an interesting setup:
```js
const solarSystem = new THREE.Object3D();
scene.add(solarSystem);
objects.push(solarSystem);

const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});
const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
sunMesh.scale.set(5, 5, 5);
solarSystem.add(sunMesh);
objects.push(sunMesh);

const earthMaterial = new THREE.MeshPhongMaterial({color: 0x2233FF, emissive: 0x112244});
const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
earthMesh.position.x = 10;
solarSystem.add(earthMesh);
objects.push(earthMesh);
```

We end up adding all three items to the `objects` array, which we then loop through and rotate. This means the solar system will rotate on its axis, the sun will rotate on its own axis, and the earth rotates on its own axis. Because both the sun and earth are part of the solar system, they will be spun on that axis as well.

Furthermore, the Earth doesn't catch any of the changes from the Sun, like its 5x scale.

They take it a step further now when we want to add the moon to rotate the earth. We don't want the moon getting the scale of the Earth, so we need to create an earthOrbit `Object3D` and add both the earth and moon mesh to it.

```js
const earthOrbit = new THREE.Object3D();
earthOrbit.position.x = 10;
solarSystem.add(earthOrbit);
objects.push(earthOrbit);
```


### Helpers

Just like light helpers, the axis helper makes things visible so creating is easier.

```js
// add an AxesHelper to each node
objects.forEach((node) => {
  const axes = new THREE.AxesHelper();
  axes.material.depthTest = false; // Doesn't check if it's drawing behind anything
  axes.renderOrder = 1; // It gets drawn last. Kind of a z-index
  node.add(axes);
});
```

Colors for axes:
Red - X
Green - Y
Blue - Z


#### GridHelper

```js
function makeAxisGrid(node, label, units) { //default units is 10
  const helper = new AxisGridHelper(node, units);
  gui.add(helper, 'visible').name(label);
}

makeAxisGrid(solarSystem, 'solarSystem', 25);
makeAxisGrid(sunMesh, 'sunMesh');
makeAxisGrid(earthOrbit, 'earthOrbit');
makeAxisGrid(earthMesh, 'earthMesh');
makeAxisGrid(moonMesh, 'moonMesh');
```

### Moving objects on paths

There's a clever way to move objects around a curve, rotating the object the right way, like a car on a road. First we create a curve.

```js
  // Create a sine-like wave
  const curve = new THREE.SplineCurve( [
    new THREE.Vector2( -10, 0 ),
    new THREE.Vector2( -5, 5 ),
    new THREE.Vector2( 0, 0 ),
    new THREE.Vector2( 5, -5 ),
    new THREE.Vector2( 10, 0 ),
    new THREE.Vector2( 5, 10 ),
    new THREE.Vector2( -5, 10 ),
    new THREE.Vector2( -10, -10 ),
    new THREE.Vector2( -15, -8 ),
    new THREE.Vector2( -10, 0 ),
  ] );
```
Then in the render function we move the tank along the curve. We use a percentage of the curve to determine where the tank is, and the next point with `lookAt`.

```js
    // move tank
    const tankTime = time * .05;
    curve.getPointAt(tankTime % 1, tankPosition);
    curve.getPointAt((tankTime + 0.01) % 1, tankTarget);
    tank.position.set(tankPosition.x, 0, tankPosition.y);
    tank.lookAt(tankTarget.x, 0, tankTarget.y);
```


