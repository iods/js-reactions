import { Component } from "react";

/**
 * Example of a Component from a class.
 *
 * Classes vs. Hooks
 *
 * When to render and re-render something.
 */
class AppComponent extends Component {

    /*
     * Local State
     * super(); is not really important for React
     * think of it like parent::_construct()
     *
     * Render and re-render the data here.
     */
    constructor() {
        super();

        // react will look for this
        this.state = {
            verse: 'Now, this is the story all about how my life got flipped-turned upside down. And I\'d like to take a minute just sit right there.'
        }
    }


    render() {
        return (
            <div className="container mx-auto px-5 py-24">
                <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                    <h1 className="flex-grow sm:pr-16 text-2xl font-medium text-gray-900">{this.state.verse}</h1>
                    <button onClick={() => {
                        this.setState(() => {
                            return {
                                verse: 'I\'ll tell you how I became the prince of a town called Bel-Air'
                            }
                        }, () => {
                            console.log(this.state); // will run only after everything (shallow merge) is applied
                        });
                    }} className="flex-shrink-0 text-white bg-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-sky-600 rounded text-lg mt-10 sm:mt-0">Update</button>
                </div>
            </div>
        );
    }
}

export default AppComponent;