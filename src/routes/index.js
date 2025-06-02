import authRoutes from './auth.js';
import roomsRoutes from './rooms.js';
import usersRoutes from './users.js';

const routes = {
  auth: authRoutes,
  users: usersRoutes,
  rooms: roomsRoutes,
};

export default routes;
