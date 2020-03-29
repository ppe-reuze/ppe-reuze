import React from 'react';
import { Link } from 'react-router-dom';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import config from '../aws-exports';
Amplify.configure(config)

const listSubmissions = `query listTodos {
    listSubmissions{
      items{
        id
        username
        description
      }
    }
  }`;

const addSubmission = `mutation createTodo($username:String! $description: String!) {
    createSubmission(input:{
      username:$username
      description:$description
    }){
      id
      username
      description
    }
  }`;


class Submissions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            submissions: []
        }
    }

    componentDidMount() {
        this.listQuery()
    }

    submissionMutation = async () => {
        const submissionDetails = {
            username: 'vishnu',
            description: 'Amplify CLI rocks!'
        };

        const newSubmission = await API.graphql(graphqlOperation(addSubmission, submissionDetails));
        alert(JSON.stringify(newSubmission));
    };

    listQuery = async () => {
        console.log('listing submission');
        const allSubmissions = await API.graphql(graphqlOperation(listSubmissions));
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

    render() {

        return (
            <div className="container">

                <div className="columns">
                    <div className="column is-one-quarter"></div>
                    <div className="column">
                        
                        <div className="title">
                        <Link to="/">
                            <button className="button is-rounded is-info">
                                <i class="fas fa-arrow-left"></i>&nbsp;<span>Back</span>
                            </button>
                        </Link>
                            </div>
                        <div className="container has-text-right">
                        <h1 className="title">Sanitation Strategies for {this.title(this.props.match.params.type)}</h1>
                        <button className="button is-rounded">Submit a strategy</button>
                        </div>
                        <br /><br />

                        {
                        this.state.submissions === [] ? <p className="title">Loading...</p> :
                        this.state.submissions.map((item) => {
                            return (
                                <div className="card">
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <p className="title is-4 has-text-black">title</p>
                                                <p className="subtitle is-6 has-text-black">{item.username}</p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            {item.description}
                                            <br />
                                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                    <div className="column is-one-quarter"></div>
                </div>
            </div>
        )
    }
}

export default Submissions;