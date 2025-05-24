import authRoutes from './auth.js';
import messagesRoutes from './messages.js';
import roomsRoutes from './rooms.js';
import usersRoutes from './users.js';

const routes = {
  /**
   * #### User Endpoints
   * ```md
   * POST    /auth/refresh-token     - Refresh access token
   * POST    /auth/login             - Login
   * POST    /auth/sign-up           - Sign up an create user
   * ```
   */
  auth: authRoutes,

  /**
   * #### User Endpoints
   * ```md
   * GET     /users/:id              - Get user info
   * GET     /users                  - List/search users
   * PUT     /users/:id              - Update user
   * DELETE  /users/:id              - Delete user (not implemented)
   * ```
   */
  users: usersRoutes,

  /**
   * #### Room Endpoints
   * ```md
   * POST    /rooms                  - Create new room
   * GET     /rooms/:id              - Get room info
   * GET     /users/:userId/rooms    - Get rooms user is in
   * PUT     /rooms/:id              - Edit room info
   * DELETE  /rooms/:id              - Delete room
   * POST    /rooms/:id/members      - Add member to room
   * DELETE  /rooms/:id/members/:uid - Remove member
   * ```
   */
  rooms: roomsRoutes,

  /**
   * #### Message Endpoints
   * ```md
   * POST    /messages               - Send a message
   * GET     /rooms/:id/messages     - Get messages in room
   * DELETE  /messages/:id           - Delete message
   * ```
   */
  messages: messagesRoutes,
};

export default routes;
