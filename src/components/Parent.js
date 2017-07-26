//import dependencies and components
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-materialize';
import Form from './Form';
import Results from './Results';
import Saved from './Saved';
import helper from '../utils/helpers';

class Parent extends React.Component {
  constructor() {
  	//build the constructor and grant access to React.Component constructor;
    super();
    //define Parent state
    this.state = {
    
       results: []
     };
//bind this state to a handler function(s)
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
}
//arrow functions create implicit binding to this.
    // handleChange = (event) => {
    // 	var newState = {};
    // 	newState[event.target.id] = event.target.value;
    // 	this.setState(newState);
    // }

//how to write class functions without arrow functions - don't forget to bind them
   //  handleChange(event){
		// 		var newState = {};
   	//  	newState[event.target.id] = event.target.value;
   	//  	this.setState(newState);
   //  }.bind(this)

    // componentDidMount() {
    // 	//Ajax can happen here.
    // }

    handleSubmit = (event, topic, startYear, endYear) => {
      event.preventDefault();
      console.log(topic);
      console.log(startYear);
      console.log(endYear);
      helper.nytQuery(topic, startYear, endYear)
      .then(response => {
      	this.setState({results: response});
      	console.log(this.state.results);
      });
    }

		handleClick = (index) => {
	  console.log(this.state.results[index]);
	  helper.postArticle(this.state.results[index].headline.print_headline, this.state.results[index].pub_date, this.state.results[index].web_url)
	 	 }

  render() {
    return (	  
	     <div>


		<div className="container">


				<Form handleSubmit={this.handleSubmit} />



				

					
		  
									

		<Route exact path="/saved" render={()=> <Saved />} />
	 <Route exact path="/results" render={() =>  <Results resultsArray={this.state.results} handleClick={this.handleClick} />} />
			

       </div>
     </div>  					
	  )
  }
}

export default Parent;

     // <Route exact path="/" component={Form} handleClick={this.handleSubmit}/>
     // <Route exact path="/results" component={Results} resultsArray={this.state.results} handleClick={this.handleClick}/> 


     //  <Saved  />

     //<Results resultsArray={this.state.results} handleClick={this.handleClick} />