const express = require('express');

const app = express();

const PORT = 4000;


app.get("/", (req, res) => {
  res.send('Home Route')
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!"});
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  
});


