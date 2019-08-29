// jshint esversion:6

//Require packages
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/views/date.js"); //Use this module

//Set up express
const app = express(); //Create the express application named --> 'app'

const items = ["Buy food", "Edit podcast"];
const workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ //Allows parsing of requests (POST)
  extended: true
}));
app.use(express.static("public"));

//Set up routes
app.get("/", function(req, res) {

//Run module date.js, date was created above,
// run the function and assign the output to day
const day = date.getDate();

//display the list.ejs file with the title as var day, and to do items as var items.
//new to do items have been pushed into 'items'.
  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});

//Get info from form with method 'post'
app.post("/", function(req, res) {

//Request the new item the user typed into the form, as the input has name 'newItem'
  const item = req.body.newItem;


//'list' is the name of the submit button. This information is parsed (can see in console.log)
// if you add a value to the button, that gets logged as well. Work is logged because it was parsed from
//the listTitle, but in the ejs there are not quote marks around the ejs scriplet, so it ignores everything after the space.
 // Can tap into the value of work by using the key list, so have to request the list.
  if (req.body.list === "Work") {
    //add items to the work list
    workItems.push(item);
    //add them to the work route or page.
    res.redirect("/work");
  } else {
    //otherwise, add them to the original page
    items.push(item);
    res.redirect("/");
  }

});

//Set up the route for the work page
app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

//set up a route for the about page
app.get("/about", function(req, res){
  res.render("about");
});

//Run on server
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
