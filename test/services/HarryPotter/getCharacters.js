import API from './api';

const getCharacters = async () => {

    const getCharacters = await API.get(``);
    return getCharacters?.data
}

export default getCharacters();