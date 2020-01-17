import axios from 'axios';

const PostAPI = (title, description, director, rating, redirect, error) => {
    axios.post('http://3.120.96.16:3001/movies', {
        title,
        description,
        director,
        rating
    })
    .then(() => redirect())
    .catch(() => error())
}

export default PostAPI;