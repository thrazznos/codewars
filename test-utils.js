/**
 * Simple test utility for codewars kata practice
 */

function test(name, actual, expected) {
    const passed = JSON.stringify(actual) === JSON.stringify(expected);
    const symbol = passed ? '✓' : '✗';
    const operator = passed ? '===' : '!==';
    console.log(`${symbol} ${name}: ${actual} ${operator} ${expected}`);
    return passed;
}

function assertEquals(actual, expected, message = '') {
    const passed = JSON.stringify(actual) === JSON.stringify(expected);
    if (!passed) {
        console.error(`✗ ${message || 'Assertion failed'}`);
        console.error(`  Expected: ${expected}`);
        console.error(`  Actual:   ${actual}`);
    } else {
        console.log(`✓ ${message || 'Test passed'}`);
    }
    return passed;
}

function describe(description, testFn) {
    console.log(`\n${description}`);
    testFn();
}

module.exports = { test, assertEquals, describe };
