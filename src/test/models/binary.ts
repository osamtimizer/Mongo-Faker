import mongoose from 'mongoose';
import IBinaryDocument from '../interfaces/IBinaryDocument';

const schema = new mongoose.Schema({
  body: {
    type: Buffer,
    required: true,
    maxlength: 255
  }
});

const Binary = mongoose.model<IBinaryDocument>('Binary', schema);

export default Binary;