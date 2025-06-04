import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';
import { createError } from '../../utils/error-helpers.js';

const roomsCreate = asyncHandler(async (req, res) => {
  const { name, isGroup, members, createdBy } = req.body;

  // Validate input
  if (!name) {
    throw createError('Missing required field: name');
  }

  if (!Array.isArray(members) || members.length === 0) {
    throw createError('Missing or invalid members array');
  }

  if (!createdBy) {
    throw createError('Missing required field: createdBy');
  }

  // Include creator in members
  const allMembers = Array.from(new Set([...members, createdBy]));

  // Validate all users exist
  const users = await model.USER.find({ _id: { $in: allMembers } });
  if (users.length !== allMembers.length) {
    throw createError('One or more user IDs are invalid');
  }

  // Try to find existing room with same members and type
  let room = await model.ROOM.findOne({
    isGroup,
    members: { $all: allMembers, $size: allMembers.length },
  });

  // If exists, "restore" it for this user
  if (room) {
    await model.ROOM.updateOne(
      {
        _id: room._id,
      },
      {
        $pull: { deletedFor: createdBy },
      }
    );
  } else {
    // Otherwise, create a new room
    room = await model.ROOM.create({
      name,
      isGroup,
      members: allMembers,
      createdBy,
    });
  }

  // Populate and respond
  const populated = await model.ROOM.findById(room._id)
    .populate('members', 'username email')
    .populate('createdBy', 'username');

  res.status(200).json({ msg: 'success', data: populated });
});

export default roomsCreate;
