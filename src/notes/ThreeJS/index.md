# Three JS and React-Three-Fiber

These are learning notes while learning 3d stuff on the web, primarily through React-Three-Fiber which is a React renderer for Threejs.

The basic things that every ThreeJS project needs:

- Scene
- Camera
- Renderer
- Mesh
  _ Geometry
  _ Material

When using ThreeJS that basic setup looks like this:

```javascript
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

But Three-Fiber gives us the renderer as a default so we don't need to worry about it. It also provides a default perspective camera, scene, and wrapping container. Much more batteries-included.

```javascript
import { Canvas, useFrame } from "react-three-fiber";

ReactDOM.render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>,
  document.getElementById("root")
);
```

Like the rest of React, it's declarative, so we don't need to worry about the implementation details like the vanilla version.

Canvas fills its bounding box, so if we want the scene to fill the viewport we need to set that on the element it's being injected into.

ThreeJS has a bunch of [built in primitive types](https://threejsfundamentals.org/threejs/lessons/threejs-primitives.html) that can get you a lot of great results. Still, I think I'll be creating custom things in Blender or Maya and importing them.


### Lerp
A lot of these examples are using the library [Lerp](https://github.com/mattdesl/lerp), which is a linear interpolation function. 

`lerp(start, end, alpha)`

> Interpolates from start to end using the given alpha. 

This seems to mean that given two points it finds the middle point.


## Shaders

Shaders are essentially small programs using the language GLSL (Shader Language). Bit more like C than JS.

```GLSL
// Default floating point precision
precision highp float; // We always have this

// Inputs - vec2 is a type. Also will use vec2, vec3, vec4
varying vec2 vUv
```

`varying` means the color is not the same across the surface. Not solid blue, but changing.

`vUv` is a UV coordinate

## Resources

[Recipes](https://github.com/react-spring/react-three-fiber/blob/master/recipes.md)
