const express = require('express');
const app = express();
const numbersRoute = require('./routes/numbersRoute');


require('dotenv').config();


app.use('/numbers', numbersRoute);

const PORT = process.env.PORT || 9876;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
