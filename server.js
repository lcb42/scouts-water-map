const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./db');

//console.log that server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/testdb', async (req, res) => {
  console.log('testdb');
  try {
    const result = await db.query('SELECT * FROM test');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

