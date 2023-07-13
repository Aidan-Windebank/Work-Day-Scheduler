// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});




// DAYJS STUFF TO SET DAY AND WORK WITH CHANGING HOURS

const today = dayjs();
const currentHour = today.format('hh, a')

// sets current day to header of planner
$('#currentDay').text(today.format('dddd, MMMM YYYY'));

console.log(currentHour)

// Array of objects to store and loop through data
const dailySchedule = [
  { 
    block: "0",
    time: "9",
    am_pm: "AM",
    tasks: "",
    button: ""
  },
  { 
    block: "1",
    time: "10",
    am_pm: "AM",
    tasks: "",
    button: ""
  },
  { 
    block: "2",
    time: "11",
    am_pm: "AM",
    tasks: "",
    button: ""
  },
  { 
    block: "3",
    time: "12",
    am_pm: "PM",
    tasks: "",
    button: ""
  },
  { 
    block: "4",
    time: "1",
    am_pm: "PM",
    tasks: "",
    button: ""
  },
  { 
    block: "5",
    time: "2",
    am_pm: "PM",
    tasks: "",
    button: ""
  },
  { 
    block: "6",
    time: "3",
    am_pm: "PM",
    tasks: "",
    button: ""
  },
  { 
    block: "7",
    time: "4",
    am_pm: "PM",
    tasks: "",
    button: ""
  },
  { 
    block: "8",
    time: "5",
    am_pm: "PM",
    tasks: "",
    button: ""
  },
]


// Loop to set up each hour block from daily schedule array
dailySchedule.forEach(function(dailySchedule){
  
  var hourRow = $("<div>");
  hourRow.attr('class', 'row');
  $("#main-container").append(hourRow);

  var timeBlock = $('<div>');
  timeBlock.addClass("col-2 col-md-1 hour text-center");
  timeBlock.text(dailySchedule.time + " " + dailySchedule.am_pm);
  hourRow.append(timeBlock);

  var textBlock = $('<textarea>');
  textBlock.addClass("col-8 col-md-10 description");
  textBlock.text(dailySchedule.tasks);
  hourRow.append(textBlock);

  var button = $('<button>');
  button.addClass("btn saveBtn col-2 col-md-1");
  button.addClass("fas fa-save");
  hourRow.append(button);

})

