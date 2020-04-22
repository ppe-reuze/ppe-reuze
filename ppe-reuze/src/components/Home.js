import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<section className="hero is-info is-fullheight-with-navbar">
			<div class="hero-body">
				<div className="container">
					<img src="reuze.png" width="150" />
					<h1 className="title">Reusing &amp; sanitizing PPE</h1>
					<h2 className="subtitle">Reuze is an app for healthcare professionals to easily access community-sourced, evidence based strategies for sanitizing personal protect equipment in the COVID-19 epidemic. As a verified healthcare professional, you can also submit your own strategies.</h2>
					<Link to="/start">
						<button className="button is-rounded">Get Started</button>
					</Link>
					<br />
					<br />
					<br />
					<a href="https://datavant.com/pandemic-response-hackathon/" target="_blank"><img src="hackathon_ribbon.png" width="300" /></a>
				</div>
			</div>
		</section>
	)
}
