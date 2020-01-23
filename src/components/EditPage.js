import React from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import GetAPI from '../api/GetAPI';
import PutAPI from '../api/PutAPI';
import Form from './Form';
import Error404 from './Error404';

class EditPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            API: '',
            title: '',
            description: '',
            director: '',
            rating: 0,
            redirect: false,
            error404: false,
            checked: [ false, false, false, false, false ],
            firstPageLoad: true,
        }
        this.onInput = this.onInput.bind(this);
        this.onRating = this.onRating.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.callbackAPI = this.callbackAPI.bind(this);
        this.callback404 = this.callback404.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        GetAPI(id)
            .then(response => { 
                if (response.status === 200) {
                    this.setState({ API: response.data })
                } else {
                    this.setState({ error404: true })
                }

                if (this.state.firstPageLoad) { 
                    this.setDefaultValues(this.state.API.rating)
                }
            })
    }

    setDefaultValues(currentRating) {
        const checked = this.state.checked;
        const {title, description, director, rating} = this.state.API;

        checked[Math.round(currentRating) - 1] = true;

        this.setState({ 
            checked,
            title,
            description,
            director,
            rating,
            firstPageLoad: false,
         })
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

        let ratings = this.state.checked.map(value => value = false);

        ratings[rating - 1] = true;

        this.setState({ checked: ratings})
    }

    callbackAPI() {
        this.setState({ redirect: true })
    }

    callback404() {
        this.setState({ error404: false })
    }

    onSubmit(e) {
        e.preventDefault();

        const { title, description, director, rating } = this.state;

        PutAPI(title, description, director, rating, this.state.API.id, this.callbackAPI);
    }

    render() {
        if (this.state.redirect) return <Redirect to="/" />

        const main = (
            <main>
                <Helmet>
                    <title>Edit Movie</title>
                </Helmet>
                <h1>Edit</h1>
                <Form
                    checked={this.state.checked}
                    API={this.state.API}
                    onInput={this.onInput}
                    onSubmit={this.onSubmit}
                    onRating={this.onRating}
                />
            </main>
        )
        return <> {this.state.error404 ? <Error404 callback404={this.callback404}/> : main} </>
    }
}

export default EditPage;