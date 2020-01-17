import React from 'react';

import './Form.css'

const Form = ({ onRating, onInput, onSubmit, API = '', checked = false }) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <div id="title">
                    <label>Title:</label>
                    <input
                        onInput={onInput}
                        type="text"
                        name="title"
                        defaultValue={API.title}
                    />
                </div>
                <div id="director">
                    <label>Director:</label>
                    <input
                        onInput={onInput}
                        type="text"
                        name="director"
                        defaultValue={API.director}
                    />
                </div>
                <div id="textarea">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        onInput={onInput}
                        defaultValue={API.description}
                    />
                </div>
                <div id="rating-container">
                    <div className="rating">
                        <label>
                            <input
                                onChange={onRating}
                                type="radio"
                                name="stars"
                                value="1"
                                checked={checked[0]}
                            />
                            <span className="icon">★</span>
                        </label>
                        <label>
                            <input
                                onChange={onRating}
                                type="radio"
                                name="stars"
                                value="2"
                                checked={checked[1]}
                            />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                        </label>
                        <label>
                            <input
                                onChange={onRating}
                                type="radio"
                                name="stars"
                                value="3"
                                checked={checked[2]}
                            />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                        </label>
                        <label>
                            <input
                                onChange={onRating}
                                type="radio"
                                name="stars"
                                value="4"
                                checked={checked[3]}
                            />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                        </label>
                        <label>
                            <input
                                onChange={onRating}
                                type="radio"
                                name="stars"
                                value="5"
                                checked={checked[4]}
                            />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                        </label>
                    </div>
                </div>
                <div id="submit">
                    <input type="submit" />
                </div>
            </form>
        </>
    )
}

export default Form;