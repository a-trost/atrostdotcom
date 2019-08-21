# SVG Animation

These notes were mostly created when reading SVG Animation by Sarah Drasner.

## Basics

SVG stands for Scalable Vector Graphics
They're in a XML file format

SVG paths have `d` for data, and always start with `d="M..."` for moveTo

### Path Syntax

```
**LINE COMMANDS
M				moveTo				Start of the path
L 			lineTo				Draws a line to a point
H				Horizontal line from current position
V				Vertical line from current position
Z				Joins to the nearest M, closes the path
**CURVE COMMANDS
C				Cubic Bezier				(Half S)
S				Reflecting Cubic Bezier 	(S)
Q				Quadratic Bezier - both sides share the same control point
T				Command control point that's been reflected
A				Elliptical Arc
```

You group SVG elements with `<g>`

You can give any of the elements a CSS class or ID, just like HTML. Like normal CSS, inline styles will always beat out class-given styles. If you want to do something like change the fill color of an element, make sure you remove any fill colors from the inline SVG elements.

## Chapter 5: UI/UX Animations with No External Libraries

We don't actually look all over images. We look at things in _saccades_ and create mental images of them. That's the little eye twitching when you look back and forth.

### Methods of Animation

Don't overuse animations - they can get distacting.

Drasner's good example here: https://codepen.io/sdras/full/qOdwdB

#### Morphing

Morphing is when one element becomes multiple other things. On click, a button can shrink into a circle and display a check to show it was successful. This is really good for keeping context. Jumping from page to page without any transition can be jarring for the user. But if the elements morph in logical ways, it can make the UX nice and smooth.

SVG and CSS can do this. GreenSock's MorphSVG plugin is really good for this, Drasner says. Chapter 10 has more.

#### Revealing

Drasner says that things like typical modals break the context of where the information 'lives' and can confuse users. Something like this: https://codepen.io/sdras/full/yOjWdO where you can see where the modal comes from and returns to, allows for the user to have more spatial awareness.

#### Isolation

Removing extra noise can help users understand what the page is about as well as make decisions easier. Remember: More isn't better. Users don't do well with a ton of options. Simplify things, present less on the page, and when you need multiple things like here: https://codepen.io/sdras/full/qOdWEP you can use things like hover states to help users isolate parts of the page.

This is also isolating the steps of a form into its parts instead of putting the entire thing on one page.

#### Style

The ease that you choose for animations communicates things about your brand. Fun brands can have fun, bouncy transitions. Serious brands should have simpler transitions. Some resources for eases:

- CSS: http://cubic-bezier.com/ and http://easings.net
- GSAP: http://greensock.com/ease-visualizer
- React-Motion: http://bit.ly/2mH7nvT

#### Accents in Eases

Drasner recommends that in the same way you use an accent color to draw attention to things, you can use an accent ease that is different from your standard `ease-in-out` to draw attention to something.

#### Anticipatory Cues

Animation can help users feel like the task didn't take as much time as it actually did. When there are no animations or indications while waiting, users over-estimate the wait time by 36%.

You can use anticipation states for things like loading states, or waiting for the login to get rejected/accepted, or data getting saved.

These custom loading states can make the app feel like it performs better than it does.

#### Interaction

You want users to actually use your app and get a tactile, real world feel for it if possible. Drasner gives examples of dragging files to a 'bottom' drawer so that users know where their files are in the space of your app. Of course, they're not actually there, but it's helpful for users.

https://tympanus.net/Development/DragDropInteractions

#### Space Conservation

Hiding things away by using animation is useful. Think of the hamburger menus that unfold to show multiple options. Saves space on small devices.

### Pulling it all Together

Now we'll be building out an SVG icon that transforms.

Make sure these kinds of animations are subtie, not too long or flashy or distracting. Think about what you're trying to do for the user, not how you're showing off. Keep it between 0-300ms.

If it's something they see all the time, don't make it obnoxious after the 5th time seeing it.

To make animations where objects transform from one thing to the next, we start with transforming the items with zero or neutral properties that don't change the object. Like this:

```css
.magnifier {
  line {
    transform: rotate(0deg) translateY(0px);
  }
  clrcle {
    transform: scale(1);
  }
}
```

Then you can just use transforms, if you're going from point A to point B.

You can use Javascript's `Element.setAttribute()` to change SVG.

Drasner says that `ease-out` functions are great for enterances, and `ease-in` is great for exits.

Using `transform-origin: 50% 50%;` seems to be about the same as `center center` but I could be wrong on that.

**QuickTip:** There are issues across browsers with animating SVGs, but GreenSock clears up a lot of those cross browser issues for you.

## Chapter 6: Animating Data Visualizations

