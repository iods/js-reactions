Reactions - An Introduction to React
====================================

[Edit](https://github.com/iods/js-reactions)

My, [iods](https://github.com/iods) / [thedarksociety](https://github.com/thedarksociety), code style and conventions for React.


Table of Contents
-----------------

- [Developer Guide](DeveloperGuide.md)
- [Developer Questions](DeveloperQuestions.md)
- [Snippets - Practice](Development.md)
- [Resources](Resources.md)


Introduction
------------

What is [React](https://reactjs.org)?

It is a clientside JavaScript library for building modern, reactive websites.

React is popular, it isn't cool because it is popular, it is popular because it is cool. Rather than understanding the how I 
wanted to understand the why. Why React? Why does it work the way it works? What is the purpose of the API designs?

> Life is simpler when UI components are unaware of the 
> network, business logic, or app state. Given the same 
> props, always render the same data.

In the beginning, other languages were pushing MVC (Model, View, Controller) and MVVM (Model, View, View, Model). React
on the other hand chose to isolate view rendering from the model representation. This introduced an entirely new architecture
to JavaScript frontends: Flux. What made this better than everything else?

It makes building interfaces easier, simply put.


Basic Concepts
--------------

Came out in 2013.

#### Declarative vs. Imperative

Don't touch the DOM. I will do it.

React to the data to get the display that you want.

#### Component Architecture & UI

Building sites like lego blocks.

share things across projects.

just JS functions

#### Uni-Directional Data Flow

State 

Components

They combine to create a VirtualDOM (a JS version of the DOM) then looks at the real DOM and updates it.

State has to change in the app. It reacts. What happens? How do we change that state?

Once state changes, update DOM.

State change trickles down restricts how data can move through the application. 

#### UI Library

React is just the UI, the rest is up to the developer.

React is everywhere. VR -> CLI -> Desktop -> Mobile

Two libraries, React and React DOM

