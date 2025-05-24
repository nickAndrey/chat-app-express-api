import authLogin from './auth/auth-login.js';
import authRefreshToken from './auth/auth-refresh-token.js';
import authSignUp from './auth/auth-sign-up.js';

import messagesCreate from './messages/messages-create.js';
import messagesDelete from './messages/messages-delete.js';
import messagesGetAll from './messages/messages-get-all.js';

import roomsAddMember from './rooms/rooms-add-member.js';
import roomsCreate from './rooms/rooms-create.js';
import roomsDelete from './rooms/rooms-delete.js';
import roomsGetAllByUserId from './rooms/rooms-get-all-by-user-id.js';
import roomsGetById from './rooms/rooms-get-by-id.js';
import roomsRemoveMember from './rooms/rooms-remove-member.js';
import roomsUpdate from './rooms/rooms-update.js';

import userCreate from './users/user-create.js';
import userGetAll from './users/user-get-all.js';
import userGetById from './users/user-get-by-id.js';
import userUpdate from './users/user-update.js';

const controller = {
  auth: {
    signUp: authSignUp,
    login: authLogin,
    refreshToken: authRefreshToken,
  },
  users: {
    getAll: userGetAll,
    getById: userGetById,
    update: userUpdate,
  },
  rooms: {
    create: roomsCreate,
    getById: roomsGetById,
    getAllByUserId: roomsGetAllByUserId,
    update: roomsUpdate,
    delete: roomsDelete,
    addMember: roomsAddMember,
    removeMember: roomsRemoveMember,
  },
  messages: {
    create: messagesCreate,
    getAll: messagesGetAll,
    delete: messagesDelete,
  },
};

export default controller;
