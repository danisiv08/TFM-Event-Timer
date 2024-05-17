// Constants
const calculateBtn = document.querySelector(".btn");
const calculateCurrBtn = document.querySelector(".btn-current");
const lowerInterval = 16;
const upperInterval = 18;

// Event listener for the first button
calculateBtn.addEventListener("click", () => {
    var minutes = parseInt(document.getElementById('time-entered').value);
    var eventString = "";
    
    // Make calculations based on entered input
    var newTimeLower = (minutes + 16) % 60;
    var newTimeUpper = (minutes + 18) % 60;

    // Display result
    document.querySelector(".result").style.display = "block";
    eventString += "Next event @ XX:";

    // Format output
    if (newTimeLower < 10) {
        eventString += "0" + newTimeLower;
    } else {
        eventString += newTimeLower;
    }

    eventString += "-";

    if (newTimeUpper < 10) {
        eventString += "0" + newTimeUpper;
    } else {
        eventString += newTimeUpper;
    }

    document.querySelector(".result").innerHTML = eventString;

});

// Event listener for second button
calculateCurrBtn.addEventListener("click", () => {
    // Object for local time
    const date = new Date();
    const currentMinutes = date.getMinutes();

    // Calculate 
    var newTimeLower = (currentMinutes + 16) % 60;
    var newTimeUpper = (currentMinutes + 18) % 60;
    var eventString = "";

    document.querySelector(".result").style.display = "block";
    eventString += "Next event @ XX:";

    if (newTimeLower < 10) {
        eventString += "0" + newTimeLower;
    } else {
        eventString += newTimeLower;
    }

    eventString += "-";

    if (newTimeUpper < 10) {
        eventString += "0" + newTimeUpper;
    } else {
        eventString += newTimeUpper;
    }

    document.querySelector(".result").innerHTML = eventString;
});