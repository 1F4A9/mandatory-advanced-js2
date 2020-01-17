import React from 'react';
import { Helmet } from 'react-helmet';
import GetAPI from '../api/GetAPI';
import PutAPI from '../api/PutAPI';
import Form from './Form';

class EditPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            API: '',
            title: '',
            description: '',
            director: '',
            rating: '',
            checked: [ false, false, false, false, false ],
            firstPageLoad: true,
        }
        this.onInput = this.onInput.bind(this);
        this.onRating = this.onRating.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        GetAPI(id)
            .then(data => { 
                this.setState({ API: data })

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
            firstPageLoad: false
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

    onSubmit(e) {
        e.preventDefault();

        const { title, description, director, rating } = this.state;

        PutAPI(title, description, director, rating, this.state.API.id);
    }

    render() {
        return (
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
    }
}

export default EditPage;