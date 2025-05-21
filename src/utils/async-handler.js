/**
 * asyncHandler - Wraps async route handlers to catch errors and forward them to Express error middleware.
 *
 * Usage:
 * ```js
 *   import asyncHandler from './utils/async-handler.js';
 *
 *   router.get('/users/:id', asyncHandler(async (req, res) => {
 *     const user = await User.findById(req.params.id);
 *     if (!user) throw createError("User not found", { status: 404 });
 *     res.json(user);
 *   }));
 * ```
 *
 * This avoids the need for try/catch blocks in every controller.
 */

function asyncHandler(fn) {
  return (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
}

export default asyncHandler;
