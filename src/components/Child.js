import React from 'react';
import {Row, Col} from 'react-materialize';

import helpers from '../utils/helpers';

class Results extends React.Component {
  constructor(props) {
    super(props)



}

componentDidMount() {
  console.log("Hey look at me!!");
}

// componentDidUpdate() {
//   this.props.resultsArray.map(function(search, i) {
//     console.log(search)
//   })
// }

render() {
  let result = this.props.resultsArray.map(function(element){
    return (<p>{element.headline.main}</p>)
  })
  return (

      <Row>
        <h1>Testing</h1>
          <p> {result}
          </p>
       </Row> 
        

    )
  }
}
export default Results;

// const Results = (props) => {
//   return (<Row)
// }