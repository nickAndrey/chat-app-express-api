import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import errorHandler from "./src/middlewares/error-middleware.js";
import routes from "./src/routes/index.js";
import mongooseConnect from "./src/settings/mongoose-connection.js";

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = 3000;

mongooseConnect();

app.use(express.json());

app.use("/api/users", routes.users);
app.use("/api/rooms", routes.rooms);

app.use(errorHandler);

io.on("connection", (socket) => {
  console.log("connected");

  socket.on("message", (msg) => {
    console.log(msg);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listen on the port ${PORT}`);
});
