import React from 'react'

export default function SelectPPE() {
    return (
        <div className="container has-text-centered">
            <h1 className="title">What would you like to sanitize?</h1>
            <div className="container">

                <div className="buttons are-large">
                    <button className="button is-warning is-fullwidth is-rounded">
                        <span class="icon is-small">
                            <i class="fas fa-head-side-mask"></i>
                        </span>
                        <span>
                            Masks
                </span>
                    </button>

                    <button className="button is-primary is-fullwidth is-rounded">
                        <span class="icon is-small">
                            <i class="fas fa-glasses"></i>
                        </span>
                        <span>
                            Goggles
                </span>
                    </button>

                    <button className="button is-success is-fullwidth is-rounded">
                        <span class="icon is-small">
                            <i class="fas fa-hands-wash"></i>
                        </span>
                        <span>Gloves</span>
                    </button>

                    <button className="button is-danger is-fullwidth is-rounded">
                        <span class="icon is-small">
                            <i class="fas fa-user-nurse"></i>
                        </span>
                        <span>
                            Gowns &amp; Shoe Covers
                        </span>
                    </button>

                </div>

            </div>
        </div>
    )
}
