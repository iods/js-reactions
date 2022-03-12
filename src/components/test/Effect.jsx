import axios from "axios";
import { useState, useEffect} from "react";

const API_URL = 'https://hp-api.herokuapp.com/api/characters';

const Effect = () => {

    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        axios.get(API_URL).then((response) => {
           setCharacters(response.data);
        });
    }, []);

    if (!characters) return null;

    const renderAllCharacters = () => {
        return (
            renderCharacters
        )
    };

    const renderCharacters = characters.filter((item) => {
        return item.name.toLowerCase();
    }).map((item) => {
        return (
            <div className="container">
                <p>{item.name}</p>
                <ul>
                    <li>{item.species}</li>
                </ul>
            </div>
        )
    });

    return <>{renderAllCharacters()}</>
}

export default Effect;