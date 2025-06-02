import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';
import { createError } from '../../utils/error-helpers.js';

const roomsCreate = asyncHandler(async (req, res) => {
  const { name, isGroup, members, createdBy } = req.body;

  if (!name) throw createError('Missing required field: name');

  if (!Array.isArray(members) || members.length === 0) {
    throw createError('Missing or invalid members array');
  }

  if (!createdBy) throw createError('Missing required field: createdBy');

  const user = await model.USER.findById(createdBy);
  if (!user) throw createError('Invalid user ID');

  // Ensure unique members list, including creator
  const uniqueMembers = Array.from(new Set([...members, createdBy]));

  const validUsers = await model.USER.find({ _id: { $in: uniqueMembers } });
  if (validUsers.length !== uniqueMembers.length) {
    throw createError('One or more user IDs are invalid');
  }

  let room;

  room = await model.ROOM.findOne({
    isGroup,
    members: { $all: uniqueMembers, $size: uniqueMembers.length },
  });

  if (room) {
    await model.ROOM.updateOne(
      {
        _id: room._id,
      },
      {
        $pull: {
          deletedFor: createdBy,
        },
      }
    );
  } else {
    room = await model.ROOM.create({
      name,
      isGroup,
      members: uniqueMembers,
      createdBy,
    });
  }

  const populatedRoom = await model.ROOM.findById(room._id)
    .populate('members', 'username email')
    .populate('createdBy', 'username');

  res.status(200).json({ msg: 'success', data: populatedRoom });
});

export default roomsCreate;
