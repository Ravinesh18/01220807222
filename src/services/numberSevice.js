const fetchNumbers = require('../utils/fetchNumbers.js');
const calculateAverage = require('../utils/calculateAverage.js');
const config = require('../config/config.js');

let numberWindow = [];

const handleNumberRequest = async (numberid) => {
    const previousWindow = [...numberWindow];
    const numbers = await fetchNumbers(numberid);

    numbers.forEach(num => {
        if (!numberWindow.includes(num)) {
            numberWindow.push(num);
        }
    });

    if (numberWindow.length > config.WINDOW_SIZE) {
        numberWindow = numberWindow.slice(-config.WINDOW_SIZE);
    }

    const average = calculateAverage(numberWindow);

    return {
        receivedNumbers: numbers,
        previousWindow,
        currentWindow: numberWindow,
        average
    };
};

module.exports = { handleNumberRequest };
