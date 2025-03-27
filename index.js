const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Middleware để parse form data

app.get('/', (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      <br>
      <button type="submit">Login</button>
    </form>
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