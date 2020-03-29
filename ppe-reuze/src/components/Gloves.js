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
                    <Link to="/submissions/nitrile">
                        <div className="box">Nitrile</div>
                    </Link>
                </div>
                <div className="column">
                    <Link to="/submissions/latex">
                        <div className="box">Latex</div>
                    </Link>
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