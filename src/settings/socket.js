import { Server } from 'socket.io';

let IO_INSTANCE;

export const initSocket = (httpServer) => {
  IO_INSTANCE = new Server(httpServer, {
    cors: {
      origin: 'http://localhost:5173',
      credentials: true,
    },
  });

  IO_INSTANCE.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);

    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
      console.log(`Socket ${socket.id} joined room ${roomId}`);
    });
  });

  return IO_INSTANCE;
};

// Use it in controllers to emit messages or statuses or whatever.
export const getIO = () => {
  if (!IO_INSTANCE) {
    throw new Error('Socket.io not initialized');
  }
  return IO_INSTANCE;
};
