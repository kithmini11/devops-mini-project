const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps Mini Project</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px;
          background-color: #f0f0f0;
        }
        h1 {
          color: #333;
        }
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          max-width: 600px;
          margin: 0 auto;
        }
        .success {
          color: green;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 DevOps Mini Project</h1>
        <p class="success">CI/CD Pipeline is working!</p>
        <p>This application was deployed using a complete CI/CD pipeline</p>
        <p>Version: 1.0.0</p>
        <p>Host: ${process.env.HOSTNAME || 'Local'}</p>
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});