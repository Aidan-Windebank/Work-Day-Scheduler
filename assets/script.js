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




// dayJS stuff
const today = dayjs();
const currentHour = today.format('HH')

// sets current day to header of planner
$('#currentDay').text(today.format('dddd, MMMM YYYY'));



// Array of objects to store and loop through data
const dailySchedule = [
  {
    block: "0",
    displaytime: "9 AM",
    twentyFourHour: "09",
    tasks: "",
    button: ""
  },
  {
    block: "1",
    displaytime: "10 AM",
    twentyFourHour: "10",
    tasks: "",
    button: ""
  },
  {
    block: "2",
    displaytime: "11 AM",
    twentyFourHour: "11",
    tasks: "",
    button: ""
  },
  {
    block: "3",
    displaytime: "12 PM",
    twentyFourHour: "12",
    tasks: "",
    button: ""
  },
  {
    block: "4",
    displaytime: "1 PM",
    twentyFourHour: "13",
    tasks: "",
    button: ""
  },
  {
    block: "5",
    displaytime: "2 PM",
    twentyFourHour: "14",
    tasks: "",
    button: ""
  },
  {
    block: "6",
    displaytime: "3 PM",
    twentyFourHour: "15",
    tasks: "",
    button: ""
  },
  {
    block: "7",
    displaytime: "4 PM",
    twentyFourHour: "16",
    tasks: "",
    button: ""
  },
  {
    block: "8",
    displaytime: "5 PM",
    twentyFourHour: "17",
    tasks: "",
    button: ""
  },
]



// Loop to set up each hour block from daily schedule array
dailySchedule.forEach(function (dailySchedule) {

  // creates row to populate hour block items
  var hourRow = $("<div>");
  hourRow.attr('class', 'row');
  $("#main-container").append(hourRow);

  // sets time on left side of hour block
  var timeBlock = $('<div>');
  timeBlock.addClass("col-2 col-md-1 hour text-center");
  timeBlock.text(dailySchedule.displaytime);
  hourRow.append(timeBlock);

  // sets text area box and displays color depending on time of day
  var textBlock = $('<textarea>');
  textBlock.addClass("col-8 col-md-10 description");
  var blocktime = dailySchedule.twentyFourHour
  if (blocktime < currentHour) {
    textBlock.addClass("past");
  } else if (blocktime === currentHour) {
    textBlock.addClass("present");
  } else {
    textBlock.addClass("future");
  }
  textBlock.text(dailySchedule.tasks);
  hourRow.append(textBlock);

  // adds button to far end of hour block
  var button = $('<button>');
  button.addClass("btn saveBtn col-2 col-md-1");
  button.addClass("fas fa-save");
  hourRow.append(button);
})



const buttonClick = $("#main-container").children('div').children('button')
buttonClick.on("click", function (event) {
  event.preventDefault();

  var saveTasks = dailySchedule.tasks

  console.log(saveTasks)

})


















