var today = moment();
var timeBox = $("#timeBox")
var workHours = [
    {time: "09:00:00",
    day: today.format("YYYY-MM-DD")},
    {time: "10:00 am",
    day: today.format("YYYY-MM-DD")},
    {time: "11:00 am",
    day: today.format("YYYY-MM-DD")},
    {time: "12:00 pm",
    day: today.format("YYYY-MM-DD")},
    {time: "1:00 pm",
    day: today.format("YYYY-MM-DD")},
    {time: "2:00 pm",
    day: today.format("YYYY-MM-DD")},
    {time: "3:00 pm",
    day: today.format("YYYY-MM-DD")},
    {time: "4:00 pm",
    day: today.format("YYYY-MM-DD")},
    {time: "5:00 pm",
    day: today.format("YYYY-MM-DD")}
];


$("#currentDay").text("Today is " + today.format("MMM Do, YYYY"));

console.log(moment(workHours[0].day + " " + workHours[0].time ).format("hh"));

//Create timeblocks based on a work day from 9am-5pm

    //Use moment to set a work day
    workHours.forEach(displayTimeblocks)
    function displayTimeblocks(chunk, time) {
       {
        var hour = workHours[time].time
        var day = workHours[time].day
        
        var block = $("<p>")
        var text = $("<input>")
        var button = $("<button>")
        button.text("Save")
        block.text(moment(day + " " + hour ).format("hh"))
        block.append(text, button)
        timeBox.append(block)
        }
  
    }; 
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

