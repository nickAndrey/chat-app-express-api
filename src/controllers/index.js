import roomsCreate from "./rooms/rooms-create.js";
import roomsGetAllByUserId from "./rooms/rooms-get-all-by-user-id.js";
import roomsGetById from "./rooms/rooms-get-by-id.js";
import roomsUpdate from "./rooms/rooms-update.js";
import userCreate from "./users/user-create.js";
import userGetAll from "./users/user-get-all.js";
import userGetById from "./users/user-get-by-id.js";
import userUpdate from "./users/user-update.js";

const controller = {
  users: {
    create: userCreate,
    getAll: userGetAll,
    getById: userGetById,
    update: userUpdate,
  },
  /**
   * #### Room Endpoints
   * ```
   * POST    /rooms                  - Create new room
   * GET     /rooms/:id              - Get room info
   * GET     /users/:userId/rooms    - Get rooms user is in
   * PUT     /rooms/:id              - Edit room info
   * DELETE  /rooms/:id              - Delete room
   * POST    /rooms/:id/members      - Add member to room
   * DELETE  /rooms/:id/members/:uid - Remove member
   * ```
   */
  rooms: {
    create: roomsCreate,
    getById: roomsGetById,
    getAllByUserId: roomsGetAllByUserId,
    update: roomsUpdate,
    delete: () => {},
    addMember: () => {},
    removeMember: () => {},
  },
};

export default controller;
