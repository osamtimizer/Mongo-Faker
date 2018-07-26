import mongoose from 'mongoose';

export default interface IBinaryDocument extends mongoose.Document {
  body: Buffer
}