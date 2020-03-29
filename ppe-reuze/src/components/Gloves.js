import React from 'react';
import { Link } from 'react-router-dom';

export default function Gloves() {
    return (
        <React.Fragment>
            <TypeOfGloves />
        </React.Fragment>
    )
}

function TypeOfGloves() {
    return (
        <div className="container has-text-centered">
            <h1 className="title">What kind of gloves do you have?</h1>
            <div className="columns">
                <div className="column">
                    <div className="box">Nitrile</div>
                </div>
                <div className="column">
                    <div className="box">Latex</div>
                </div>
            </div>
            <Link to="/">
            <button className="button is-rounded is-info">
                <i class="fas fa-arrow-left"></i>&nbsp;<span>Back</span>
            </button>
        </Link>
        </div>
        
    )
}