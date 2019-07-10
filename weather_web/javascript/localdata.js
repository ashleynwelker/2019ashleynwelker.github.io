"use strict"

fetchData(weatherURL);

let pageNav = document.getElementById('page-nav');
let statusContainer = document.getElementById('status'); 
let contentContainer = document.getElementById('main-content');

let weatherURL = "path/to/weather.json";
function fetchData(weatherURL) {
  let cityName = 'Greenville'; // The data we want from the weather.json file
  fetch(weatherURL)
  .then(function(response) {
    if(response.ok) {
      return response.json();
    }
    throw new Error('Network response was not OK.');
  })
  .then(function(data) {
    // Check the data object that was retrieved
    console.log(data);
    // Data is the full JavaScript object, but we only want the Greenville part.
    // Shorten the variable and focus only on the data we want to reduce typing.
    let g = data[cityName];

    // **************** Get the content *************

    // Get the location data
    let locName = g.City;
    let locState = g.State;
    // Put them together
    let fullName = locName + ', ' + locState;
    // See if it worked
    console.log('fullName is: ' + fullName);

    // Get the temperatuare data
      let locTemp = g.Temp;
      console.log(locTemp);

    // Get the wind data
      let wind = g.Wind;
      console.log(wind);

    // Get the current conditions

    // Get the hourly data

    // ****************** Display the content *********
    // Set the title with the location name at the first
    // Gets the title element so it can be worked with
    let pageTitle = document.getElementById('page-title');
    // Create a text node containing the full name
    let fullNameNode = document.createTextNode(fullName);
    // Inserts the fullName value before any other content that might exist
    pageTitle.insertBefore(fullNameNode, page.Title.childNodes[0]);
    // When this is done, the title should look something like this:
    // Greenville, SC | The Weather Site

    // Set the Location information
    // Get the h1 to display the city location
    let contentHeading = document.getElementById('contentHeading');
    contentHeading.innerHTML = fullName;
    // The h1 in main h1 should now say "Greenville, SC"

    // Set the temperature information
    document.getElementById('').innerHTML = locTemp;

    // Set the wind information
      document.getElementById('').innerHTML = wind;
      buildWC(wind,locTemp);

    // Set the current conditions information

    // Set the hourly temerature information

    // Change the status of the containers
    contentContainer.setAttribute('class', ''); // Removes the hide class
    statusContainer.setAttribute('class', 'hide'); // Hides the status container
  })
  .catch(function(error) {
    console.log('There was a fetch problem: ', error.message);
    statusContainer.innerHTML = 'Sorry, the data could not be processed.';
  })
}

pageNav.addEventListener('click', function(evt){

    // Get the city name
let cityName = evt.target.innerHTML;
switch (cityName) {
 case "Franklin":
  case "Greenville":
   case "Springfield":
    evt.preventDefault();
  break;
}
}







