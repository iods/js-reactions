import React, { Component } from 'react';

class App extends Component {

    componentDidMount() {
        // this will run after the first render() lifecycle
        // what does the above mean?
    }

    render() {
        console.log('Rendered the lifecycle.');
        return <h1>Rendering Hello World.</h1>
    }

}

export default App;