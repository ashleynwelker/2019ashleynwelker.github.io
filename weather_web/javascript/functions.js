// Weather Site Javascript Functions
// Variables for Function Used
let temp = 31;
let speed = 5;
let direction = "SW";
let elevationInMeters = 1514.246;

// Write a function to get the specific condition of the weather 
function getCondition(weather) {
    // These 'if' and 'else if' statements go through the possibilities of adjectives used for the weather
    // and returns the value that will be used by the following switch statement.
    if (weather.includes("cloud") || weather.includes("overcast")) {
        return "cloudy";
    }
    else if (weather.includes("sunny") || weather.includes("clear") || weather.includes("fair")) {
        return "clear";
    }
    else if (weather.includes("wet") || weather.includes("rain") || weather.includes("stormy") 
    || weather.includes("drizzly")) {
        return "rain";
    }
    else if (weather.includes("foggy") || weather.includes("murky") || weather.includes("smoggy")) {
        return "fog";
    }
    else if (weather.includes("frosty") || weather.includes("snowy")) {
        return "snow";
    }
    else;
}
let weather = "crystal clear";
let weatherRightNow = getCondition(weather);

// Write a function that will change the image depending on the weather information retrieved 
function changeSummaryImage(curWeather) {
    console.log(curWeather);
    // backgroundImage is a variable that holds the value retrieved from the HTML
    let backgroundImage = document.getElementById("currentWeather");
    // This switch statement will go through and display the correct image based on the information
    switch(curWeather) {
        case "cloudy":
            backgroundImage.setAttribute("class", "clouds");
            break;
        case "clear":
            backgroundImage.setAttribute("class", "clear");
            break;
        case "rain":
            backgroundImage.setAttribute("class", "rain");
            break;
        case "fog":
            backgroundImage.setAttribute("class", "fog");
            break;
        case "snow":
            backgroundImage.setAttribute("class", "snow");
            break;
    }
}

changeSummaryImage(weatherRightNow);


// Calculate the Wind Chill
function buildWC(speed, temp) {

    let feelTemp = document.getElementById('feelTemp');

    // Compute the Windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    // Round the answer down to integer
    wc = Math.floor(wc); 

    // If chill is greater than temp, return the temp
    wc - (wc > temp)?temp:wc; 

    // Display the windchill
    console.log(wc);
    wc = "Feels like " + wc + "&deg;F";
    feelTemp.innerHTML = wc;
}

buildWC(speed,temp);

// Wind Dial Function
function windDial(direction){

    // Get the wind dial container
    let dial = document.getElementById("dial");
    console.log(direction);

    // Determine the dial class
    switch (direction){
        case "North":
        case "N": 
         dial.setAttribute("class", "n");
         break;
        case "NE":
        case "NNE":
        case "ENE":
         dial.setAttribute("class", "ne");
         break;
        case "NW":
        case "NNW":
        case "WNW":
         dial.setAttribute("class", "nw");
         break;
        case "South":
        case "S":
         dial.setAttribute("class", "s");
         break;;
        case "SE":
        case "SSE":
        case "ESE":
         dial.setAttribute("class", "se");
         break;
        case "SW":
        case "SSW":
        case "WSW":
         dial.setAttribute("class", "sw");
         break;
        case "East":
        case "E":
         dial.setAttribute("class", "e");
         break;
        case "West":
        case "W":
         dial.setAttribute("class", "w");
         break;
    }
}

windDial(direction);

// Convert meters function
function convertMeters(elevationInMeters) {

    // Convert value to feet
    let elevationInFeet = elevationInMeters * 3.28084;
    
    // Round value to the nearest integer
    let roundedNumber = Math.round(elevationInFeet);

    // Return the new value
    return roundedNumber;
}

// Call the function and set the variable
let elevationInFeet = convertMeters(elevationInMeters);

// Check to make sure the value is correct
console.log(`converted elevation from ${elevationInMeters} to ${elevationInFeet}.`);

// Inject value into the HTML
document.getElementById("elevation").innerHTML = elevationInFeet + " ft. |";
