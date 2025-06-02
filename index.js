import cookieParser from 'cookie-parser';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import express from 'express';
import { createServer } from 'http';
import authenticateToken from './src/middlewares/authenticate-token.js';
import errorHandler from './src/middlewares/error-middleware.js';
import routes from './src/routes/index.js';
import mongooseConnect from './src/settings/mongoose-connection.js';
import { initSocket } from './src/settings/socket.js';

const app = express();
const server = createServer(app);

configDotenv();

initSocket(server);
mongooseConnect();

const PORT = 3000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

app.use('/api/auth', routes.auth);

app.use(authenticateToken);

app.use('/api/users', routes.users);
app.use('/api/rooms', routes.rooms);

app.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Server is listen on the port ${PORT}`);
});
