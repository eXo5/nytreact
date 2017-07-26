import React from 'react';
import {Row} from 'react-materialize';
import helpers from '../utils/helpers';
class Saved extends React.Component {
			
componentDidMount(){
	helpers.getArticles().then(response =>{
		return (console.log(response));
		let articles = response.data.map(element =>{
				return (
					console.log(element)
					)
			})
		}) 
	}


	

render() {
	/*let headlines = helpers.getArticles().then(response => {
		return response.data.map(element => {
			return(
					<p>element.headline</p>
				)
		})
	}) */
	return(
		<Row>
			<h5>Saved</h5>
			
		</Row>
		)
	}
}


export default Saved;