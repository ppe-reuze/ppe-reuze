import React from 'react';
import { Link } from 'react-router-dom';

export default function Gowns() {
    return (
        <div className="container has-text-centered">
            <h1 className="title">Gowns</h1>
            <div className="box">
            <p>Based on currently available evidence, reusing gowns isn't advisable.</p>
            </div>
            <Link to="/">
                <button className="button is-rounded is-info">
                <i class="fas fa-arrow-left"></i>&nbsp;<span>Back</span>
                </button>
            </Link>
        </div>
    )
}
