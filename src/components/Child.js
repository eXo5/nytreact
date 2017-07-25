// Include React
import React from 'react';
import {Button} from 'react-materialize';
// Here we include all of the sub-components
// import GrandChild from './GrandChild';

// Create the Child Component
 class Child extends React.Component {
   constructor(){
    super();

    this.state = {
      topic: "",
      startYear: "",
      endYear: ""
    }

    this.handleChange = (event) => {
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    }
//     // Child has a state that follows the number of clicks
//     this.state = {
//       results: []
 };


  render(){
    return (
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
                  <Button onClick={(event) => {this.props.handleSubmit(event, this.state.topic, this.state.startYear, this.state.endYear )}} className="submit" type="submit">Submit Button</Button>
                </form>
                

              </div>
            <h5>Watch your query entries populate in real-time!</h5>  
            <p>Your query: {this.state.topic}</p>
            <p>Your start year:{this.state.startYear}</p>
            <p>Your end year: {this.state.endYear}</p>
            </div>


      
      
    );
  }
};

// Export the component back for use in other files
export default Child;
