const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, OPTIONS");
  // res.setHeaders('Access-Control-Allow-Header');
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'djek438827l',
      title: 'Server werd gecontroleerd',
      content: 'Iemand moest gewoon een teken wijzigen'
    },
    {
      id: 'zjek438928l',
      title: 'Derde poging',
      content: 'Iemand moest gewoon de nodemon inzetten'
    },
    {
      id: 'dzrr33228l',
      title: 'Wie was de vorige webdev?',
      content: 'Vertrouw je aan de github?'
    }
  ];
  return res.status(200).json({
    message: 'Post fetched successfully!',
    posts: posts
  });
});

module.exports = app;
