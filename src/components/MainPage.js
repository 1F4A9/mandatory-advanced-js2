import React from 'react';
import { Helmet } from "react-helmet";
import GetAPI from '../api/GetAPI';
import { Link } from 'react-router-dom';
import DeleteNodeAPI from '../api/DeleteNodeAPI';
import Error404 from './Error404';

import './MainPage.css';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            API: [],
            error404: false,
            searchValue: ''
        };

        this.callbackAPI = this.callbackAPI.bind(this);
        this.callback404 = this.callback404.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        GetAPI().then(response => {
            if (response.status === 200) {
                this.setState({ API: response.data })
            } 
        });
    }

    callback404() {
        this.setState({ error404: false })
    }

    callbackAPI(response) {
        if (response.status === 204) {
            GetAPI().then(response => this.setState({ API: response.data }))
        } else {
            this.setState({ error404: true })
            GetAPI().then(response => this.setState({ API: response.data }))
        }
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

    filterMovies() {
        return this.state.API.filter(data => {
            return data.title.toLowerCase().includes(this.state.searchValue) || data.director.toLowerCase().includes(this.state.searchValue)
        })
    }

    onChange(e) {
        this.setState({ searchValue: e.target.value.toLowerCase() })
    }

    render() {
        console.log(this.state.error404)
        const main = (
            <main>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <input 
                    onChange={this.onChange}
                    type="text"
                    id="search"
                    placeholder="search..."
                    value={this.state.searchValue}
                />
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Director</th>
                            <th>Rating</th>
                            <th>Edit</th>
                            <th>Details</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.filterMovies().map(API => {
                            return (
                                <tr key={API.id}>
                                    <td>{API.title}</td>
                                    <td>{API.director}</td>
                                    <td>{this.renderStars(API.rating)}</td>
                                    <td>
                                        <Link to={`/edit/${API.id}`}>
                                            <button>Edit</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/details/${API.id}`}>
                                            <button>Details</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button 
                                            onClick={() => DeleteNodeAPI(API.id, this.callbackAPI)}
                                            >Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </main>
        )

        return <> {this.state.error404 ? <Error404 callback404={this.callback404}/> : main} </>
    }
}

export default MainPage;