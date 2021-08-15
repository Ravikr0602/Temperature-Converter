const choose_temperature = document.getElementById('choose_temperature');
const temperature_value = document.getElementById('temperature_value');
const Change_Fahrenheit = document.getElementById('Change_Fahrenheit');
const Change_Celsius = document.getElementById('Change_Celsius');
const Change_Kelvin = document.getElementById('Change_Kelvin');
const result = document.getElementById('result');

const result_array = ['fahrenheit_result', 'celsius_result', 'kelvin_result'];
let temperature = 0;

// Hide input box and result box
temperature_value.style.visibility = 'hidden';
result.style.visibility = 'hidden';

// for change in select box
choose_temperature.addEventListener('change', (e) => {
  // Show input box and result_box
  temperature_value.style.visibility = 'visible';
  result.style.visibility = 'visible';
  //current selected option values
  let given_value = e.target.value;
  // Hide selected result_box and display the rest
  if(given_value === '1') {
    temperature = 1;
    hideResult_box('fahrenheit_result');
  }
  if(given_value === '2') {
    temperature = 2;
    hideResult_box('celsius_result');
  }
  if(given_value === '3') {
    temperature = 3;
    hideResult_box('kelvin_result');
  }
});

// Updates converted values on input
temperature_value.addEventListener('input', (e) => {
  let given_value = e.target.value;
  convert(temperature, given_value);
});

// Hides currently selected result_list
function hideResult_box(result_box) {
  for(var i=0; i < result_array.length; i++) {
    if(result_array[i] === result_box) {
      let match = result_array[i];
      document.getElementById(match).style.display = 'none';
    } else {
      document.getElementById(result_array[i]).style.display = 'block';
    }
  }
  updateValues();
}

// function used only with hide_Result_box function
function updateValues() {
  let given_value = temperature_value.value;
  convert(temperature, given_value);
}

function convert(temperature, given_value) {
  switch(temperature) {
    case 1: // Fahrenheit change..
      Change_Celsius.innerHTML = ((given_value-32)/1.8).toFixed(2);
      Change_Kelvin.innerHTML = (((given_value-32)/1.8)+273.15).toFixed(2);
      break;
    case 2: // celsius change..
      Change_Fahrenheit.innerHTML = ((given_value*1.8)+32).toFixed(2);
      Change_Kelvin.innerHTML = given_value+273.15;
      break;
    case 3: // Kelvin change..
      Change_Fahrenheit.innerHTML = (((given_value-273.15)*1.8)+32).toFixed(2);
      Change_Celsius.innerHTML = given_value-273.15;
      break;
  }
}