import React from 'react';
import { Link } from 'react-router-dom';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import config from '../aws-exports';
import UserContext from './UserContext';
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
              contains: "${this.props.match.params.type}"
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
								<h1 className="title">{this.title(this.props.match.params.type)}</h1>
							</div>
						</div>
						
						<div className="column"></div>

						</div>

							<br /><br />

							<div>
								<h1 className="subtitle">Reuze Recommendation</h1>
								{this.recommendation(this.props.match.params.type)}
							</div>
							<br /><br />

							<div>
								<h1 className="subtitle">User Submitted &nbsp; &nbsp;
                        <Link to={{
										pathname: '/addsubmission',
										state: {
											type: this.props.match.params.type
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


// Recommendations start here

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

function N95() {
	return (
		<div className="card">
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-4 has-text-black">Heat Treatment</p>
						<p className="subtitle is-6 has-text-black">Reuze Team</p>
					</div>
				</div>
				<div className="content">
					<p><strong>Equipment Needed:</strong> Oven</p>
            Suspend the masks in hot air (e.g. oven) at 70C for 30 minutes without contacting or putting the masks too close to a metal surface.
                <br /><br />
					<p><strong>Source</strong>: <a href="https://utrf.tennessee.edu/information-faqs-performance-protection-sterilization-of-masks-against-covid-19">https://utrf.tennessee.edu/information-faqs-performance-protection-sterilization-of-masks-against-covid-19</a></p>
				</div>
			</div>
		</div>
	)
}

function SurgicalMask() {
	return (
		<div className="card">
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-4 has-text-black">Don't Reuse</p>
						<p className="subtitle is-6 has-text-black">Reuze Team</p>
					</div>
				</div>
				<div className="content">
					Surgical masks may be worn continuously until visibly soiled or moist from respirations.
            They should be carefully folded so that the outer surface is held inward and against itself to reduce contact with the outer surface during storage. The folded mask can be stored between uses in a clean, sealable paper bag or breathable container.<br />
				</div>
			</div>
		</div>
	)
}

function LatexGloves() {
	return (
		<div className="card">
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-4 has-text-black">Hibiscrub (Chlorhexidine)</p>
						<p className="subtitle is-6 has-text-black">Reuze Team</p>
					</div>
				</div>
				<div className="content">
					<p><strong>Equipment Needed:</strong> Hibiscrub (Chlorhexidine)</p>
            Wet gloved hands, add a small amount of hibiscrub, wash hands together for 1 minute.
            Applies to Ansell Medical 'Medi-Grip', Regent 'Biogel D'.<br />
				</div>
			</div>
		</div>
	)
}

function NitrileGloves() {
	return (
		<div className="card">
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-4 has-text-black">Alcohol Based Hand Rub</p>
						<p className="subtitle is-6 has-text-black">Reuze Team</p>
					</div>
				</div>
				<div className="content">
					<p><strong>Equipment Needed:</strong> Alcohol-Based Hand Sanitizer</p>
					<strong>Steps:</strong> Take a small amount, apply to gloved hands, rub hands together until dry (typically 20-30 seconds)<br />
				</div>
			</div>
		</div>
	)
}

function Gowns() {
	return (
		<div className="card">
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-4 has-text-black">Don't Reuse</p>
						<p className="subtitle is-6 has-text-black">Reuze Team</p>
					</div>
				</div>
				<div className="content">
					Paper and plastic gowns can be reused as long as they are not visibly soiled. Alternatives to paper or plastic gowns include patient gowns, disposable lab coats, and disposable coveralls. Cloth gowns may be used as well.
            </div>
			</div>
		</div>
	)
}


export default Submissions;