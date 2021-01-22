const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({text: "hello world"})
})

app.post('/', (req, res) => {
  if (req.is("application/json")) {
    res.status(201).json(req.body);
    return;
  }
  res.status(400).json({ 
    error: "Invalid Content-Type" 
  });
});



app.listen(3000)


