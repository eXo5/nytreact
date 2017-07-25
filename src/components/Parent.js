
import React from 'react';

import ReactDOM from 'react-dom';

//import parentcss from 'style.css';
import { Button, Card, Row, Col } from 'react-materialize';
import Form from './Form';
import Results from './Child';

import helpers from '../utils/helpers';

class Parent extends React.Component {
  constructor() {
  	//build the constructor and grant access to React.Component constructor;
    super();
    //define Parent state
    this.state = {
    //   topic: "",
    //   startYear: "",
    //   endYear: "",
       results: []
     };
//bind this state to a handler function(s)
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
}
//arrow functions work as well.
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
   //  }

    // componentDidMount() {
    // 	//Ajax can happen here.
    // }

    handleSubmit = (event, topic, startYear, endYear) => {
      event.preventDefault();
      console.log(topic);
      console.log(startYear);
      console.log(endYear);
      helpers.nytQuery(topic, startYear, endYear)
      .then(response => {
      	this.setState({results: response});
      	console.log(this.state.results);
      });
    }

		handleClick = (index) => {
	  console.log(this.state.results[index].headline.main);
	  //handler.postArticle(this.state.results[index].headline.main, this.state...)
	 	 }

  render() {
    return (	  
	     


		<div className="container">

			<div className="child">
				<Form handleSubmit={this.handleSubmit} />
			</div>

			<div className="results">
				<Results resultsArray={this.state.results} handleClick={this.handleClick} />
			</div>	

		</div>
									
	    

	 
			
	      					
	  )
  }
}

export default Parent;