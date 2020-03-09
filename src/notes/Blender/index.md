# Blender Notes

## Modeling

### Adding Edge Loops

We add edge loops with `Control-R`. Then we can control the way that edge loop responds to other edges by hitting `E` or `F`.

### Mirror Modifier

The Mirror modifier makes it so that you can easily create symmetry without having to worry about both sides of your mesh.

You want 4 vertices for every face of your mesh. Anything else causes trouble.

To line up vertices, scale on an axis and hit `0`.

### How to clean up boolean cuts

When you cut into a shape you no longer have 4 verts per face, so you need to clean that up. We'll use the knife tool. We cut across the newly created faces to extend our existing mesh. Then we do an edge slide to clean up what was created by the boolean and make the verts overlap. Then we remove doubles and merge any other verts that are close.

### Knife tool

Knife tool - Keyboard Shortcut `K`

To create straight lines we use `C` for constrain to angle.

### Edge Slide

If you double tap `G` when selecting verts, you'll do an edge slide.

## Removing Doubles

Select everything and Mesh -> Clean Up -> Merge By Distance. That removes any overlapping verts.

### Merging Vertices

Select the verts and hit `Alt-M`

### Quick Extrude

Select a face and hit `control - Right Click` and it'll extrude a new face to the position of your mouse.

### Deselect Vertices/Edges/Faces

`C + Middle Mouse Button`

### Making New Pieces from Existing Objects

If you're breaking geometry off of an existing object to create a new one, select the parts, hit `Shift-D` then `P` and Separate it by `Selection`.

### Moving Points Along A Face

Click the magnet icon at the top of the window, then click the arrow next to it, choosing "Snap To" -> "Face".

### Mirroring Objects

If you're mirroring one object you can hit `Ctrl + M`, or use the Mirror Modifier.

If you're mirroring a collection of objects it's better to select all and scale by `-1` on all axis.

### Working with Type

Blender doesn't use the same font system as the OS, so you need to click the folder and select the font file manually.

Once you type out text, you can right click and choose "Convert to curves" to get Bezier curves like Illustrator. In the settings for the curve, you can give them depth to get 3d text without going to polys just yet.

## Texturing

### Repeating a texture

Texture Coordinate (UV)-> (Vector) Mapping (Vector) -> (Vector) Image Texture (Color) -> (Color) BSDF

## Sculpting

## Rendering

Use Cycles for photo realism, where Eevee is a realtime rendering engine, closer to what's used in video games.

## Misc

### Using Photo References

Add it to the scene:
`Shift-A` -> `Image` -> `Reference`

Then go into Object Data Properties and choose `Side` -> `Front` so it only shows one one side.
Then uncheck "Display Perspective" so it only shows up in Orthographic views.

## Plugins

### Turnaround Camera

Select the camera. `N` for properties tab, select the object you want the camera to turn around, hit the button, then watch it rotate.

### Lily's Surface Scraper

Go to a texture site, get a material's URL, paste it into the plugin, it'll set everything up for you.

## Exporting

When exporting for use with React-Three-Fiber, we want to export in the GLTF or GLB format.
One issue I ran into was the color grading when exporting a project with Filmic tone mapping. Paul Henshel kindly provided a quick fix.

On the Canvas object in your scene:

```jsx
<Canvas onCreated={({ gl }) => {
      gl.toneMapping = THREE.ACESFilmicToneMapping
      gl.outputEncoding = THREE.sRGBEncoding}}
      >
```
