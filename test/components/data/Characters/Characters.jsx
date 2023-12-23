import axios from "axios";
import { useState, useEffect} from "react";

import House from '../../../assets/img/house.png';
import Wand from '../../../assets/img/wand.png';


const API_URL = 'https://hp-api.herokuapp.com/api/characters';

const Characters = () => {

    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        axios.get(API_URL).then((response) => {
            setCharacters(response.data);
        });
    }, []);

    if (!characters) return null;

    /**
     * Render Characters Block
     */
    const renderAllCharacters = () => {
        return (
            <section className="text-gray-700">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Tiffany's Team</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr
                            hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably
                            haven't heard of them.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {renderCharacter}
                    </div>
                </div>
            </section>
        )
    };

    /**
     * Render Individual Character
     */
    const renderCharacter = characters.filter((item) => {
        return item.name.toLowerCase();
    }).map((item) => {
        return (

            <div className="p-3 sm:w-1/2 md:w-1/4">
                <div className="h-full border-2 border-gray-100 border-opacity-50 rounded-lg overflow-hidden">
                    <img className="md:h-36 lg:h-60 w-full object-cover object-center" src={item.image} alt={item.name} />

                    <div className="px-5 py-6">
                        <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">{item.actor}</h2>
                        <h1 className="text-lg font-medium text-gray-900 mb-3">{item.ancestry}</h1>
                        <div className="text-center">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center text-gray-400">
                                <img alt="House" src={ Wand } className="w-12 h-12 flex-shrink-0 object-cover object-center" />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-1 text-gray-900 text-lg">{item.wand.wood} {item.wand.core}</h2>
                            </div>
                        </div>
                        <p className="leading-relaxed mb-3"></p>
                        <div className="flex py-1">
                            <span className="text-gray-500">Eye Color</span>
                            <span className="ml-auto text-gray-900">{item.eyeColour}</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Birthday</span>
                            <span className="ml-auto text-gray-900">{item.yearOfBirth}</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Patronus</span>
                            <span className="ml-auto text-gray-900">{item.patronus}</span>
                        </div>
                    </div>

                    <div className="pl-3 pb-3">
                        <a className="inline-flex items-center">
                            <img alt="House" src={ House } className="w-12 h-12 flex-shrink-0 object-cover object-center" />
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="font-medium text-gray-900">{item.name}</span>
                                <span className="text-gray-400 text-xs tracking-widest mt-0.5">{item.house}</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        )
    });

    return <>{renderAllCharacters()}</>
}

export default Characters;