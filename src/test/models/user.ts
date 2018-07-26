import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import IUserDocument from '../interfaces/IUserDocument'

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
  /*
  ,
  birthday: {
    type: Date,
    required: true
  },
  hobbies: {
    type: Array,
    of: String
  },
  bank: {
    type: Schema.Types.Decimal128,
    required: true
  },
  internalData: {
    type: Buffer
  },
  others: {
    type: Schema.Types.Mixed
  }
  */

});


const User = mongoose.model<IUserDocument>('User', schema);

export default User;