import { handleUnknownError } from '../utils/error-helpers.js';

function errorHandler(err, req, res, next) {
  const error = handleUnknownError(err);

  console.error('Error:', {
    msg: error.message,
    code: error.code,
    status: error.status,
    cause: error.cause,
  });

  res.status(error.status).json({
    error: {
      msg: error.message,
      code: error.code,
    },
  });
}

export default errorHandler;
