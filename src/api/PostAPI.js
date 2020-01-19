import axios from 'axios';

const PostAPI = (title, description, director, rating, cb) => {
    axios.post('http://3.120.96.16:3001/movies', {
        title,
        description,
        director,
        rating
    })
    .then((response) => cb(response))
    .catch((response) => cb(response))
}

export default PostAPI;