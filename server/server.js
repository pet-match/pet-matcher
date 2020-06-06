const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// for incoming JSON data
app.use(express.json());
// for incoming form data (if necessary)
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use((err, req, res, next) => {
  const errorMessage = err.message || 'Unknown middleware error';
  const errorStatus = err.status || 500;
  console.log(`Message: ${errorMessage}\nStatus code: ${errorStatus}`);
  return res.status(errorStatus).send(errorMessage);
});

app.listen(3000, () => {
  console.log('listening on port ', PORT);
});
