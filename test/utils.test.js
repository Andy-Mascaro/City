import { makeStatsString } from '../utils.js';

const test = QUnit.test;

test('testing string', (expect) => {
    const string = ` You picked your conditions sunny You picked your housing Big You picked your location Forest`;
    //Arrange
    // Set up your arguments and expectations
    //const expected = `You clicked on the head 4 times, on the middle 5 times, and on the bottom 1 time. And everybody loves your character's catchphrases:`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString('sunny', 'Big', 'Forest');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, string);
});
