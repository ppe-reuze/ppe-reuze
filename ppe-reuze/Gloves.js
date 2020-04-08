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
        <div className="container has-text-centered app-content">
            <h1 className="title">What kind of gloves do you have?</h1>
            <div className="columns">
                <div className="column">
                    <Link to="/submissions/nitrile">
                        <div className="box">                         
                            <img src="nitrile_glove.png" width="60" alt="Nitrile Glove" />
                        <br />
                        Nitrile 
                        </div>
                        <br />
                    </Link>
                </div>
        
                <div className="column">
                    <Link to="/submissions/latex">
                        <div className="box">
                            <img src="latex_glove.png" width="60" alt="Latex Glove" />
                        <br />
                        Latex
                        </div>
                        <br />
                    </Link>
                </div>
            </div>
            
            <Link to="/start">
            <button className="button is-rounded is-info">
                <i class="fas fa-arrow-left"></i>&nbsp;<span>Back</span>
            </button>
        </Link>
        </div>
        
    )
}