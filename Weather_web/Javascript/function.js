// Weather Site Javascript Functions
// Variables for Function Use
const temp = 31;
const speed = 5;

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

