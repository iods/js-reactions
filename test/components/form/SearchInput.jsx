import { useState, useEffect } from 'react';
import GolfHero from "../../assets/img/golf.jpeg";
import CardListing from "../card/CardListing";

/*
 * useState() allows us to capture localstate into
 * a functional component.
 */
const SearchInput = () => {

    // useState helps assign variables to array elements
    const [searchField, setSearchField] = useState(''); // [valueWeWantToStore, setterFunction]
    const [golfers, setGolfers] = useState([]);
    const [filteredGolfers, setFilteredGolfers] = useState(golfers);

    useEffect(() => {
        fetch('https://api.sportsdata.io/golf/v2/json/Players?key=a54602fdc6b4470d935c34fd588360fc')
            .then((response) => response.json())
            .then((result) => setGolfers(result));
    }, []);

    useEffect(() => {
        const filteredResults = golfers.filter((golfer) => {
            return golfer.FirstName.toLocaleLowerCase().includes(searchField)
        })
        setFilteredGolfers(filteredResults);
    }, [golfers, searchField]);

    const onSearchChange = (event) => { // first we get the event (people typing)
        const searchFieldString = event.target.value.toLocaleLowerCase(); // then we lowercase it
        setSearchField(searchFieldString);
    }

    return (
        <div className="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
            <img alt="Welcome to the Dark Side" className="w-5/6 md:w-3/6 lg:w-2/6 mb-10 object-center object-cover rounded-2xl" src={ GolfHero } />
            <div className="flex flex-col w-full md:w-2/3 items-center text-center">
                <h1 className="sm:text-4xl text-3xl mb-4 font-medium">Typewriter Mafia Sprite Readymade</h1>
                <p className="mb-8 leading-relaxed">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian.</p>
                <div className="flex w-full justify-center items-end">
                    <div className="relative w-2/4 md:w-full lg:w-full xl:w-1/2 mr-4 text-left">
                        <label className="text-sm text-green-800 leading-7" htmlFor="search-field">Search Here for a Golfer</label>
                        <input className="px-3 py-1 w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-green-300 focus:ring-2 focus:ring-green-700 focus:bg-transparent outline-none leading-8 transition-colors duration-200 ease-in-out rounded"
                               id="search-field"
                               name="search-field"
                               type="search"
                               onChange={ onSearchChange }
                        />
                    </div>
                </div>
                <p className="text-sm mt-2 text-gray-500 mb-2 w-full">Neutra shabby chic ramps, viral fixie.</p>
            </div>
            <CardListing golfers={filteredGolfers} />
        </div>
    )
}

export default SearchInput;