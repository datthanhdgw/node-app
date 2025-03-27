const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Middleware để parse form data

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f9;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        form {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 300px;
        }
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: bold;
        }
        input {
          width: 100%;
          padding: 8px;
          margin-bottom: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <form action="/login" method="POST">
        <label for="username">Username*:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password:</label>
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