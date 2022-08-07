// https://calculator.swiftutors.com/cloud-base-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cloudBaseRadio = document.getElementById('cloudBaseRadio');
const temperatureRadio = document.getElementById('temperatureRadio');
const dewpointRadio = document.getElementById('dewpointRadio');

let cloudBase;
let temperature = v1;
let dewpoint = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

cloudBaseRadio.addEventListener('click', function() {
  variable1.textContent = 'Temperature (Fahrenheit)';
  variable2.textContent = 'Dewpoint (Fahrenheit)';
  temperature = v1;
  dewpoint = v2;
  result.textContent = '';
});

temperatureRadio.addEventListener('click', function() {
  variable1.textContent = 'Cloud Base (ft)';
  variable2.textContent = 'Dewpoint (Fahrenheit)';
  cloudBase = v1;
  dewpoint = v2;
  result.textContent = '';
});

dewpointRadio.addEventListener('click', function() {
  variable1.textContent = 'Cloud Base (ft)';
  variable2.textContent = 'Temperature (Fahrenheit)';
  cloudBase = v1;
  temperature = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cloudBaseRadio.checked)
    result.textContent = `Cloud Base = ${computeCloudBase().toFixed(2)} ft`;

  else if(temperatureRadio.checked)
    result.textContent = `Temperature = ${computeTemperature().toFixed(2)} Fahrenheit`;

  else if(dewpointRadio.checked)
    result.textContent = `Dewpoint = ${computeDewpoint().toFixed(2)} Fahrenheit`;
})

// calculation

function computeCloudBase() {
  return ((Number(temperature.value) - Number(dewpoint.value)) / 4.4) * 1000;
}

function computeTemperature() {
  return ((Number(cloudBase.value) * 4.4 ) / 1000) + Number(dewpoint.value);
}

function computeDewpoint() {
  return Number(temperature.value) - ((Number(cloudBase.value) * 4.4 ) / 1000);
}