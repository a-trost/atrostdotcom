# State Management

_Notes on the FrontEnd Masters course "State Management in Pure React, v2_

Different kinds of state
Model data - The actual facts like # sales made
View/UI state - sorting in a table
Session state - user logged in?
Communication - Are we fetching something?
Location - where are we in the app?

Or if you boil it down, just 2:
Model State
"Ephemeral state" - anything that gets wiped away when the session ends. Inputs in a search field, the ordering of a table, etc.

## this.setState()

Why do click listeners lose `this` in a class component?

```js
<button onClick={this.increment}>Increment</button>
```

`increment` is fired on a click event listener. That goes onto the event queue which is checked by the event loop, and the event loop loses track of what `this` is. You need to `bind(this)`. (Side note, I don't miss doing this.)

In this scenario:

```js
export default class Counter extends Component {
  constructor() {...
  this.state = { count: 0 }
  }

  increment(){
    this.setState({ count: this.state.count + 1});
    this.setState({ count: this.state.count + 1});
    this.setState({ count: this.state.count + 1});

    console.log(this.state.count)
  }

  render() {...}
}
```

If you call increment, you'll log `0` to the console, because `this.state.count` is already captured with a closure and `this.setState()` is async. This is an instance where `useRef` would help you get the exact `current` value.

Also, this will only increment the `count` by 1, because after reconciliation is done, we're queuing up state changes. Effectively the `increment` function says "Set count to 0 + 1" three times. So it sets it to 0 + 1 the last time.

### Passing functions to this.setState

```js
this.setState(state => {
  return { count: state.count + 1 };
});
this.setState(state => {
  return { count: state.count + 1 };
});
this.setState(state => {
  return { count: state.count + 1 };
});
```

When we're just returning an object, JS merges the objects. It can't merge functions so it runs them one after another, so this would set `count` to `3`.

You can also put logic inside `this.setState` when you pass it a function.

`setState` takes two arguments. The new state in the form of an obj or function, and an optional callback. The callback is fired after the state has been updated, so a console log there will show the current state.

### setState Patterns and Anti-Patterns

State isn't typed like props are, so you can get some type issues.

**When to keep something in state**
Can we calculate it from props? Then no.
Are you **not** using it in the render method? Then no.

If you can't calculate it from props and you want a change to trigger a rerender: Yes.

Don't use state for a derivation of props. example:

```js
this.state = {
  fullName: props.firstName + " " + props.lastName, // don't do this. Just calculate it from props.
};
```

## Deep Dive into Hooks

Hooks expose a way to access state with function components.

If we have this inside a function component what will log?

```js
const [count, setCount] = useState(0);
const increment = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
  console.log(count);
};
```

I'm guessing 3 because we're not queueing up objects for set state, but each function is firing one after another. Not sure if count is captured by a closure here. - I was wrong, it logs `0` because of the async nature of useState.

Turns out that hooks behave similarly to `this.setState` in that they both increment immediately if passed a function.

Another difference is where `this.setState` can have null or undefined returned, you can't do that for `useState` and have it ignored in the same way.

### useEffect + Dependencies

The "effect" is for side effects. A pure function component has "props go in, component comes out". But effects change the way those react. Anything that is not the return value is technically a side effect. AJAX requests are side effects.

## Custom Hooks

We made a custom hook for managing local storage combined with useState and useEffect.

```js
// Custom Hook
const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage)[value];
    return initialState;
  };

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }), [value]);
  });

  return [value, setValue];
};
```

This shows a few things. You can create custom hooks that use the normal hooks. You should probably provide a similar API to useState or something similar, depending on the custom hook. You can combine multiple hooks inside your custom hook and add functionality. The key is to get the hook to be very reusable so that you can use it in many places. That's where those hook sharing sites are pretty great.

## The limits of useState

As expected, `useState` has its limits as you don't want to have 100 declarations of `useState` for something like a big form. For something small it's perfect, but once you get into complex state, you're gonna want to reach for `useReducer` or something similar.

## useReducer

Basically a simplified version of what you can get in Redux. It does like 80% of what Redux does, but it hits its limit eventually.

## "When should you pull in Redux?"

Steve points out that Redux supports middleware where useReducer doesn't. Redux does a lot of performance optimizations that you can do, but those are battle tested. It used to be a quicker jump to Redux, but now you can stay in pure React for longer.

You can spin up Context for a small part of your app that just needs some ephemeral state.

## Creating a Context Provider

```js
import React from "react";

const SuperCoolContext = React.createContext();

SuperCoolContext.Provider;
SuperCoolContext.Consumer;
```

### Class Based

```js
<CountContext.Provider value={0}>
  <CountContext.Consumer>{value => <p>{value}</p>}</CountContext.Consumer>
</CountContext.Provider>
```

You pass a value as a prop to Provider, any child component if you call the consumer component, you have access to that value.

You wrap this with state management. You'd have the state just above the Provider which passes the value to Provider, then Provider gives it to everything calling Context.

### Hooks Based

You still wrap your components with a Provider, but the way the consumer works is different. Instead of wrapping in a consumer component you use the `useContext` hook.
```js
  const { resetCount, count } = React.useContext(CountContext)
```

## Data Fetching

`useEffect` is what you'll use for this.
