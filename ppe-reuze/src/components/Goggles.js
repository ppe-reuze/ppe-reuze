import React from 'react';
import { Link } from 'react-router-dom';

export default function Goggles() {
    return (
        <div className="container has-text-centered">
            <h1 className="title">Goggles</h1>
            <div className="box">
                <p>Use water (± detergent) to remove any organic matter and then immersed fully in a 0.5% chlorine solution [a solution containing 5000 ppm (parts per million) available free chlorine] for a minimum of 10 minutes for full decontamination.</p>
                <p>After decontamination, they should be thoroughly rinsed with water (to remove irritating hypochlorite residues and salt deposits) before re-use.</p>
            </div>
            <Link to="/">
                <button className="button is-rounded is-info">
                <i class="fas fa-arrow-left"></i>&nbsp;<span>Back</span>
                </button>
            </Link>
        </div>
    )
}