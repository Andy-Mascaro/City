import { createCountString } from './utils.js';
// import functions and grab DOM elements
const conditionsSelect = document.getElementById('conditions-select');
const housingSelect = document.getElementById('housing-select');
const locationSelect = document.getElementById('location-select');

const conditionsEl = document.getElementById('conditions');
const housingEl = document.getElementById('housing');
const locationEl = document.getElementById('location');

const sloganEl = document.getElementById('slogan');
const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-btn');
//const reset = document.getElementById('reset-slogans');
//const sloganList = document.getElementById('slogan-list');
const results = document.getElementsById('results');
const slogans = [];

let conditionsCounter = 0;
let housingCounter = 0;
let locationCounter = 0;

conditionsSelect.addEventListener('change', () => {
    const value = conditionsSelect.value;
    conditionsEl.style.backgroundImage = `url("./assets/conditions-${value}-.jpeg")`;
    conditionsCounter++;
    displayStats();
});

housingSelect.addEventListener('change', () => {
    const value = housingSelect.value;
    housingEl.style.backgroundImage = `url("./assets/conditions-${value}-.jpeg")`;
    housingCounter++;
    displayStats();

});


locationSelect.addEventListener('change', () => {
    const value = locationSelect.value;
    locationEl.style.backgroundImage = `url("./assets/conditions-${value}-.jpeg")`;
    locationCounter++;
    displayStats();

});

sloganButton.addEventListener('click', () => {
    const slogan = sloganInput.value;
    slogan.push(slogan);
    displaySlogan();
    sloganInput.value = '';


});


//*reset.addEventListener('click', () => {
    //*slogans = [];
    //*sloganList.textContent = '';
    


//*});

function displayStats(){
    const countString = createCountString(conditionsCounter, housingCounter, locationCounter);
    results.textContent = countString;


}

function displaySlogan() {
    sloganEl.textContent = '';
    for (let slogan of slogans) {

        const ul = document.createElement(ul);
        ul.textContent = slogan;
        sloganEl.append(ul);
    }
  


}


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
