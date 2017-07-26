// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Click schema
var Article = require("./models/nytArticles");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3001;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("build"));

// -------------------------------------------------

// MongoDB configuration (Change this URL to your own DB)

//heroku sets your dbUri
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect("mongodb://localhost/MERN");
}

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered
app.get("/api/articles", function(req, res) {

  // This GET request will search for the latest clickCount
  Article.find({}).exec(function(err, doc) {

    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.delete('/api/delete/:idB', function(req, res) {
  console.log(req.params.idB);
  Article.findByIdAndRemove(req.params.idB, function(err, response){
    if (err) {console.log(err)}
      else {console.log("Article Removed")}
  })
})


// This is the route we will send POST requests to save each click.
// We will call this route the moment the "click" or "reset" button is pressed.
app.post("/api/saved", function(req, res) {
    console.log(req.body);

    var headline = req.body.headline;
    var published = req.body.published;
    var url = req.body.url;

    var article = new Article({headline: headline, published: published, url: url});
    article.save(function(err){
      if(err) {console.log(err)}
        else{console.log("saved")}
    })
    res.send("Article Saved!");
  // Note how this route utilizes the findOneAndUpdate function to update the clickCount
  // { upsert: true } is an optional object we can pass into the findOneAndUpdate method
  // If included, Mongoose will create a new document matching the description if one is not found
  // Click.findOneAndUpdate({
  //   clickID: clickID
  // }, {
  //   $set: {
  //     clicks: clicks
  //   }
  // }, { upsert: true }).exec(function(err) {

  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     res.send("Updated Click Count!");
  //   }
  //});
});

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
