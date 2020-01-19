import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/add">Add</Link>
            </li>
            <li>
                <Link to="/edit/:id">Edit</Link>
            </li>
            <li>
                <Link to="/details/:id">Details</Link>
            </li>
        </ul>
    </nav>
)

export default Navigation;