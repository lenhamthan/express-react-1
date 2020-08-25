const express = require('express');
var cors = require('cors');
const path = require('path');

const app = express();
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello from server!')
})

app.get('/api/helloworld', (req, res) => {
  res.json({sayHi: 'hello from server, nice to meet you!'})
})
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
  var list = ["thanln", "Thanln123", "Thanln1245"];
res.json(list);
console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('CORS-enabled web server listening on port 80')
})