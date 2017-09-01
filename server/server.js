/* https://nodejs.org/api
 1. learn path
 2. install express
 3. deploy to Heroku => set 'engines' inside package.json
*/
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

console.log(__dirname + '/public');
console.log(publicPath);

var app = express();

app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
