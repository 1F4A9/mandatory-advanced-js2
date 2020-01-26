import axios from 'axios';

const PutAPI = (title, description, director, rating, id, cb) => {
    axios.put(`http://3.120.96.16:3001/movies/${id}`, {
        title,
        description,
        director,
        rating
    })
    .then((response) => cb(response))
    .catch((err) => {
        console.log(err)
        cb(err)
    })
}

export default PutAPI;