Recommends [Chartist](https://gionkunz.github.io/chartist-js/) and [D3](https://d3js.org/). Chartist doesn't seem to be kept up with lately.

We can use animation in Data-Viz with:

- Filtering
- Reordering
- Storytelling
- Showing change over time
- Staggering pieces for clarity

Filtering can show what you want to talk about while retaining context.

Links to a video on [Storytelling in Data Viz](https://www.youtube.com/watch?v=cmmjTLCyqlY)

## Chapter 8: Animating with GreenSock

Using a library called GreenSock that makes animating with SVG much easier.

You can get the library at `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js` or with `npm install gsap`

First bit of GreenSock code:

```javascript
TweenMax.to(".element", 2, { x: 100 });
```

### TweenMax basics

`TweenMax` is the library we're bringing in, and can be swapped out for `TweenLite` if we're using the smaller bundle.

`TweenMax` has loops, CSS properties, and TimelineMax library.

`.to` is what tells the element where to go. You also have:
`.from` and `.fromTo`.

`.fromTo` is pretty useful for making sure retriggers work well, especially with relative changes. Here's `.fromTo`:

```javascript
TweenMax.fromTo(".element", 2, {
	x: 0
}, {
	  x: 100
});
}
})
```

### Staggering

We can also use `.staggerTo`, `.staggerFrom`, or `.staggerFromTo`.

This gives the nice cascade that we get when we fire animations after one another, rather than all together.

```javascript
TweenMax.staggerFromTo(
  ".element circle",
  2,
  {
    x: 0
  },
  {
    x: 100
  },
  0.1
);
```

These functions take the element as the first argument, the duration as the second, then an object with the properties we're changing as the third. If there's a `FromTo` it'll take two objects.

### Easing

To add Easing, just add another property to the javascript object. `ease: Sine.easeOut`.

Remember, it's counter intuitive for which ease is best for which situation. `EaseOut` is better for enterances. `EaseIn` is better for exits. That's because the `out` in `EaseOut` refers to the end of the animation. It's quick to start and slow to end. Then you want to reverse that, and get the object off the page quick.

## Chapter 9: GreenSock's Timeline

To have one animation fire after the last, you use `TimelineMax()`

Makes it really easy to order animations one after another. You can have multiple timelines going and firing at the same time to create more randomized animations. 

If you want something to move slightly before another thing is done, use *relative incrementation*. 

```javascript
tl.to(".pinball .plunger", 3, {y:200,ease: Sine.easeIn})
  .to(".pinball .plunger", .2, {y:0, ease: Sine.linear})
  .to(".pinball .ball", 1, {y:-200, ease: Sine.linear}, "-=1")
  .to(".pinball .ball", 2, {})
  .to(".pinball .ball", 1.5, {y:0, ease: Sine.easeOut})
```

The little "-=1" there is what makes it start 1 second before it normally would, when the previous command ends. The next one still starts when this one finishes, it doesn't throw off the full chain. 

### Relative Label

If you want multiple animations to fire after one finishes, use a *relative label*.

`tl.add("burst")` creates the relative label `burst`.

Then on our elements we just put `"burst"` as the last argument in our `tl.to()` function.

We can use this to refer to the specific animation.

### Nested and Master Timelines

Drasner recommends using timelines rather than tossing a bunch of animations into global scope. It makes working with scenes much easier.

```javascript
function sceneOne() {
  var tl = new TimelineMax();
    tl.add("begin");
    tl.to(".bubble", 2, {
      scale:3,
      opacity: 0.5,
      rotation: 90,
      ease: Circ.easeOut  
      }, "begin");
      ...
      return tl;
}

var master = new TimelineMax();
master.add(sceneOne(), "scene1");
```

Let's break that down. Create a scene function, make a `TimelineMax` instance inside that, then add a relative label `th.add("begin")` like when we added `"burst"` before. 

### Yoyos and Loops

I went ahead of the book a little and picked up some of this stuff to complete some animation tasks I did. There are a couple gotchas with these.

We add `repeat` and `yoyo` to our object, just like with `scale`, `rotation`, etc. 

For loops we just add `repeat:-1` to make it loop forever. Any other number will repeat that number of times. Default is `0`.

We add `yoyo: true` if we want the animation to go forwards, backwards, forwards, etc.

For `yoyo` it's helpful to use `fromTo()` as well as an `easeInOut` if you want it to seem pretty seamless. 

### Using Random with Animations

You can have a random value for your rotation animation by using `rotation: Math.random() * 360`. Lots of other places you can put that. 

### Function Callbacks

We can use callbacks at different times in the animation to trigger something else. 

Here's a callback with a random effect.

```javascript
function _flyBy(el) {
  TweenMax.to(el, amt, {
    x: Math.random() * 400 - 200,
    rotation: Math.random() * 360,
    onComplete: _flyBy,
    onCompleteParams: [el]
  });
}
```