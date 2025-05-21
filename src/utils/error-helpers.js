import AppError from "./app-error.js";

const createError = (message, options = {}) => {
  return new AppError(message, options);
};

const handleUnknownError = (err) => {
  if (err instanceof AppError) return err;

  return new AppError(err.message || "Unknown error occurred", {
    cause: err,
    code: "UNKNOWN",
    status: 500,
  });
};

export { createError, handleUnknownError };
