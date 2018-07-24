import mongoose from 'mongoose';

export default interface IUserDocument extends mongoose.Document {
  userName: string
  age: number
  birthday: Date
  hobbies: Array<string>
  bank: mongoose.Types.Decimal128
  internalData: Buffer
  others: any
}