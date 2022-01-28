import { createCountString } from '../utils.js';

const test = QUnit.test;

test('testing string', (expect) => {
    const string = ` You picked conditions sunny You picked housing Big You picked location Forest`;
   
    const actual = createCountString('sunny', 'Big', 'Forest');

    expect.equal(actual, string);
});
