import express from 'express';
import contextMiddleware from './src/middleware/contextMiddleware.js';
import getusers from './src/routes/userRoute/getAllUsers.js';

const app = express();

app.use(express.json());

app.use(contextMiddleware);

app.use('/getusers', getusers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}`);
  
});

