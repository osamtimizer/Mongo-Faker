import IFaker from './IFaker';
import mongoose from 'mongoose';

class MongooseFaker implements IFaker {
  constructor() {
  }

  //Generate fake data which is filling the schema of the model.
  generateRand<T extends mongoose.Document>(targetModel: T, times: number) {

  }
}

export default MongooseFaker;