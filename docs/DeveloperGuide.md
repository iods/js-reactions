React Developer Guide
=====================

 * Declarative
 * VirtualDOM
 * Props
 * Components
 * State

 1. Decide on Components
 2. Decide on State and where it lives
 3. What changes when state changes

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