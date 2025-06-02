import authLogin from './auth/auth-login.js';
import authRefreshToken from './auth/auth-refresh-token.js';
import authSignUp from './auth/auth-sign-up.js';

import roomsAddMember from './rooms/rooms-add-member.js';
import roomsCreateMessage from './rooms/rooms-create-message.js';
import roomsCreate from './rooms/rooms-create.js';
import roomsDeleteMessage from './rooms/rooms-delete-message.js';
import roomsDelete from './rooms/rooms-delete.js';
import roomsGetById from './rooms/rooms-get-by-id.js';
import roomsGetMessages from './rooms/rooms-get-messages.js';
import roomsUpdate from './rooms/rooms-update.js';

import userGetAll from './users/user-get-all.js';
import userGetById from './users/user-get-by-id.js';
import userUpdate from './users/user-update.js';
import usersGetAllRelatedRooms from './users/users-get-all-related-rooms.js';
import usersSearch from './users/users-search.js';

const controller = {
  auth: {
    signUp: authSignUp,
    login: authLogin,
    refreshToken: authRefreshToken,
  },
  users: {
    search: usersSearch,
    getAll: userGetAll,
    getById: userGetById,
    update: userUpdate,
    getAllRelatedRooms: usersGetAllRelatedRooms,
  },
  rooms: {
    create: roomsCreate,
    get: roomsGetById,
    update: roomsUpdate,
    delete: roomsDelete,
    addMember: roomsAddMember,
    getMessages: roomsGetMessages,
    createMessage: roomsCreateMessage,
    deleteMessage: roomsDeleteMessage,
  },
};

export default controller;
