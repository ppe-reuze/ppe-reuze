import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Masks() {
    return (
        <div className="container has-text-centered">
            <h1 className="title">What kind of mask do you have?</h1>
            <div className="columns">
                <div className="column">
                    <Link to="/submissions/n95">
                    <div className="box">N95 Respirator</div>
                    </Link>
                </div>
                <div className="column">
                    <Link to="/submissions/surgical">
                    <div className="box">Surgical Mask</div>
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