
 $(document).ready(function() {
  //Use moment.js to get today's
  let Today = moment().format("MMMM Do YYYY");
  //Put the current date into the Jumbotron
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = Today;
  
});

  //Compare the time block on grid to actual hour and change class to so colour styling is applied
  $(".time-div").each(function () {
    var timeBlock = $(this).attr("id").split("-")[1];
     //get the present hour
    let thisHour = moment().format("HH");
    if (thisHour == timeBlock) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (thisHour < timeBlock) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (thisHour > timeBlock) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
