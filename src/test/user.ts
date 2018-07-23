import mongoose from 'mongoose';
import IUserDocument from './IUserDocument'

const schema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 255
  }
});

const User = mongoose.model<IUserDocument>('User', schema);

export default User;