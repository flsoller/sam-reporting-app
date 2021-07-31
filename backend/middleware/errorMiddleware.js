import mongoose from 'mongoose';

const errorHandler = (err, req, res, next) => {
  if (mongoose.Error.ValidationError) {
    res.status(400);
    err.code === 11000
      ? res.json({ message: 'A resource with that ID already exists.' })
      : res.json({ message: err.message });
  } else {
    const errorCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(errorCode);
    res.json({ message: err.message });
  }
};

export { errorHandler };
