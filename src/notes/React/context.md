# Context

_Notes taken mostly on [React's Context Docs](https://reactjs.org/docs/context.html)._

Context allows for sharing of state between components without prop drilling or pulling in Redux.

## When to use Context

Whenever you're prop drilling or passing some state to every component, like a theme prop.

```js
// We create a context
const ThemeContext = React.createContext("light");

const App = () => (
  <ThemeContext.Provider value="dark">
    <Toolbar />
  </ThemeContext.Provider>
);

const Toolbar = () => (
  <div>
    <ThemedButton />
  </div>
);

class Toolbar extends React.Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div>
        <Button theme={this.context} />
      </div>
    );
  }
}
```

## Before you Use Context

Use it sparingly as it makes component reuse more difficult.

If you're just using it to avoid passing props through many levels, the docs recommend component composition, where we'd pass an entire component down and render it, rather than multiple props.

## API

First we create the context object.
```js
const MyContext = React.createContext(defaultValue);
```

Then we want to wrap our app in the Context Provider. This is a Higher Order Component that exposes context all the way down.

```js
<MyContext.Provider value={/* some value */}>
```

Then we can either use the context in a class based component with `MyClass.contextType` or we can use `Context.Consumer` with a render prop.

```js
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```



## Updating Context State

When components need to update the state stored in Context we can add functions to context that will be passed along.

```js
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
```