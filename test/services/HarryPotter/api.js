import axios from 'axios';

// Harry Potter API
// https://hp-api.herokuapp.com/
export default axios.create({
    baseURL: `https://hp-api.herokuapp.com/api/characters`
});