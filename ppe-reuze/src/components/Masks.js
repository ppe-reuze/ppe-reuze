import React from 'react'

export default function Masks() {
    return (
        <TypeOfMask />
    )
}

function TypeOfMask() {
    return (
        <div className="container has-text-centered">
            <h1 className="title">What kind of mask do you have?</h1>
            <div className="box">N95</div>
            <div className="box">N95</div>
        </div>
    )
}