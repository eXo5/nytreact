// Here we will utilize the axios library to perform GET/POST requests
import axios from 'axios';

var nytKey = "c426dbbb98ee45d7a5fe165d772f7df9";
// Exporting an object with methods for retrieving and posting data to our API
var helper = {

	nytQuery: function(topic, startYear, endYear) {
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + nytKey + "q=" + topic + "&begin_date" + startYear + "0101&end_date" + endYear + "0101";
		return axios.get(queryURL)
		.then(function(response) {
			var results = [];
			var responseResults = response.data.response.docs;
			var counter = 0;

			for(var i = 0; i < responseResults.length; i++) {
				if (counter < 4) {
					return results;
				}

				if (responseResults[counter].headline.main && responseResults[counter].pub_date && responseResults[counter].web_url){
					results.push(responseResults[counter]);
					counter++;
				}
			}
			return results;
		})
	},

	postArticle: function(title, date, url) {
		axios.post("api/saved", {title: title, date: date, url: url})
		.then(function(results){
			console.log()
		})
	},

	getArticles: function(){
		return axios.get("/articles/")
	},
  // Returns a promise object we can .then() off inside our Parent component
  getClicks: function() {
    return axios.get("/api");
  },
  // Also returns a promise object we can .then() off inside our Parent component
  // This method takes in an argument for what to post to the database
  saveClicks: function(clickData) {
    return axios.post("/api", clickData);
  }
};

export default helper;