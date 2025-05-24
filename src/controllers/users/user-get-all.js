import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';

const userGetAll = asyncHandler(async (_, res) => {
  const users = await model.USER.find();
  res.status(200).json({
    msg: 'success',
    data: users.map((user) => ({
      id: user._id,
      username: user.username,
      email: user.email,
    })),
  });
});

export default userGetAll;
