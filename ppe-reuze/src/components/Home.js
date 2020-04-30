import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<section className="hero is-info is-fullheight-with-navbar">
			<div class="hero-body">
				<div className="container">
					<div className="columns is-vcentered">
						<div className="column is-one-quarter">
							<img src="reuze.png" width="200" />
						</div>
						<div className="column">
							<h1 className="title is-1">Reusing PPE</h1>
							<h2 className="subtitle is-4">Access and share strategies for sanitizing personal protective equipment in the COVID-19 pandemic.</h2>
							<Link to="/start">
								<button className="button is-rounded">Get Started</button>
							</Link>
							<br />
							<br />
							<br />
							<span className="tag is-warning is-small"><a href="https://datavant.com/pandemic-response-hackathon/" className="has-text-dark">A Pandemic Response Hackathon Spotlight Project</a></span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
