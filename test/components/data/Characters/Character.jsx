import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = 'https://www.officeapi.dev/api/characters/';

const Character = () => {

    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        axios.get(API_URL).then((response) => {
            setCharacters(response.data);
        });
    }, []);

    if (!characters) return null;

    const renderAll = () => {
        return (
            renderCharacter
        )
    }

    const renderCharacter = characters.filter((item) => {
        return item.firstname.toLowerCase();
    }).map((item) => {
        return (
            <p>{item.firstname}</p>
        )
    });

    return (
        <>
            {renderAll()}
        </>
    )
}

export default Character;