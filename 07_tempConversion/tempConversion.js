const convertToCelsius = function(temp) {
  temp = Number(((temp - 32)* 5/9 ).toFixed(1));
  return temp;
};

const convertToFahrenheit = function(temp) {
  temp = Math.round((temp * 9/5 + 32)*10)/10;
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
