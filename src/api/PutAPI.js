import axios from 'axios';

const PutAPI = (title, description, director, rating, id, cb) => {
    axios.put(`http://3.120.96.16:3001/movies/${id}`, {
        title,
        description,
        director,
        rating
    })
    .then(() => cb())
    .catch((err) => console.log(err))
}

export default PutAPI;