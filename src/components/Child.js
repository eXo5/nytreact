import React from 'react';
import {Row, Col} from 'react-materialize';

import helpers from '../utils/helpers';

class Results extends React.Component {
  constructor(props) {
    super(props);
}

// componentDidMount() {
//   console.log("Hey look at me!!");
//}

handleClick = event => {

  console.log(event.target.id);

  this.props.handleClick(event.target.id);

}
// componentDidUpdate() {
//   this.props.resultsArray.map(function(search, i) {
//     console.log(search)
//   })
// }

render() {
  let headline = this.props.resultsArray.map((element, i) => {
    return (
      <div key={i} className='row'><p id={i} onClick={this.handleClick} >{element.headline.main}</p></div>
      )
  });
  
  return (

      <Row>
        <h1>Testing</h1>
          <p> {headline} </p>
       </Row> 
        

    )
  }
}
export default Results;

// const Results = (props) => {
//   return (<Row)
// }