let pageNav = document.getElementById('page-nav');
let statusContainer = document.getElemenyById('status');
let contentContainer = document.getElementById('main-content');

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
// Get the temperature data
let locTemp = g.Temp;
console.log(locTemp);

// Get the wind data
let wind = g.Wind;
console.log(wind);

// Set the temperature information
document.getElementById('').innerHTML = locTemp;

// Set the wind information
document.getElementById('').innerHTML = wind;
buildWC(wind,locTemp);






