// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { comments } = require('./data.js');

app.use(bodyParser.json());

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const { body } = req.body;
  if (body) {
    comments.push({ body });
    res.status(201).json({ comment: { body } });
  } else {
    res.status(400).json({ message: 'Comment should not be empty' });
  }
});

// DELETE /comments/:commentId
app.delete('/comments/:commentId', (req, res) => {
  const { commentId } = req.params;
  const commentIndex = comments.findIndex((comment) => comment.body === commentId);
  if (commentIndex !== -1) {
    comments.splice(commentIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});