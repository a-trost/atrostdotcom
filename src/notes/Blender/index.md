# Blender Notes

## Modeling

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

Select everything and hit `W` and select "Remove Doubles". That removes any overlapping verts.

### Merging Vertices

Select the verts and hit `Alt-M`
