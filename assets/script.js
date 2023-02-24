
 $(document).ready(function() {
  //Use moment.js to get today's
  let Today = moment().format("MMMM Do YYYY");
  //Put the current date into the Jumbotron
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = Today;
    //get the present hour
  let thisHour = moment().format("HH");


  //Compare the time block on grid to actual hour and change class to so colour styling is applied
  $(".time-div").each(function () {
    var timeBlock = $(this).attr("id").split("-")[1];
   
    if (thisHour == timeBlock) {
      $(this).addClass("present");
    } else if (thisHour < timeBlock) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (thisHour > timeBlock) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

    //Activating the time block 'save button' clicks to store the data from the input in local storage
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      var value = $(this).siblings(".time-block").val();
      var time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time, value);
    });

    //Retrieving data from local storage 
      //retrieves items from local storage and sets them in proper places
  $("#hr-09 .time-block").val(localStorage.getItem("09"));
  $("#hr-10 .time-block").val(localStorage.getItem("10"));
  $("#hr-11 .time-block").val(localStorage.getItem("11"));
  $("#hr-12 .time-block").val(localStorage.getItem("12"));
  $("#hr-13 .time-block").val(localStorage.getItem("13"));
  $("#hr-14 .time-block").val(localStorage.getItem("14"));
  $("#hr-15 .time-block").val(localStorage.getItem("15"));
  $("#hr-16 .time-block").val(localStorage.getItem("16"));
  $("#hr-17 .time-block").val(localStorage.getItem("17"));
});