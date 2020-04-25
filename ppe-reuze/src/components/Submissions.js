import React from 'react';
import { Link } from 'react-router-dom';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import config from '../aws-exports';
import UserContext from './UserContext';

import N95 from './recommendations/N95';
import SurgicalMask from './recommendations/SurgicalMask';
import LatexGloves from './recommendations/LatexGloves';
import NitrileGloves from './recommendations/NitrileGloves';
import Gowns from './recommendations/Gowns';

Amplify.configure(config)

class Submissions extends React.Component {
	static contextType = UserContext;

	constructor(props) {
		super(props);
		this.state = {
			submissions: [],
			votes: 0
		}
	}

	componentDidMount() {
		this.listQuery()
	}

	listSubmissions = `query listSubmissions {
        listSubmissions(filter: {
            equipment: {
              contains: "${this.props.type}"
            }
          }){
          items{
            id
            username
            description
            title
            votes
            equipment
            supplies
            source
          }
        }
      }`;

	listQuery = async () => {
		const allSubmissions = await API.graphql(graphqlOperation(this.listSubmissions));
		this.setState({ submissions: allSubmissions.data.listSubmissions.items })
	};



	title(type) {
		switch (type) {
			case "n95":
				return "N95 Respirators";
			case "surgical":
				return "Surgical Masks";
			case "latex":
				return "Latex Gloves";
			case "nitrile":
				return "Nitrile Gloves";
			case "gowns":
				return "Gowns";
			default:
				return ""
		}
	}

	recommendation(type) {
		switch (type) {
			case "n95":
				return <N95 />
			case "surgical":
				return <SurgicalMask />
			case "latex":
				return <LatexGloves />
			case "nitrile":
				return <NitrileGloves />
			case "gowns":
				return <Gowns />
			default:
				return ""
		}
	}

	upvote = async (e) => {
		const { isLoggedIn } = this.context;
		e.preventDefault();
		if (isLoggedIn) {
			this.setState({ votes: this.state.votes + 1 })
		} else {
			alert("You need to be logged in to vote!");
		}
	};

	downvote = async (e) => {
		const { isLoggedIn } = this.context;
		e.preventDefault();
		if (isLoggedIn) {
			this.setState({ votes: this.state.votes - 1 })
		} else {
			alert("You need to be logged in to vote!");
		}
	};

	render() {

		return (
			<div className="container app-content">
				<section className="section">
					<div className="columns">
						<div className="column">

							<div className="columns">
								<div className="column">
									<div className="title">
										<Link to="/start">
											<button className="button is-rounded">
												<i className="fas fa-arrow-left"></i>&nbsp;<span>Back</span>
											</button>
										</Link>
									</div>
								</div>

								<div className="column">
									<div className="container has-text-centered">
										<h1 className="title">{this.title(this.props.type)}</h1>
									</div>
								</div>

								<div className="column"></div>

							</div>

							<br /><br />

							<div>
								<h1 className="subtitle">Reuze Recommendations</h1>
								{this.recommendation(this.props.type)}
							</div>
							<br /><br />

							<div>
								<h1 className="subtitle">User Submitted &nbsp; &nbsp;
                        <Link to={{
										pathname: '/submit',
										state: {
											type: this.props.type
										}
									}}>
										<button className="button is-rounded is-small">Submit your own</button>
									</Link></h1>
								{
									this.state.submissions.length === 0 ?
										<NoSubmissions />
										:
										this.state.submissions.map((item) => {
											return (
												<div className="card strategy-card" key={item.id} style={{ marginBottom: "1.5em" }}>
													<div className="card-content">
														<div className="media">
															<div className="media-content">
																<p className="title is-4 has-text-black">{item.title}</p>
																<p className="subtitle is-6 has-text-black">Submitted by {item.username}</p>
															</div>
														</div>
														<div className="content">
															<p><strong>Supplies Needed:</strong> {item.supplies}</p>
															<p><strong>Description/Steps:</strong> {item.description}</p>
															<p><strong>Source:</strong> {item.source}</p>
														</div>
													</div>
													<footer className="card-footer">
														<a className="card-footer-item" onClick={this.upvote}><i className="fas fa-thumbs-up"></i></a>
														<a className="card-footer-item">{this.state.votes}</a>
														<a className="card-footer-item" onClick={this.downvote}><i className="fas fa-thumbs-down"></i></a>
													</footer>
												</div>
											)
										})}
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

function NoSubmissions() {
	return (
		<div className="card">
			<div className="card-content">
				<div className="content">
					<p>No submissions yet.</p>
				</div>
			</div>
		</div>
	);
}

export default Submissions;