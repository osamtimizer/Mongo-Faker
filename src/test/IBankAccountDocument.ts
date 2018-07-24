import mongoose from 'mongoose';

export default interface IBankAccountDocument extends mongoose.Document {
  holder: string
  currency: string
  amount: mongoose.Types.Decimal128
}