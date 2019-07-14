// Weather Site Javascript Functions
// Variables for Function Used
let temp = 31; 
let speed = 5;
let direction = "NE"; 
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
    else if (weather.includes("wet") || weather.includes("rain") || weather.includes("storm") 
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
    let frontImage = document.getElementById("weather-picture");
    // This switch statement will go through and display the correct image based on the information
    switch(curWeather) {
        case "cloudy":
            backgroundImage.setAttribute("class", "clouds");
            frontImage.setAttribute("class", "clouds")
            break;
        case "clear":
            backgroundImage.setAttribute("class", "clear");
            frontImage.setAttribute("class", "clear");
            break;
        case "rain":
            backgroundImage.setAttribute("class", "rain");
            frontImage.setAttribute("class", "rain");
            break;
        case "fog":
            backgroundImage.setAttribute("class", "fog");
            frontImage.setAttribute("class", "fog");
            break;
        case "snow":
            backgroundImage.setAttribute("class", "snow");
            frontImage.setAttribute("class", "snow");
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

// This will convert the time to a 12 hour format
function format_time(hour) {
    if(hour > 23) {
        hour-= 24;
    }
    let amPM = (hour > 11) ? "pm" : "am";
    if(hour > 12) {
        hour -= 12;
    }
    if(hour == 0) {
        hour = "12";
    }
    return hour + amPM;
}

// Build the hourly temperature list
function buildHourlyData(nextHour,hourlyTemps) {
    // Data comes from a JavaScript object of hourly temp name - value pairs
    // Next hour should have a value between 0-23
    // The hourlyTemps variable holds an array of temperatures
    /* Line 8 builds a list item showing the time for the next hour and then 
     the first element (value in index 0) from the hourly temps array */
    let hourlyListItems = '<li>' + format_time(nextHour) + ': ' + hourlyTemps[0] + '&deg;F | </li>';
    // Build the remaining list items using a for loop
    for (let i = 1, x = hourlyTemps.length; i < x; i++) {
        hourlyListItems += '<li>' + format_time(nextHour+i) + ': ' + hourlyTemps[i] + '&deg;F | </li>';
    } 
    console.log('HourlyList is: ' +hourlyListItems);
    return hourlyListItems;
}

// Get the next hour based on the current time
let date = new Date();
let nextHour = date.getHours() + 1;

"use strict"

// Call the function to get our location
getGeoLocation(); 

// Setup localStorage
var storage = window.localStorage;
var idHeader = {
    headers: {
        "User-Agent": "Student Learning Project = ray13008@byui.edu"
    }
};

// Gets longitude and latitude of current location
function getGeoLocation() {
    const status = document.getElementById("status");
    status.innerHTML = 'Getting Location...';
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            // Combine the values
            const locale = lat + "," + long;
            console.log(`Lat and Long are: ${locale}.`);

            // Call the getLocation function, send locale
            getLocation(locale);
        })
    } else {
        status.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
    } // end else
} // End getGeoLocation

// Gets location information from the NWS API
function getLocation(locale) {
    const URL = "https://api.weather.gov/points/" + locale;
    // NWS User-Agent header (built above) will be the second parameter
    fetch(URL, idHeader)
    .then(function(response){
        if(response.ok){
            return response.json();
        }
        throw new Error('Response not OK.');
    })
    .then(function (data) {
        // Let's see what we got back
        console.log('Json object from getLocation function:')
        console.log(data);
        // Store data to localstorage
        storage.setItem("locName", data.properties.relativeLocation.properties.city);
        storage.setItem("locState", data.properties.relativeLocation.properties.state);

        // Next, get the weather station ID before requesting current conditions
        // URL for station list is in the data object
        let stationURL = data.properties.observationStations;
        // Call the function to get the list of weather stations
        getStationId(stationURL);
    })
    .catch(error => console.log('There was a getLocation error: ', error))
} // End getLocation function

// Gets weather station list and the nearest weather station ID from the NWS API
function getStationId(stationsURL) {
    // NWS User-Agent header (built above) will be the second parameter
    fetch(stationsURL, idHeader)
    .then(function(response){
        if(response.ok){
            return response.json();
        }
        throw new ERROR('Response not OK.');
    })
    .then(function (data) {
        // Let's see what we got back
        console.log('From getStationId function:');
        console.log(data);

        // Store station ID and elevation (in meters - will need to be converted to feet)
        let stationId = data.features[0].properties.stationIdentifier;
        let stationElevation = data.features[0].properties.elevation.value;
        console.log('Station and Elevation are: ' + stationId, stationElevation);

        // Store data to localstorage
        storage.setItem("stationId", stationId);
        storage.setItem("stationElevation", stationElevation);

        // Request the Current Weather for this station
        getWeather(stationId);
    })
    .catch(error => console.log('There was a getStationId error: ', error))
} // End getStationId function

// Gets current weather information for a specific weather station from the NWS API
function getWeather(stationId) {
    // This is the URL for current observation data
    const URL = 'https://api.weather.gov/stations/' + stationId + '/observations/latest';
    // NWS User-Agent header (built above) will be the second parameter
    fetch(URL, idHeader)
    .then(function(response){
        if(response.ok){
            return response.json();
        }
        throw new ERROR('Response not OK.');
    })
    .then(function (data) {
        // Let's see what we got back
        console.log('From getWeather function:');
        console.log(data);

        // Store weather information to localStorage
        storage.setItem("elevation", data.properties.elevation.value);
        storage.setItem("windDirection", data.properties.windDirection.value);
        storage.setItem("gusts", data.properties.windGust.value);
        storage.setItem("windSpeed", data.properties.windSpeed.value);
        storage.setItem("firstCoordinate", data.geometry.coordinates[0]);
        storage.setItem("secondCoordinate", data.geometry.coordinates[1]);
        storage.setItem("summaryWeather", data.properties.textDescription);
        storage.setItem("maxTemp", data.properties.maxTemperatureLast24Hours.value);
        storage.setItem("minTemp", data.properties.minTemperatureLast24Hours.value);

        // Build the page for viewing

    })
    .catch(error=> console.log('There was a getWeather error: ', error))
} // End getWeather function
