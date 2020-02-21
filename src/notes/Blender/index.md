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


## Texturing

### Repeating a texture

Texture Coordinate (UV)-> (Vector) Mapping (Vector) -> (Vector) Image Texture (Color) -> (Color) BSDF

## Sculpting


## Rendering



## Plugins

### Turnaround Camera

Select the camera. `N` for properties tab, select the object you want the camera to turn around, hit the button, then watch it rotate.

### Lily's Surface Scraper

Go to a texture site, get a material's URL, paste it into the plugin, it'll set everything up for you.

