//Global Local variables

//used for counting table data
var boxCount = 1;
// giving a different color to each box
var color = ["blue", "purple", "red", "orange", "yellow"];
//variable to store latest value of the left property for boxes
var leftValue = 0;
// Account 1 value
var acct1Value = 100;






$("#accountSubmit").on("click", function () {
  //prevent anoying refresh
  event.preventDefault();

  // capture user input value
  acct1Value = parseFloat($("#account-value").val().trim());
  
  // Preventing input of values other than numbers
  if (isNaN(acct1Value)) {
    $("#prompt1").text("Invalid input")
  } else {
    // clear prompt screen if there is anyting there
    $("#prompt1").empty();

    // print to html the value
    $("#display-value").text("$" + acct1Value);

  }



});





// click function for Box 2 form submit
$("#formSubmit").on("click", function () {
  //prevent anoying refresh
  event.preventDefault();
  //gather inputs from form
  var name = $("#name1").val().trim();
  var value = parseFloat($("#value1").val().trim());

  // ::MAJOR LOGIC:: if valid input then create box for it
  if (name === "" && isNaN(value)) {
    $("#prompt").text("Invalid input");
  } else {

    // clear prompt screen if there is anyting there
    $("#prompt").empty();

    // ****** creating box for visual ********

    var box = $("<div>");
    // giving box properties of other boxes
    box.attr("id", "box1");
    // inserting text into box
    box.html("<p>Name: " + name + "</p><p>Value: " + value + "</p>");
    // sizing box
    box.css("width", (value/acct1Value * 100) + "%");
    
    
    








    // first find percentage of input to 
    box.css("left", leftValue);
    // setting background color
    box.css("background-color", color[Math.floor(Math.random() * color.length)]);

    // left offset will need to be the same percentage of the acct1value but to the 700px div and added to the leftValue variable

    // adding value to left value
    
    // figure out percentage of 700px div
    var perc = (value/acct1Value);

    // find magic number from percentage of 700
    // use case - 25 - what is 25 percent of 700
    var magicNumber = 700*perc;

    leftValue += magicNumber;



    // console.log(value, leftValue);
    $("#graph1").append(box);

    // ****** END creating box for visual ********


    // ****** creating table data entry for box ********

    // creating variables for html elements
    var tableRow = $("<tr>");
    var tableEntryNumber = $("<td>");
    var tableEntryName = $("<td>");
    var tableEntryValue = $("<td>");

    // assigning appropriate variables to html elements

    tableEntryName.text(name);
    tableEntryValue.text(value);
    tableEntryNumber.text(boxCount);
    // incrementing boxCount variable
    boxCount++

    // appending variables together 

    tableRow.append(tableEntryNumber);
    tableRow.append(tableEntryName);
    tableRow.append(tableEntryValue);

    // append tableRow to page
    $("#account1-table").append(tableRow);

    // ****** ENDcreating table data entry for box ********


  }//end if-else statement
});