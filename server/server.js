const express = require('express');
const bodyParser = require('body-parser'); //body-parser for json correctness
const pg = require('pg'); //postgres
const app = express();

const PORT = 5005;

//ROUTES//

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log(`listening on PoRt: ${PORT}`);
});
