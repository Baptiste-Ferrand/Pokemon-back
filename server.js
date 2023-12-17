const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
}
);

//créer moi la connexion a ma bdd postresql port 5432 avec user postgres et password postgres

