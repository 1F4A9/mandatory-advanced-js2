import axios from 'axios';

const GetAPI = (location = '') => {
    return axios.get(`http://3.120.96.16:3001/movies/${location}`)
        .then((response) => {
            // handle success
            return response;
        })
        .catch((error) => {
            // handle error
            return error.response;
        })
}

export default GetAPI;