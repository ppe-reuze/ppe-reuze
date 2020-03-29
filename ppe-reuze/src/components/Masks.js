import React from 'react';
import { Link } from 'react-router-dom';

export default function Masks() {
    return (
        <TypeOfMask />
    )
}

function TypeOfMask() {
    return (
        <div className="container has-text-centered">
            <h1 className="title">What kind of mask do you have?</h1>
            <div className="columns">
                <div className="column">
                    <div className="box">N95 Respirators</div>
                </div>
                <div className="column">
                    <div className="box">Surgical Masks</div>
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