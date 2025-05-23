import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';
import { createError } from '../../utils/error-helpers.js';

const roomsCreate = asyncHandler(async (req, res) => {
  const { name, isGroup, members, createdBy } = req.body;

  if (!name) throw createError('Field missed: name');
  if (!members) throw createError('Field missed: members');
  if (!createdBy) throw createError('Field missed: createdBy');

  const user = await model.USER.findById(createdBy);
  if (!user) throw createError('Invalid user ID');

  const uniqueMembers = new Set([...members, createdBy]);
  const validUsers = await model.USER.find({ _id: { $in: [...uniqueMembers] } });

  if (validUsers.length !== uniqueMembers.size) {
    throw createError('One or more user IDs are invalid');
  }

  const newRoom = await model.ROOM.create({
    name,
    isGroup,
    members,
    createdBy,
  });

  res.status(200).json({ msg: 'success', data: newRoom });
});

export default roomsCreate;
