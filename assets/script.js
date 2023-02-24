
 $(document).ready(function() {
  //Use moment.js to get today's
  let Today = moment().format("MMMM Do YYYY");
  //Put the current date into the Jumbotron
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = Today;
  //get the current hour
  let theHour = moment().format("HH");
});
