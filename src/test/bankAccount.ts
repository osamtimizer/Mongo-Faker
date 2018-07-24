import mongoose from 'mongoose';
import IBankAccountDocument from './IBankAccountDocument';

const schema = new mongoose.Schema({
  holder: {
    type: String,
    required: true,
    unique: true
  },
  currency: {
    type: String,
    required: true
  },
  amount: {
    type: mongoose.Types.Decimal128,
    required: true
  }
});

const BankAccount = mongoose.model<IBankAccountDocument>('BankAccount', schema);

export default BankAccount;