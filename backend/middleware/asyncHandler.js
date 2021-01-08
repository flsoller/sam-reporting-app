// asyncHandler to avoid repeating try/catch on every async/await controller method.
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
