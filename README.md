## Key Mongoose Models & REST Endpoints for Chat App

// -----------------------------
// User Model
// -----------------------------

```js
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: String,
    avatarUrl: String,
  },
  { timestamps: true }
);
```

// -----------------------------
// Room Model
// -----------------------------

```js
const roomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    isGroup: { type: Boolean, default: false },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
```

// -----------------------------
// Message Model
// -----------------------------

```js
const messageSchema = new mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, required: true },
    type: { type: String, enum: ["text", "image", "file"], default: "text" },
  },
  { timestamps: true }
);
```

// -----------------------------
// REST API Endpoints
// -----------------------------

```bash

// User Endpoints
POST    /users                  - Create user
GET     /users/:id              - Get user info
GET     /users                  - List/search users
PUT     /users/:id              - Update user
DELETE  /users/:id              - Delete user

// Room Endpoints
POST    /rooms                  - Create new room
GET     /rooms/:id              - Get room info
GET     /users/:userId/rooms    - Get rooms user is in
PUT     /rooms/:id              - Edit room info
DELETE  /rooms/:id              - Delete room
POST    /rooms/:id/members      - Add member to room
DELETE  /rooms/:id/members/:uid - Remove member

// Message Endpoints
POST    /messages               - Send a message
GET     /rooms/:id/messages     - Get messages in room
DELETE  /messages/:id           - Delete message

// Auth Endpoints (optional)
POST    /auth/login             - Log in
POST    /auth/register          - Register
GET     /auth/me                - Get current user
```
