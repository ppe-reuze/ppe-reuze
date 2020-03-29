import React from 'react'

export default function SelectPPE() {
    return (
        <div className="container has-text-centered">
            <h1 className="title">What would you like to sanitize?</h1>
            <div className="container">

                <div className="buttons are-large">
                    <button className="button is-outlined is-fullwidth">
                        <span class="icon is-small">
                            <i class="fas fa-head-side-mask fa-lg"></i>
                        </span>
                        <span>
                            Masks
                </span>
                    </button>

                    <button className="button is-outlined is-fullwidth">
                        <span class="icon is-small">
                            <i class="fas fa-glasses fa-lg"></i>
                        </span>
                        <span>
                            Goggles
                </span>
                    </button>

                    <button className="button is-outlined is-fullwidth">
                        <span class="icon is-small">
                            <i class="fas fa-hands-wash fa-lg"></i>
                        </span>
                        <span>Gloves</span>
                    </button>

                    <button className="button is-outlined is-fullwidth">
                        <span class="icon is-small">
                            <i class="fas fa-user-nurse fa-lg"></i>
                        </span>
                        <span>
                            Gowns
                </span>
                    </button>
                </div>

            </div>
        </div>
    )
}
