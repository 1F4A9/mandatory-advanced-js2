import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddPage from './components/AddPage';
import MainPage from './components/MainPage';
import EditPage from './components/EditPage';
import DetailsPage from './components/DetailsPage';
import Navigation from './components/Navigation';

export default function App() {
    return (
        <Router>
            <Navigation />
            <Route exact path="/" component={MainPage} />
            <Route path="/add" component={AddPage} />
            <Route path="/edit/:id" component={EditPage} />
            <Route path="/details/:id" component={DetailsPage} />
        </Router>
    )
}