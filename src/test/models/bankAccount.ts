import mongoose from 'mongoose';
import IBankAccountDocument from '../interfaces/IBankAccountDocument';

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
  },
  limitAmount: {
    type: mongoose.Types.Decimal128,
    min: 0,
    max: 9999.99
  }

});

const BankAccount = mongoose.model<IBankAccountDocument>('BankAccount', schema);

export default BankAccount;