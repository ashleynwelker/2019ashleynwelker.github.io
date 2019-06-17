// Weather Site Javascript Functions
// Variables for Function Use
const temp = 31;
const speed = 5;
const direction = "NE"; 

// Calculate the Wind Chill
function buildWC(speed, temp) {

    const feelTemp = document.getElementById('feelTemp');

    // Compute the Windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    // Round the answer down to integer
    wc = Math.floor(wc); 

    // If chill is greater than temp, return the temp
    wc - (wc > temp)?temp:wc; 

    // Display the windchill
    console.log(wc);
    wc = "Feels like" + wc + "&deg;F";
    feelTemp.innerHTML = wc;
}

buildWC(speed,temp);

// Wind Dial Function
function windDial(direction){

    // Get the wind dial container
    const dial = document.getElementById("dial");
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
const elevationInFeet = convertMeters(elevationInMeters);

// Check to make sure the value is correct
console.log(`converted elevation from ${elevationInMeters} to ${elevationInFeet}.`);

// Inject value into the HTML
document.getElementById("elevation").innerHTML = elevationInFeet;

