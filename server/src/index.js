import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.js';
import routes from './routes/routes.js';
import dbConnection from './config/dbConnection.js';
const app = express();
app.use(express.json());
app.use(cors());

await dbConnection();

app.use('/api', routes);
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`\n------------------------------------\nServer running on port ${PORT}\n------------------------------------`);
  });