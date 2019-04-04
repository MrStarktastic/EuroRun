import axios from 'axios';
const SERVER_URL = "www.google.com";

const coordinatesParser = (data) =>{
    return data;
};

export const getAllCoordinates = () =>{
    axios.get(SERVER_URL)
        .then((response) =>{
            // handle success
            return Promise.resolve(coordinatesParser(response));
        })
        .catch( (response) => {
            // handle error
            return Promise.reject(response.error);
        })
};