const express = require('express');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/get', (req, res) => {
    res.send('Hi There')
  });


  const port = 3001;

  app.listen(port, () => `Server running on port ${port}`);