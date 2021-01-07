// asyncHandler to avoid repeating try/catch on every async/await controller method.
export default asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
