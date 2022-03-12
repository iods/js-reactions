import { Component } from "react";

class Golfers extends Component {

    // really just using constructors for inits [1]
    constructor() {
        super();
        /*
         * React uses these keys as an identifier
         * for what to render and re-render. This is
         * important with how React understands what
         * changed rather than updating all.
         *
         * Much more performant when re-rendering things
         * as it knows exactly what to update rather than
         * refreshing the entire page.
         */
        this.state = {
            golfers: [],
        };
        console.log('constructor');
    }

    // when do I get the list?
    // how do I get the list?
    // where do I get the list?

    /*
     * Lifecycle Methods [3]
     * componentDidMount()
     *
     * set state to update, then re-call render.
     */
    componentDidMount() {
        // first time component renders is on the page
        // only happens once
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(() => {
                return { golfers: users }
            }, () => {
                console.log(this.state);
            }));
    }


    /*
     * What to show. [2]
     */
    render() {
        console.log('render');
        return (
            /*
             * Turning an array to elements
             * .map() iterates from left to right w/ new array.
             */
            <div className="container mx-auto px-5 py-24">

                <input />
                {this.state.golfers.map((golfer) => {
                    return (
                        <h1 key={golfer.id}>{golfer.name}</h1>
                    );
                })}
            </div>
        )
    }
}

export default Golfers;