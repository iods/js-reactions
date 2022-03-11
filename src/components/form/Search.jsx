import { Component } from "react";

import GolfHero from '../../assets/img/golf.jpeg';

class Search extends Component {

    constructor() {
        super();

        this.state = {
            golfers: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(() => {
                return { golfers: users }
            }
        ));
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return { searchField }
        })
    }
    /**
     * SyntheticBaseEvents -> Documentation
     * Review target in the console
     * https://wickedblocks.dev/index.html
     * https://github.com/ixartz/Next-js-Boilerplate/blob/master/src/pages/index.tsx
     * https://github.com/thes3interdev/starter-react-tailwindcss
     * https://github.com/w3bdesign/React-themes-tailwind/blob/master/src/components/blogs/GridWithFeaturedPost.js
     * https://github.com/codegino/react-ts-tailwind-boilerplate
     * https://tailblocks.cc/
     *
     */
    render() {
        const filteredGolfers = this.state.golfers.filter((golfer) => {
            return golfer.name.toLocaleLowerCase().includes(this.state.searchField); // if it includes the name, return true
        })

        return (
            <div className="container mx-auto flex flex-col px-5 py-20 justify-center items-center">
                <img alt="Welcome to the Dark Side" className="w-5/6 md:w-3/6 lg:w-2/6 mb-10 object-center object-cover rounded-2xl" src={ GolfHero } />
                <div className="flex flex-col w-full md:w-2/3 mb-16 items-center text-center">
                    <h1 className="sm:text-4xl text-3xl mb-4 font-medium">Typewriter Mafia Sprite Readymade</h1>
                    <p className="mb-8 leading-relaxed">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian.</p>
                    <div className="flex w-full justify-center items-end">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <label htmlFor="search-field" className="leading-7 text-sm text-green-800">Search for A Golfer</label>
                            <input className="px-3 py-1 w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-green-300 focus:ring-2 focus:ring-green-700 focus:bg-transparent outline-none leading-8 transition-colors duration-200 ease-in-out rounded"
                                   id="search-field"
                                   name="search-field"
                                   type="search"
                                   onChange={ this.onSearchChange }
                            />
                        </div>

                        <button className="px-6 py-2 inline-flex text-white text-darkstar text-lg bg-green-700 hover:bg-green-600 border-0 focus:outline-none rounded">Search</button>
                    </div>
                    <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
                </div>
                {filteredGolfers.map((golfer) => {
                    return (
                        <h1 key={golfer.id}>{golfer.name}</h1>
                    );
                })}
            </div>
        )
    }
}

export default Search;