const express = require('express');

const app = express();

// Funneling requests through middleware and logs to console and returns a response
// app.use((req, res, next) => {
//     console.log('Middleware 1', req.url);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Middleware 2', req.url);
//     res.send('Hello from Express!');
// });

// Handle requests to specific routes
app.use('/users', (req, res, next) => {
    console.log('Middleware users', req.url);
    res.send('Hello from Express users!');
});

app.use('/', (req, res, next) => {
    console.log('Middleware blank', req.url);
    res.send('Hello from Express!');
});

app.listen(3000);