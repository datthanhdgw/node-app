const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login</title>
      <link rel="stylesheet" href="/css/styles.css">
    </head>
    <body>
      <form action="/login" method="POST">
        <h2 style="text-align: center; color: #4a5568; margin-bottom: 24px;">Welcome Back</h2>
        <label for="username">Username(*):</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password(*):</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Login</button>
      </form>
    </body>
    </html>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Xử lý đăng nhập ở đây
  if (username === 'admin' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.send('Invalid username or password.');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});