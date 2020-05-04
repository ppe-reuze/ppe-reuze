import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<section className="hero is-info is-fullheight-with-navbar">
			<div class="hero-body">
				<div className="container">
					<div className="columns is-vcentered">
						<div className="column is-one-quarter">
							<img src="reuze.png" width="300" />
						</div>
						<div className="column">
							<h1 className="title is-1">Can I reuse PPE?</h1>
							<h2 className="subtitle is-4">Reuze allows you to access and share strategies for sanitizing and reusing personal protective equipment. Made for the COVID-19 pandemic.</h2>
        	                   <span className="tag is-warning is-small"><a href="https://datavant.com/pandemic-response-hackathon/" className="has-text-dark">A Pandemic Response Hackathon Spotlight Project</a></span>
                            <br />
							<br />
                            <br />
							<Link to="/start">
								<button className="button is-rounded">Get Started</button>
							</Link>
							<br />
							<br />
							<br />
							
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
