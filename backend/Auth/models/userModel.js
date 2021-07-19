import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },
  isAdmin: {
    type: Boolean,
    required: [true, 'Admin role needs to be defined.'],
    default: false,
  },
});

userSchema.methods.checkPassword = async function (incomingPw) {
  return await bcrypt.compare(incomingPw, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
