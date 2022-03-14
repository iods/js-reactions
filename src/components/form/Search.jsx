import { Component } from "react";

import GolfHero from '../../assets/img/golf.jpeg';

import List from "../card/List";
import SearchInput from "./SearchInput";

class Search extends Component {

    constructor() {
        super();

        this.state = {
            golfers: [],
            searchField: ''
        }
    }

    /*
     * Current Season Stats
     */
    componentDidMount() {
        fetch('https://api.sportsdata.io/golf/v2/json/Players?key=a54602fdc6b4470d935c34fd588360fc')
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
     * https://github.com/ixartz/Next-js-Boilerplate/blob/master/src/pages/index.tsx
     * https://github.com/thes3interdev/starter-react-tailwindcss
     * https://github.com/w3bdesign/React-themes-tailwind/blob/master/src/components/blogs/GridWithFeaturedPost.js
     * https://github.com/codegino/react-ts-tailwind-boilerplate
     * https://github.com/lampshed/website-react-tailwind
     * https://github.com/ellesis/tailwind-react
     * https://github.com/BryanBerger98/react-tailwind-firebase-starter
     * https://github.com/baptistedph/react-template
     * https://github.com/yashsehgal/react-tailwind-test
     *
     * Destructuring in ES6
     *
     */
    render() {

        const { golfers, searchField } = this.state;
        const { onSearchChange } = this;

        const filteredGolfers = golfers.filter((golfer) => {
            return (
                golfer.FirstName.toLocaleLowerCase().includes(searchField) // if it includes the name, return true
            )
        })

        return (
            <div className="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
                <img alt="Welcome to the Dark Side" className="w-5/6 md:w-3/6 lg:w-2/6 mb-10 object-center object-cover rounded-2xl" src={ GolfHero } />
                <div className="flex flex-col w-full md:w-2/3 items-center text-center">
                    <h1 className="sm:text-4xl text-3xl mb-4 font-medium">Typewriter Mafia Sprite Readymade</h1>
                    <p className="mb-8 leading-relaxed">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian.</p>
                    <SearchInput label="Search A Golfer" onChageHandler={onSearchChange} />
                    <p className="text-sm mt-2 text-gray-500 mb-2 w-full">Neutra shabby chic ramps, viral fixie.</p>
                </div>
                <List golfers={filteredGolfers} />
            </div>
        )
    }
}

export default Search;