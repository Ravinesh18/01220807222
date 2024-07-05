const axios = require('axios');

const fetchNumbers = async (type) => {
    let url;
    switch (type) {
        case 'p':
            url = 'http://20.244.56.144/test/primes';
            break;
        case 'f':
            url = 'http://20.244.56.144/test/fibo';
            break;
        case 'e':
            url = 'http://20.244.56.144/test/even'; // Assuming there is an endpoint for even numbers
            break;
        case 'r':
            url = 'http://20.244.56.144/test/random'; // Assuming there is an endpoint for random numbers
            break;
        default:
            throw new Error('Invalid type');
    }

    try {
        const response = await axios.get(url, { timeout: 500 });
        return response.data.numbers;
    } catch (error) {
        return [];
    }
};

module.exports = fetchNumbers;
