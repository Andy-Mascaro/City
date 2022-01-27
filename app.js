import { creatCountString} from './utils.js';
// import functions and grab DOM elements
const conditionsSelect = document.getElementById('conditions-select');
const housingSelect = document.getElementById('housing-select');
const locationSelect = document.getElementById('location-select');

const sloganInput = document.getElementById('slogan-input');
const sloganBtn = document.getElementById('slogan-btn');
const sloganList = document.getElementById('slogan-list');
const reset = document.getElementById('reset-slogans');

const results = document.getElmentsById('results');

let slogans = []
let conditionsCounter = 0;
let housingCounter = 0;
let locationCounter = 0;

conditionsSelect.addEventListener('change', (e) => {
  const value = e.target.value;
  conditionsImage.src =`./assets/conditions-${value}.jpeg`;
  conditionsCounter++;
  displayStats();
});

housingSelect.addEventListener('change' (e) => {
  const value = e.target.value;
  housingImage.src =`.assets/housing-${value}.jpeg`;
  housingCounter++;
  displayStats();

});


locationSelect.addEventListener('change' (e) => {
  const value = e.target.value;
  locationImage.src =`.assets/location-${value}.jpeg`;
  locationCounter++;
  displayStats();

});

function displayStats(){
const countString = creatCountString(conditionsCounter, housingCounter, locationCounter);
results.textContent = countString;


}


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
