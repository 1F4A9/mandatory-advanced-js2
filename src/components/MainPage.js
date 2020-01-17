import React from 'react';
import { Helmet } from "react-helmet";
import GetAPI from '../api/GetAPI';
import { Link } from 'react-router-dom';

import './MainPage.css';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            API: [],
        };
    }

    componentDidMount() {
        GetAPI().then(data => this.setState({ API: data }));
    }

    render() {
        const movies = this.state.API;
        // const keys = [];
        // const thead = keys.map(x => {<td>x</td>})
        // if (movies.length >= 1) keys.push(Object.keys(movies[0]));

        console.log(movies)

        return (
            <main>
                <Helmet>
                    <title>Movies</title>
                </Helmet>
                <table>
                    <thead>
                        <tr>
                            {/* {keys.length >= 1 ? thead : <td>TOMT!</td>} */}
                            <td>Title</td>
                            <td>Director</td>
                            <td>Rating</td>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(x => {
                            return (
                                <tr key={x.id}>
                                    <td>{x.title}</td>
                                    <td>{x.director}</td>
                                    <td>{x.rating}</td>
                                    <td>
                                        <Link to={`/edit/${x.id}`}>
                                            <button>Edit</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/details/${x.id}`}>
                                            <button>Details</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button>Delete</button>
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </main>
        )
    }
}

export default MainPage;

// 1. för varje objekt ska en ny <tr> renderas.
// 2. för varje name/value pair ska en ny <td> renderas.