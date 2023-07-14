
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
dailySchedule.forEach(function (schedule, index) {

  // creates row to populate hour block items
  var hourRow = $("<div>");
  hourRow.attr('class', 'row');
  $("#main-container").append(hourRow);

  // sets time on left side of hour block
  var timeBlock = $('<div>');
  timeBlock.addClass("col-2 col-md-1 hour text-center");
  timeBlock.text(schedule.displaytime);
  hourRow.append(timeBlock);

  // sets text area box and displays color depending on time of day
  var textBlock = $('<textarea>');
  textBlock.addClass("col-8 col-md-10 description");
  var blocktime = schedule.twentyFourHour
  if (blocktime < currentHour) {
    textBlock.addClass("past");
  } else if (blocktime === currentHour) {
    textBlock.addClass("present");
  } else {
    textBlock.addClass("future");
  }
  textBlock.text(schedule.tasks);
  hourRow.append(textBlock);

  // adds button to far end of hour block
  var button = $('<button>');
  button.addClass("btn saveBtn col-2 col-md-1");
  button.addClass("fas fa-save");
  hourRow.append(button);
  


  // saves textarea input on button click to local storage
    var buttonClick = $(hourRow).children("button");
    $(buttonClick).on("click", function(){
      var hourRowTask = $(hourRow).children("textarea").val();
      localStorage.setItem(index, hourRowTask);
    })
   
    // repopulates anything in local storage to planner
    var task = localStorage.getItem(index)
    $(hourRow).children("textarea").val(task);

})
