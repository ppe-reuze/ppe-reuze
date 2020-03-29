import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container">
            <h1 className="title">Reusing &amp; sanitizing PPE</h1>
            <h2 className="subtitle">Reuze is a platform for healthcare professionals to easily access community-sourced, evidence based strategies for sanitizing personal protect equipment in the COVID-19 epidemic.</h2>
            <Link to="/start">
                <button className="button is-rounded">Get Started</button>
            </Link>
        </div>
    )
}
