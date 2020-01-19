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
            rating: 0,
            redirect: false,
            invalidMovieObj: false,
        }

        this.onInput = this.onInput.bind(this);
        this.onRating = this.onRating.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.callbackAPI = this.callbackAPI.bind(this);
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

    callbackAPI(response) {
        if (response.status === 201) {
            this.setState({ redirect: true });
        } else {
            this.setState({ invalidMovieObj: true })
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const { title, description, director, rating } = this.state;

        PostAPI(title, description, director, rating, this.callbackAPI);
    }
    render() {
        if (this.state.redirect) return <Redirect to="/" />;
        return (
            <main>
                {this.state.invalidMovieObj ? <p>BEEPBOOP ERROR!</p> : <span></span>}
                <Helmet>
                    <title>Add Movie</title>
                </Helmet>
                <h1 className="show">Edit</h1>
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