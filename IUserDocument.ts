import mongoose from 'mongoose';
export default interface IUserDocument extends mongoose.Document {
  name: string
  age: number
}