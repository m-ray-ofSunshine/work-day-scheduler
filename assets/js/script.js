var today = moment();
//console.log("Fake time is " + today.format("hh:mm"));//
var timeBox = $("#timeBox")
var workHours = [
    {time: "09:00:00",
    day: today.format("YYYY-MM-DD"),
    appt: ""},
    {time: "10:00 am",
    day: today.format("YYYY-MM-DD"),
    appt: ""},
    {time: "11:00 am",
    day: today.format("YYYY-MM-DD"),
    appt: ""},
    {time: "12:00 pm",
    day: today.format("YYYY-MM-DD"),
    appt: ""},
    {time: "1:00 pm",
    day: today.format("YYYY-MM-DD"),
    appt: ""},
    {time: "2:00 pm",
    day: today.format("YYYY-MM-DD"),
    appt: ""},
    {time: "3:00 pm",
    day: today.format("YYYY-MM-DD"),
    appt: ""},
    {time: "4:00 pm",
    day: today.format("YYYY-MM-DD"),
    appt: ""},
    {time: "5:00 pm",
    day: today.format("YYYY-MM-DD"),
    appt: ""}
];

$("#currentDay").text("Today is " + today.format("MMM Do, YYYY"));
if (today.format("HH") === "00"){
    localStorage.removeItem("schedule")
}
var saveButton = $(":button")

//Create timeblocks based on a work day from 9am-5pm

//Use moment to set a work day
workHours.forEach(displayTimeblocks)
function displayTimeblocks(chunk, time) {
    {
        var hour = workHours[time].time
        var day = workHours[time].day
        
        var block = $("<p>")
        var text = $("<input/>")
        var button = $("<input>").attr("type","submit")
        button.attr("value" ,"Save")
        button.attr("class", "save")
        //button.attr("onclick", saveEvent)
        text.attr("class", "input")
        text.attr("value", " ")
        text.attr("type", "text")
        block.text(moment(day + " " + hour ).format("hh"))
        if (today.format("hh") === moment(day + " " + hour ).format("hh") ) {
            block.css("background-color", "red")
        } else if (today.format("HH") < moment(day + " " + hour ).format("HH") ) {
            block.css("background-color", "green")
        }else {
            block.css("background-color", "gray")
        }
        
        block.append(text, button)
        timeBox.append(block)
        //console.log(saveButton)
        
        }
  
    }; 
$("form").submit(saveEvent)

function saveEvent(e) {
    e.preventDefault();
    hours = $(".input")
    for (var i=0; i<hours.length;i++ ){
        
        workHours[i].appt =hours[i].value
    }
    localStorage.setItem("schedule", JSON.stringify(workHours));
  
 }
 function renderEvents() {
    var previousEvents = JSON.parse(localStorage.getItem("schedule"));
    hours = $(".input")
    if (previousEvents !== null) {
        for (var i=0; i<previousEvents.length;i++ ){
        
            hours[i].value =previousEvents[i].appt

        }
    }
  }

 $(document).ready(function() {
    renderEvents();
    });
    //Iterate over the hours
    //For each hour create a time block with hour and text box
    //Create a save button

//Each time block needs to be color coded depending on past present and future
    //Use moment to determine when the hour is and if it is past present future
    //Apply the color to the text boxes

//When the timeblock is clicked you can enter text
    //Add a text box to the whole time block.

//When you click save the text is saved in local storage
    //Add the event to local storage in the correct hour

//When the page is refreshed the event is still there
    //Get any event stored in storage for the day and display it

