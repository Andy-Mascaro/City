import { createCountString } from './test/utils.js';
// import functions and grab DOM elements
const conditionsSelect = document.getElementById('conditions-select');
const housingSelect = document.getElementById('housing-select');
const locationSelect = document.getElementById('location-select');

const conditionsEl = document.getElementById('conditions');
const housingEl = document.getElementById('housing');
const locationEl = document.getElementById('location');


const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-btn');
const reset = document.getElementById('reset-slogans');
const sloganList = document.getElementById('slogan-list');
const results = document.getElementById('results');
let slogans = [];

let conditionsCounter = 0;
let housingCounter = 0;
let locationCounter = 0;

conditionsSelect.addEventListener('change', () => {
    const value = conditionsSelect.value;
    conditionsEl.style.backgroundImage = `url("./assets/${value}-conditions.jpeg")`;
    conditionsCounter++;
    displayStats();
});

housingSelect.addEventListener('change', () => {
    const value = housingSelect.value;
    housingEl.style.backgroundImage = `url("./assets/${value}-.jpeg")`;
    housingCounter++;
    displayStats();

});


locationSelect.addEventListener('change', () => {
    const value = locationSelect.value;
    locationEl.style.backgroundImage = `url("./assets/${value}-.jpeg")`;
    locationCounter++;
    displayStats();

});

sloganButton.addEventListener('click', () => {
    const slogan = sloganInput.value;
    slogans.push(slogan);
    displaySlogan();
    sloganInput.value = '';


});


reset.addEventListener('click', () => {
    slogans = [];
    sloganList.textContent = '';
    


});

function displayStats(){
    const countString = createCountString(conditionsCounter, housingCounter, locationCounter);
    results.textContent = countString;


}

function displaySlogan() {
    sloganList.textContent = '';
    for (let slogan of slogans) {

        const li = document.createElement('li');
        li.textContent = slogan;
        sloganList.append(li);
        
    }
  


}


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
