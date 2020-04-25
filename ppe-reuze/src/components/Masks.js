import React from 'react';
import { Link } from 'react-router-dom';
import n95_logo from './images/N95.png';
import surgical_mask from './images/SurgicalMask.png';

export default function Masks() {
	return (
		<section className="section">
			<div className="container has-text-centered app-content">
				<h1 className="title">What kind of mask do you have?</h1>
				<div className="columns">
					<div className="column">
						<Link to="/masks/n95">
							<div className="box">
								<img src={n95_logo} width="50" alt="N95 mask" />
								<br />
                        N95 Respirator
                        </div>
						</Link>
					</div>
					<div className="column">
						<Link to="/masks/surgical">
							<div className="box">
								<img src={surgical_mask} width="100" alt="Surgical Mask" />
								<br />
                        Surgical Mask</div>
						</Link>
					</div>
				</div>
				<Link to="/start">
					<button className="button is-rounded">
						<i class="fas fa-arrow-left"></i>&nbsp;<span>Back</span>
					</button>
				</Link>
			</div>
		</section>
	)
}