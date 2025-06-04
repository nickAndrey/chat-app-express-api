import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';

const usersSearch = asyncHandler(async (req, res) => {
  const search = req.body.search;
  const users = await model.USER.find({
    $or: [
      { username: { $regex: `^${search}`, $options: 'i' } },
      { email: { $regex: `^${search}`, $options: 'i' } },
    ],
  });

  const transformedUsers = users.map((user) => ({
    id: user.id,
    username: user.username,
    email: user.email,
  }));

  res.status(200).json({
    msg: 'success',
    data: transformedUsers,
  });
});

export default usersSearch;
