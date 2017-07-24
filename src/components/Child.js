// Include React
import React from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
// Here we include all of the sub-components
// import GrandChild from './GrandChild';

// Create the Child Component
 class Child extends React.Component {
   constructor(){
    super();
    // this.props = {
      
    // }

    this.state = {
      topic: 'AMerica',
      startYear: "1999",
      endYear: "2003"
    }

//     // Child has a state that follows the number of clicks
//     this.state = {
//       results: []
 };


  render(){
    return (

      <Button onClick={(event) => {this.props.updateParent(event, this.state.topic, this.state.startYear, this.state.endYear )}} className="submit" type="submit">Submit Button</Button>

      
      
    );
  }
};

// Export the component back for use in other files
export default Child;
