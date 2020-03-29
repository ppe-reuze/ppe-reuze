import React from 'react'

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <i class="fas fa-head-side-mask fa-lg"></i>&nbsp;<span>REUZE</span>
                    </a>
                    <span className="navbar-burger burger" data-target="navbarMenuHeroC">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroC" className="navbar-menu">
                    <div className="navbar-end">
                        <span className="navbar-item">
                            <a class="button is-success is-inverted" href="https://github.com/ppe-reuze">
                                <span className="icon">
                                    <i className="fab fa-github"></i>
                                </span>
                                <span>Source</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}