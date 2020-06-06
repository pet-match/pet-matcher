const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const dbRouters = require('./routes/db');

// for incoming JSON data
app.use(express.json());
// for incoming form data (if necessary)
app.use(
  express.urlencoded({
    extended: true,
  })
);

// should only run if in 'production' mode.
// if in 'development', dev-server will run the index.html file on '/'
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use('/api', dbRouters);

// global error handler
app.use((err, req, res, next) => {
  const errorMessage = err.message || 'Unknown middleware error';
  const errorStatus = err.status || 500;
  console.log(`Message: ${errorMessage}\nStatus code: ${errorStatus}`);
  return res.status(errorStatus).send(errorMessage);
});

app.listen(3000, () => {
  console.log('listening on port ', PORT);
});
