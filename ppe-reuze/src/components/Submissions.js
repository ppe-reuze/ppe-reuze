import React from 'react';
import { Link } from 'react-router-dom';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import config from '../aws-exports';
Amplify.configure(config)

class Submissions extends React.Component {

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
          }
        }
      }`;

    listQuery = async () => {
        const allSubmissions = await API.graphql(graphqlOperation(this.listSubmissions));
        console.log(JSON.stringify(allSubmissions));
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
        e.preventDefault();
        this.setState({ votes: this.state.votes + 1 })
    };

    downvote = async (e) => {
        e.preventDefault();
        this.setState({ votes: this.state.votes - 1 })
    };

    render() {

        return (
            <div className="container">

                <div className="columns">
                    <div className="column is-one-quarter"></div>
                    <div className="column">

                        <div className="title">
                            <Link to="/start">
                                <button className="button is-rounded">
                                    <i class="fas fa-arrow-left"></i>&nbsp;<span>Back</span>
                                </button>
                            </Link>
                        </div>
                        <div className="container has-text-right">
                            <h1 className="title">Sanitation Strategies for {this.title(this.props.match.params.type)}</h1>
                        </div>
                        <br /><br />

                        <div>
                        <h1 className="title">Reuze Recommendation</h1>
                        {this.recommendation(this.props.match.params.type)}
                        </div>
                        <br /><br />

                        <div>
                        <h1 className="title">User Submitted &nbsp; &nbsp;
                        <Link to={{
                            pathname: '/addsubmission',
                            state: {
                                type: this.props.match.params.type
                            }
                        }}>
                                <button className="button is-rounded">Submit your strategy</button>
                            </Link></h1>
                        {
                            this.state.submissions.length == 0 ? <p>No submissions yet.</p>:
                                this.state.submissions.map((item) => {
                                    return (
                                        <React.Fragment>
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-content">
                                                        <p className="title is-4 has-text-black">{item.title}</p>
                                                        <p className="subtitle is-6 has-text-black">{item.username}</p>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                <p><strong>Equipment Needed:</strong> {item.equipment}</p>
                                                    <p><strong>Steps:</strong> {item.description}</p>
                                                    <br />
                                                    <p><strong>Source</strong>: Self</p>
                                                </div>
                                            </div>
                                            <footer class="card-footer">
                                                <a href="#" class="card-footer-item" onClick={this.upvote}><i class="fas fa-thumbs-up"></i></a>
                                                <a href="#" class="card-footer-item">{this.state.votes}</a>
                                                <a href="#" class="card-footer-item" onClick={this.downvote}><i class="fas fa-thumbs-down"></i></a>
                                            </footer>
                                        </div>
                                        <br />
                                        </React.Fragment>
                                    )
                                })}


                    </div>
                    </div>
                    <div className="column is-one-quarter"></div>
                </div>
            </div>
        )
    }
}


// Recommendations start here

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