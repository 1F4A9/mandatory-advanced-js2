import React from 'react';
import GetAPI from '../api/GetAPI';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

class DetailsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = { API: [] }
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        GetAPI(id).then((response) => {

            if (response.status === 200) {
                this.setState({ API: response.data })
            } else if (response.status === 404) {
                // do someting crazy!!
                console.log('404 ERROR, handle this shit')
            } else {
                // do someting crazy!!
                console.log('The webpage is broken!')
                console.log(response.status)
            }
        })
    }

    render() {
        const id = this.props.match.params.id;
        const API = this.state.API;
        return (
            <main>
                <Helmet>
                    <title>Details</title>
                </Helmet>
                <h3>Title: {API.title}</h3>
                <h3>Description: {API.description}</h3>
                <h3>Director: {API.director}</h3>
                <h3>Rating: {API.rating}</h3>
                <Link to={`/edit/${id}`}>
                    <button>Edit</button>
                </Link>
            </main>
        )
    }
}

export default DetailsPage;