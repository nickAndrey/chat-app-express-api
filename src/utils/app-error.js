class AppError extends Error {
  constructor(message, { status = 500, code = "INTERNAL_ERROR", cause } = {}) {
    super(message);
    this.status = status;
    this.code = code;
    this.cause = cause;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
