// The idea behind this one is to input your wage roughly, then when you click start it will show how much you are making increimentally

// Calculate the second incriment based off of wage

/*

this is the number crunching for the wage calculator


Crunching some numbers for my website

$20 p/hour is how much per second?

How many seconds in an hour?

60 minutes
60 m * 60 s
3600

20.00 p/hr  / 3600 seconds
0.005555556


3600 * 0.005
18

*/

// Gather wage amount
let wage = 20;
// Calculate second increment
wage /= 3600;
// rounding to the nearest tenth
let wageIncrement = parseFloat(Math.round(wage * 100) / 100).toFixed(2);

// Create a timer for the game to run by
var stopwatch = {
  time: 0,
  piggyBank: "0.00",
  clockRunning: false,
  reset: function() {
    // Stop's timer and sets time to zero, as well as prints beginning to the page
    stopwatch.stop();
    stopwatch.time = 0;
    stopwatch.piggyBank = 0;
    $("#timer").text("00:00");
    $("#piggy-bank").text("00:00");
  },
  start: function() {
    //  TODO: Use setInterval to start the count here and set the clock to running.
    if (!stopwatch.clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      stopwatch.clockRunning = true;
    }
  },
  stop: function() {
    //  Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    stopwatch.clockRunning = false;
  },
  count: function() {
    // Check to see if time is zero and if so stop the timer and send message
    stopwatch.time++;
    var var2 = stopwatch.timeConverter(stopwatch.time);
    $("#timer").text(var2);

    //       Piggy bank calculating
    
    //       wageIncrement and Piggybank are floats due to how I'm handling 0.00 numbers. Parsing before adding together as strings concatenate

    stopwatch.piggyBank = parseFloat(wageIncrement) + parseFloat(stopwatch.piggyBank);
    
    //     Ensure that the number is rounded
    stopwatch.piggyBank = parseFloat(Math.round(stopwatch.piggyBank * 100) / 100).toFixed(2);
    
    //     Printing number to the screen
    $("#piggy-bank").text(stopwatch.piggyBank);
    
  },
  timeConverter: function(t) {
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};

$("#start").on("click", function() {
  stopwatch.start();
});

$("#pause").on("click", function() {
  stopwatch.stop();
});

$("#reset").on("click", function() {
  stopwatch.reset();
});

// TO-Do's

// input for wage.

// start button

// be able to see total made and also rate per second per minute etc

// every second see it add up into a bucket showing todays total.
// maybe database with much more history etc.
