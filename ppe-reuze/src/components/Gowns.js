import React from 'react';
import { Link } from 'react-router-dom';

export default function Gowns() {
	return (
		<div className="container has-text-centered app-content">
			<h1 className="title">Gowns</h1>
			<br />
			<div className="box has-text-left">
				<p>Paper and plastic gowns can be reused as long as they are not visibly soiled.</p>
				<br />
				<p>Alternatives to paper or plastic gowns include patient gowns, disposable lab coats, and disposable coveralls. Cloth gowns may be used as well.</p>
			</div>
			<Link to="/">
				<button className="button is-rounded">
					<i class="fas fa-arrow-left"></i>&nbsp;<span>Back</span>
				</button>
			</Link>
		</div>
	)
}
