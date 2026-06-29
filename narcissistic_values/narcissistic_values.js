
///Determines if a number is narcissistic or not. A narcissistic number is a number that is the sum of its own digits each raised to the power of the number of digits.
//For example, 153 is a narcissistic number because 1^3 + 5^3 + 3^3 = 153.
function narcissistic(value) {
    var digits = [];
    addLastDigit(value, digits);

    var sum = 0;
    var digitCount = digits.length;

    for(var i = 0; i < digitCount; i++) {
        //Get the each digit to the power of the number of digits and add to sum
        sum += Math.pow(digits[i], digitCount);
    }

    if(sum === value) {
        return true;
    }

    return false;

}

function addLastDigit(value, digits ) {
    var lastDigit = value % 10;
    digits.push(lastDigit);
    var newValue = Math.floor(value / 10);

    if(newValue > 0) {
        addLastDigit(newValue, digits);
    }

    return digits;
}

module.exports = { narcissistic };