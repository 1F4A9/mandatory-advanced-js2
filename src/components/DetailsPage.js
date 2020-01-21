import React from 'react';
import GetAPI from '../api/GetAPI';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Error404 from './Error404';

class DetailsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            API: [],
            error404: false
        }
        this.callback404 = this.callback404.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        GetAPI(id).then((response) => {
            if (response.status === 200) {
                this.setState({ API: response.data })
            } else if (response.status === 404) {
                this.setState({ error404: true })
            } 
        })
    }

    callback404() {
        this.setState({ error404: false })
    }

    renderStars(amount) {
        amount = Math.round(amount);
        if (amount === 0) return '0/5'
        if (amount === 1) return '★'
        if (amount === 2) return '★★'
        if (amount === 3) return '★★★'
        if (amount === 4) return '★★★★'
        if (amount === 5) return '★★★★★'
    }

    render() {
        const id = this.props.match.params.id;
        const API = this.state.API;

        const main = (
            <main>
                <Helmet>
                    <title>Details</title>
                </Helmet>
                <h3>Title: {API.title}</h3>
                <h3>Description: {API.description}</h3>
                <h3>Director: {API.director}</h3>
                <h3>Rating: {this.renderStars(API.rating)}</h3>
                <Link to={`/edit/${id}`}>
                    <button>Edit</button>
                </Link>
            </main>
        )
        return <> {this.state.error404 ? <Error404 callback404={this.callback404}/> : main} </>
    }
}

export default DetailsPage;