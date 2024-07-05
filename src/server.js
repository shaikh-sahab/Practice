import http from 'http';
import userRoutes from './routes/userRoutes.js';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
  try {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Congratulations! Your Server is created successfully.');
  } catch (error) {
    console.error('Error handling request:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});


server.listen(port, hostname, err => {
  if (err) {
    return console.error('Error starting server:', err);
  }
  console.log(`Server running at http://${hostname}:${port}/`);
});

export default server;
