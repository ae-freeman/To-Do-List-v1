// jshint esversion:6


//Export the result of the function, can use exports as short version for module.exports
exports.getDate = function() {

//Create new date object
const today = new Date();

//give options for displaying date instead of full timestamps
const options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

//As today is an object, can select it with '.' and do something to it
return today.toLocaleDateString("en-US", options);

};


exports.getDate = function() {


const today = new Date();

const options = {
  weekday: "long",

};

return today.toLocaleDateString("en-US", options);



};
