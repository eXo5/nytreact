import React from 'react';
import {Row, Col, Button} from 'react-materialize';

import '../style.css'; 
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
      <div key={i} className='row'><p id={i} className="articleName" onClick={this.handleClick}>{element.headline.print_headline}</p><p className="pubIndent">Published: {element.pub_date}</p><a href={`${element.web_url}!`}>{element.headline.print_headline}</a><hr /></div>
      )
  });
  
  return (

      <Row>
        <h3>Articles</h3>
          <div> {headline} </div>
       </Row> 
        

    )
  }
}
export default Results;

// const Results = (props) => {
//   return (<Row)
// }