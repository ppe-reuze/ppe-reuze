import React from 'react';
import { Link } from 'react-router-dom';

export default function SelectPPE() {
	return (
		<div className="container has-text-centered app-content">
			<h1 className="title">What would you like to reuse?</h1>
			<div className="columns is-vcentered">
				<div className="column is-one-quarter"></div>
				<div className="column">
					<div className="container">
						<Link to="/masks">
							<button className="button is-rounded is-fullwidth is-large">
								<span class="icon is-small">
									<i class="fas fa-head-side-mask"></i>
								</span>
								<span>
									Masks
                            </span>
							</button>
						</Link>

						<br />

						<Link to="/gloves">
							<button className="button is-rounded is-fullwidth is-large">
								<span class="icon is-small">
									<i class="fas fa-hands-wash"></i>
								</span>
								<span>Gloves</span>
							</button>
						</Link>

						<br />

						<Link to="/gowns/gowns">
							<button className="button is-rounded is-fullwidth is-large">
								<span class="icon is-small">
									<i class="fas fa-user-nurse"></i>
								</span>
								<span>
									Gowns
                        </span>
							</button>
						</Link>
					</div>
				</div>
				<div className="column is-one-quarter"></div>
			</div>
		</div>
	)
}
