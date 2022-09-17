React Developer Guide
=====================

### DOM and VirtualDOM

DOM tree is represented as a tree for sake of children.
Children have parents, siblings and other children.
Relationships. The tree. Branches.
Components should be setup like the tree.

Really expensive to make changes.
Re-flow. Computationally a lot. Process of putting things
back on and off the DOM is a lot.

React makes the VirtualDOM. JavaScript makes reflow easy.

Makes two copies. One is a snapshot, the lates copy of what
is looks like. Then there is one it will look at to make
changes against.

setState() then gets called based on all of this.

React wants to setState of things. Rerendering is based on this.

Passing new props -> react rerenders.
Is everything updated? (looks at the snapshot) highlights the differences
Updates the changes on the real DOM.

Real DOM goes through reflow and takes form of what it should be.

Reduce total number of changes. optimal way of figuring out what needs to change.


### React and React DOM Libraries

What is the difference?

Easier with jsx because React.createElement takes too long.

React is the engine. Diffing/optimizations.

React DOM is what we are rendering to. Specifically the DOM.

Native for mobile. ReactVR.

They all use React engine under the hood.

 * Declarative
 * VirtualDOM
 * Props
 * Components
 * State

 1. Decide on Components
 2. Decide on State and where it lives
 3. What changes when state changes

JSX Looks readable and dictates it easier.

### DOM Paint Flashing

VirtualDOM does some comparisons with the DOM.

Chrome dev tools uses some tools for this.

More Tools->Rendering.

Paint is terminology where the DOM "paints" components

Refreshes get green. Reflow is adding and updating.

remember that 'a' value? adding a into the search bar?

Stuff you want to see green and not green. Optimize it.


### Advanced Concepts

#### Strict Mode

**Strict Mode** highlights potential problems in an application.

> Helps to identify unsafe, legacy, or deprecated APIs/lifecycles.

It does not activate any UI, just activates additional checks and balances.

Run in development mode only; do not impact a production build.

Essentially, it is a helper component that will help write better React code.

You can wrap a set of components with `<StrictMode />` for it to:

 1. Verify components are following some type of best practice (if not tell you in console)
 2. Verify code is not deprecated (if it is strict mode will tell you in console)
 3. Identify potential risks in the application

Development oriented.

Useful with new code bases.

It renders everything twice in order to detect problems with code and warn you about them.

Create React App will automatically enable this by default.

 * [Documentation](https://reactjs.org/docs/strict-mode.html)
 * [What is StrictMode](https://www.geeksforgeeks.org/what-is-strictmode-in-react/)

### Classes vs. Hooks

Hooks are very specific to React. Classes are everywhere, not just JS.

What is the best way?

Classes were intended. Hooks solve some problems though.

Render and re-renders parts of the website. All it really does. React and renders and re-renders
the website.

### Conditionals

Conditional rendering. Here are a few ways to do it.

```jsx
render() {
    const Swings = this.state.Swings;
    return (
        <>
            {Swings ? (
                <p>This is rendering if true.</p>
            ) : (
                <p>This is rendering if false.</p>
            )}
        </>
    );
}
```
Here you can do it in the `render()` function but before the JSX is returned.
```jsx
if (Swings) {
    content = <p>This is rendering true</p>
} else {
    content = <p>This is rendering if false</p>
}

return (
    <>
        {content}
    </>
)
```
Else, if just checking whether to render content or not, use the `&&` operator.
```jsx
return (
    <>
        <p>Welcome!</p>
        {Swings = 'L' &&
            <p>You are of a small percentage of golfers!</p>
        }
    </>
)
```
Finally, you can try it this way. Just render and call and anonymous function.
```jsx
render () {
  return (
    <div>
      {(() => {
        if (someCase) {
          return (
            <div>someCase</div>
          )
        } else if (otherCase) {
          return (
            <div>otherCase</div>
          )
        } else {
          return (
            <div>catch all</div>
          )
        }
      })()}
    </div>
  )
}
```




TypeScript
----------

```shell
$ yarn add typescript -D
```
Now the `ts.config.json` file with the below setup:

```json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "outDir": "dist",
   "sourceMap": true
  }
}
```

1. use `es2018` syntax when generating the distributable
2. use the `commonjs` format
3. generate *.js to the `/dist` folder
4. generate a source map
5. include all *.ts files inside `/src` folder
6. exclude all files inside `/node_modules` folder

Add the following to the `package.json` file.
```json
{
  "scripts": {
    "build": "tsc"
  }
}
```
