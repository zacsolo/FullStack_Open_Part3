const express = require('express');
const app = express();
const morgan = require('morgan');
const { response } = require('express');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

//-----LOL THIS WAS NOT STRAIGHT FOWARD-----
morgan.token('content', function (req, res) {
  return JSON.stringify(req.body);
});
app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :content'
  )
);
//-----LOL THIS WAS NOT STRAIGHT FOWARD-----

let persons = [
  { name: 'Arto Hellas', number: '040-29182', id: 1 },
  { name: 'Ada Lovelace', number: '980-00012', id: 2 },
  { name: 'Dan Abramov', number: '873-21112', id: 3 },
  { name: 'Mary Poppendieck', number: '712-98701', id: 4 },
];

app.get('/info', (request, response) => {
  const newDate = new Date();
  response.send(`Phonebook has info for ${persons.length} people, ${newDate}`);
});

app.get('/api/persons', (request, response) => {
  response.json(persons);
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id === id);
  if (!person) {
    response.status(404).end();
  }
  response.json(person);
});

app.post('/api/persons', (request, response) => {
  const body = request.body;
  const newId = Math.floor(Math.random() * 999999);
  const nameMatch = persons.find((p) => p.name === body.name);

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'must have a name and number',
    });
  }
  if (nameMatch) {
    return response.status(400).json({
      error: 'name must be unique',
    });
  }

  const newPerson = {
    name: body.name,
    number: body.number,
    id: newId,
    date: new Date(),
  };

  persons = persons.concat(newPerson);

  response.json(newPerson);
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((p) => p.id !== id);

  response.status(204).end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
