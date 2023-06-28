function convert() {
  // Get the input values
  var fromUnit = document.getElementById("from-unit").value;
  var toUnit = document.getElementById("to-unit").value;
  var fromValue = document.getElementById("from-value").value;

  // Convert the input value to meters
  var meters;
  switch (fromUnit) {
    case "m":
      meters = fromValue;
      break;
    case "km":
      meters = fromValue * 1000;
      break;
    case "cm":
      meters = fromValue / 100;
      break;
    case "ft":
      meters = fromValue / 3.281;
      break;
    case "in":
      meters = fromValue / 39.37;
      break;
  }

  // Convert meters to the desired unit
  var result;
  switch (toUnit) {
    case "m":
      result = meters;
      break;
    case "km":
      result = meters / 1000;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "ft":
      result = meters * 3.281;
      break;
    case "in":
      result = meters * 39.37;
      break;
  }

  // Update the "to value" input field with the result
  document.getElementById("to-value").value = result;
}
