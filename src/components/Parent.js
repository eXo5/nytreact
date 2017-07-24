
import React from 'react';

import ReactDOM from 'react-dom';

//import parentcss from 'style.css';
import { Button, Card, Row, Col } from 'react-materialize';
import Child from './Child';

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
    handleChange = (event) => {
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
    }
//how to write class functions without arrow functions - don't forget to bind them
   //  handleChange(event){
			// var newState = {};
   //  	newState[event.target.id] = event.target.value;
   //  	this.setState(newState);
   //  }

    // componentDidMount() {
    // 	//Ajax can happen here.
    // }


    handleSubmit = (event, topic, startYear, endYear) => {
      event.preventDefault();
      console.log(topic);
      console.log(startYear)
      console.log(endYear)
debugger;
      console.log(event.target);
      helpers.nytQuery(topic, startYear, endYear)
      .then(function(response){ 
      	//Holy shit.
      })
    }

  render() {
    return (	  
	     {/*PUT YOUR FORM AND YOUR HANDLE CHANGE AND HANDLE SUBMIT IN YOUR CHILD.  */}
	      <div className="row">
	      
	      	<div className="col s8">
	      		<h3>Please define your search</h3>


		      		<div className="row">
		      			<form className="col s12">
		      				<div className="input-field">
		      					<label htmlFor="topic">Query Topic</label>
		      					
		      					<input id="topic" value={this.state.topic} onChange={this.handleChange} type="text" className="validate" />
		      					
		      				</div>
		      				<div className="input-field">
		      					<input id="startYear" value={this.state.startYear} onChange={this.handleChange} type="text" className="validate" />
		      					<label htmlFor="startYear">Start Year</label>
		      				</div>	
		      				<div className="input-field">
		      					<input id="endYear" value={this.state.endYear} onChange={this.handleChange} type="text" className="validate" />
		      					<label htmlFor="endYear">End Year</label>
		      				</div>

		      				<div className="child">
		      					<Child updateParent={this.handleSubmit}/>
		      				</div>

		      			</form>

	      			</div>
	      		<h5>Watch your query entries populate in real-time!</h5> 	
						<p>Your query: {this.state.topic}</p>
	      		<p>Your start year:{this.state.startYear}</p>
	      		<p>Your end year: {this.state.endYear}</p>
	      		</div>
	      	</div>				
	    

	 
			
	      					
	      )
  }
}

export default Parent;