const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getAll, update, create, delTask, findByTitle, findByDate } = require('./controllers/tasksController');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = '3001';

app.get('/queryTitle', findByTitle);

app.get('/queryDate', findByDate);

app.route('/:id')
  .delete(delTask)
  .put(update);

app.route('/')
  .get(getAll)
  .post(create);

app.listen(PORT, () => {
    console.log('Online');
});