import axios from 'axios';

const PutAPI = (title, description, director, rating, id) => {
    axios.put(`http://3.120.96.16:3001/movies/${id}`, {
        title,
        description,
        director,
        rating
    })
    .catch((err) => console.log(err))
}

export default PutAPI;