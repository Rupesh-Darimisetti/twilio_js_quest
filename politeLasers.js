// function to turn off laser when requested please
function getLaserSetting(parameters){
if (parameters =='please') return 'OFF';
else return "ON";
}

// takes parameters from user input
param = process.argv[2];
currentSetting = getLaserSetting(param);
console.log("The Current laser setting: " + currentSetting);
