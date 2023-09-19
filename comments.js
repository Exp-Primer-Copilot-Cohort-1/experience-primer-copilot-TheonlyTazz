// Create a Webserver
// Create a route to handle incoming requests
// Create a route to handle incoming comments
// Create a route to handle incoming likes
// Create a route to handle incoming dislikes
// Create a route to handle incoming delete
// Create a route to handle incoming edit
// Create a route to handle incoming update
// Create a route to handle incoming add

// 1. Create a Webserver
// 2. Create a route to handle incoming requests
// 3. Create a route to handle incoming comments
// 4. Create a route to handle incoming likes
// 5. Create a route to handle incoming dislikes
// 6. Create a route to handle incoming delete
// 7. Create a route to handle incoming edit
// 8. Create a route to handle incoming update
// 9. Create a route to handle incoming add

// 1. Create a Webserver
const express = require('express');
const app = express();
const port = 3000;

// 2. Create a route to handle incoming requests
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 3. Create a route to handle incoming comments
app.get('/comments', (req, res) => {
  res.send('Comments');
});

// 4. Create a route to handle incoming likes
app.get('/likes', (req, res) => {
  res.send('Likes');
});

// 5. Create a route to handle incoming dislikes
app.get('/dislikes', (req, res) => {
  res.send('Dislikes');
});

// 6. Create a route to handle incoming delete
app.get('/delete', (req, res) => {
  res.send('Delete');
});

// 7. Create a route to handle incoming edit
app.get('/edit', (req, res) => {
  res.send('Edit');
});

// 8. Create a route to handle incoming update
app.get('/update', (req, res) => {
  res.send('Update');
});

// 9. Create a route to handle incoming add
app.get('/add', (req, res) => {
  res.send('Add');
});


// 10. Start the webserver
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});