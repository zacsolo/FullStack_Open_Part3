require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const Person = require('./models/people');

app.use(bodyParser.json());
app.use(cors());
// app.use(express.json());
app.use(express.static('build'));

// -- FOR PRINTING TO CONSOLE
morgan.token('content', function (req, res) {
  return JSON.stringify(req.body);
});
app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :content'
  )
);
// -- FOR PRINTING TO CONSOLE

app.get('/api/persons', (request, response) => {
  Person.find({}).then((notes) => {
    response.json(notes);
  });
});
app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then((item) => {
      if (item) {
        response.json(item);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.post('/api/persons', (request, response, next) => {
  const body = request.body;

  const newPerson = new Person({
    name: body.name,
    number: body.number,
  });

  newPerson
    .save()
    .then((item) => item.toJSON())
    .then((formattedItem) => {
      response.json(formattedItem);
    })
    .catch((error) => next(error));
});

//--UPDATE A NUMBER
app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body;

  const person = {
    name: body.name,
    number: body.number,
  };

  Person.findByIdAndUpdate(request.body.id, person, { new: true })
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

//--------------------
//--ERROR HANDLING FOR UNKNOWN ROUTES
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};
app.use(unknownEndpoint);

//--------------------
//--ALL OTHER ERRORS
const errorHandler = (error, request, response, next) => {
  console.log('IN ERROR HANDLER, NAME', error);
  console.error('IN ERROR HANDLER, NAME', error.name);
  console.error('IN ERROR HANDLER, MESSAGE', error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
