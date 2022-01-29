
import { createCountString } from './utils.js';

const test = QUnit.test;

test('testing string', (expect) => {
    const string = ` You picked your conditions sunny times. You picked your housing Big times. You picked your location Forest times.`;
   
    const actual = createCountString('sunny', 'Big', 'Forest');

    expect.equal(actual, string);
});

