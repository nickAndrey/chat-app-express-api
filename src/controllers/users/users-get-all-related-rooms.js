import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';

const usersGetAllRelatedRooms = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  const rooms = await model.ROOM.find({ members: userId, deletedFor: { $ne: userId } })
    .populate('members', 'username email')
    .populate('createdBy', 'username');

  res.status(200).json({ msg: 'success', data: rooms });
});

export default usersGetAllRelatedRooms;
