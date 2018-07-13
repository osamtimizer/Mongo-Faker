import mongoose from 'mongoose';
export default interface IUserDocument extends mongoose.Document {
  userName: string
  age: number
}