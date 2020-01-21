import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import './Error404.css';

const Error404 = ({ callback404 }) => {
    return (
        <main id="error-container">
        <Helmet>
            <title>404</title>
        </Helmet>
        <div id="err-container">
            <h1>404</h1>
            <div id="content">
                <h2>The movie with the supplied id does not exist</h2>
                <Link to="/">
                    <button id="btn" onClick={callback404}>GO HOME</button>
                </Link>
            </div>
        </div>
    </main>
    )
}

export default Error404;