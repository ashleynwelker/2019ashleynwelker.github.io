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
