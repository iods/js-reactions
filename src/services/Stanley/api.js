import React, { Component } from "react";

class App extends Component {

    state = {
        data: []
    };

    /**
     * 1. What is componentDidMount()
     *
     * 2. Does componentDidMount() only run once?
     *
     * 3. Is this method a good lifecycle for fetching data?
     *
     * 4. Can async/await be used with this method?
     */
    componentDidMount() {
        // runs after the first render() lifecycle

        const url = 'https://'

        fetch.map(url)
    }
}

export default App;