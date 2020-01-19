import React from 'react';
import { Helmet } from "react-helmet";
import GetAPI from '../api/GetAPI';
import { Link } from 'react-router-dom';
import DeleteNodeAPI from '../api/DeleteNodeAPI';

import './MainPage.css';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            API: [],
        };
    }

    componentDidMount() {
        GetAPI().then(response => {
            if (response.status === 200) {
                this.setState({ API: response.data })
            } else {
                console.log('404 ERROR, handle this shit')
            }
        });
    }

    callbackAPI(response) {
        if (response.status === 404) {
            // popup --> "movie with the supplied id does not exist"
            console.log('beepboop: selected movie does not exist')
        } else {
            // rerender funktion här!!
            console.log(response)
        }
    }

    render() {
        const movies = this.state.API;

        console.log(movies)

        return (
            <main>
                <Helmet>
                    <title>Home</title>
                </Helmet>
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
                        {movies.map(API => {
                            return (
                                <tr key={API.id}>
                                    <td>{API.title}</td>
                                    <td>{API.director}</td>
                                    <td>{API.rating}</td>
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
    }
}

export default MainPage;