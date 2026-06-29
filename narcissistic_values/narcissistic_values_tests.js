const { test, assertEquals, describe } = require('../test-utils.js');
const { narcissistic } = require('./narcissistic_values.js');

describe('Narcissistic Numbers', () => {
    test("153 is narcissistic", narcissistic(153), true);
    test("154 is not narcissistic", narcissistic(154), false);
    test("1634 is narcissistic", narcissistic(1634), true);
});