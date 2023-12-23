import { useEffect, useState } from "react";

import API from './apiUrls';

export const getAllHarryPotterCharacters = async () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        API
            .get(``)
            .then((response) => {
                setCharacters(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    try {
        return await API.get('');
    } catch (error) {
        console.error(error);
    }
}

// The Office API
// https://www.officeapi.dev/