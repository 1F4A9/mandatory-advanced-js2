import React from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import Form from './Form';
import PostAPI from '../api/PostAPI';

import './ErrorPopup.css';

class AddPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            director: '',
            rating: '',
            redirect: false,
            error: false,
        }

        this.onInput = this.onInput.bind(this);
        this.onRating = this.onRating.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onRedirect = this.onRedirect.bind(this);
        this.onError = this.onError.bind(this);
    }

    onInput(e) {
        let name = e.target.name;
        if (name === 'title') this.setState({ title: e.target.value });
        if (name === 'description') this.setState({ description: e.target.value });
        if (name === 'director') this.setState({ director: e.target.value });
    }

    onRating(e) {
        let rating = e.target.value;

        this.setState({ rating });
    }

    onRedirect() {
        this.setState({ redirect: true });
    }

    onError() {
        this.setState({ error: true });
        // gör en pop-up med error message
    }

    onSubmit(e) {
        e.preventDefault();

        const cbRedirect = this.onRedirect;
        const cbError = this.onError;

        const { title, description, director, rating } = this.state;

        PostAPI(title, description, director, rating, cbRedirect, cbError);
    }
    render() {
        if (this.state.redirect) return <Redirect to="/" />;
        return (
            <main>
                <Helmet>
                    <title>Add Movie</title>
                </Helmet>
                <h1 className="show">Testar popup</h1>
                <Form
                    onRating={this.onRating}
                    onInput={this.onInput}
                    onSubmit={this.onSubmit}
                />
            </main >
        )
    }
}

export default AddPage;