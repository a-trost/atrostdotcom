---
title: Svelte Notes
tags: ["svelte", "javascript"]
---

Similar single file syntax to Vue.js.

When Svelte compiles it doesn't need to send along Svelte itself. It just creates the JS you need for the app, no extra libraries causing extra overhead. The magic happens in the compiler. 

Svelte uses single braces for its variables.

In this example we are setting the state inside the same file. 

```html
<script>
	let name = 'world';
</script>

<h1>Hello {name}!</h1>
```

The CSS gets component scoped out of the box. Seems to be similar to CSS Modules in that sense, but you get to do all your styling in one file, so that's cool.

```html
<script>
	import Nested from './Nested.svelte';
</script>

<p>These styles...</p>
<Nested/>

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
```

In the above example we're importing a component that isn't affected by the styles in this component. 

We don't need to worry about special reactivity in Svelte, the compiler seems to take care of it, so the 'setState()' kind of stuff isn't as needed.

```html
<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
```

Svelte also has its own animation transition engine built right into the framework. 


You can include HTML in Svelte in a much easier way than with React. All you need to do is put @html before it and it renders out as expected. I wonder if this `@` syntax is going to be a big part of the framework.

```html
<script>
	let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<p>{@html string}</p>
```

Note that you're still vulnerable to XSS attacks with this, it's just as dangerous as other forms of rendering HTML.

It seems like you serve static images and things from `/src/assets/`

In the official Svelte/Vite template they put the Counter component in a `/lib/` folder, which is interesting.

## Reactive Values

So there's a sort of 'computed' property in Svelte, similar to Vue. Svelte doesn't use this term, though.

It's called a reactive declaration, and they look like this:

```js
let count = 0;
$: doubled = count * 2;
```

That's valid JS and that just lets Svelte know that if anything used in that declaration changes, we need to recompute it.
You can have reactive values that depend on other reactive values.


```js
let count = 0;
$: doubled = count * 2;
$: doubledPlusOne = doubled + 1
```
I find it interesting that we're declaring a new variable but we don't need to use let or const. 

## Reactive Statements

We can also run *statements* reactively, like a console.log. It's the same syntax as the reactive values.

There's even a block syntax, where you just put a curly bracket after the `$:` and you're good to go.

```js
$: {
	console.log(`the count is ${count}`);
	alert(`I SAID THE COUNT IS ${count}`);
}
```

You can even let Svelte know that you want to rerun if statements. I think that it'll keep an eye on everything you use inside this statement.

```js
$: if (count >= 10) {
	alert(`count is dangerously high!`);
	count = 9;
}
```

## Triggering Reactivity

Svelte's reactivity is based off of assignments (using the = sign). That means that any kind of method that mutates the state of a variable won't trigger reactivity, because Svelte won't know about it. That means we need to use tricks like this:

```js
list = [...list, newItem];
```

array methods like `push`, `splice`, `pop`, `shift`, etc won't trigger reactivity without you doing the `list = list` bit.

Same goes for updating specific parts of an object or list. 

```js
const person = {age: 20}
// This won't trigger reactivity
person[age] = 30;
// But this will
person = person
```

## Props 