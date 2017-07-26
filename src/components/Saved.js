import React from 'react';
import {Row, Button} from 'react-materialize';
import {Link} from 'react-router-dom';
import helper from '../utils/helpers';
class Saved extends React.Component {
			constructor(){
				super();
				this.state = {
					saved: []
				}

			}

componentDidMount() {
	let displayArticles =	helper.getArticles().then(response =>{
			let articles = response.data.map((element, i) =>{
				var newArticles = [];
				for (let i = 0; i < response.data.length; i++) {
							var id = response.data[i]._id;
							var title = response.data[i].headline;
							var published = response.data[i].published;
							var url = response.data[i].url;
							newArticles.push({id: id, title: title, published: published, url: url});
					}
					
					console.log(newArticles)
					this.setState({saved: newArticles});
				})
			})
		}

		componentWillUpdate() {
			
		}

	deleteFromDB = (event, idB) => {
		idB = event.target.id;
		console.log(idB);
		helper.deleteArticle(event, idB);
		helper.getArticles().then(response =>{
			let articles = response.data.map((element, i) =>{
				var newArticles = [];
				for (let i = 0; i < response.data.length; i++) {
							var id = response.data[i]._id;
							var title = response.data[i].headline;
							var published = response.data[i].published;
							var url = response.data[i].url;
							newArticles.push({id: id, title: title, published: published, url: url});
					}
					this.setState({saved: newArticles})
				})
			})
	}

					
	
	


	

render() {
	let headlines = this.state.saved.map((element, i) => {
		return(<div><p id={element.id}>{element.title}</p><a href={element.url}>{element.url}</a><Button key={i} id={element.id} onClick={this.deleteFromDB}>Delete</Button></div>)
	})
		
	 
	return(
		<Row>
			<h5>Saved Articles</h5>
				{headlines}
		</Row>
		)
	}
}


export default Saved;