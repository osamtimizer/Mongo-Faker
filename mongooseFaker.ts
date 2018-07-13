import IFaker from './IFaker';
import mongoose from 'mongoose';
import SchemaTypeExtend from './schemaTypeExtend';


class MongooseFaker implements IFaker {
  constructor() {
  }

  //Generate fake data which is filling the schema of the model.
  generateRand<T extends mongoose.Model<mongoose.Document>>
    (targetModel: mongoose.Model<mongoose.Document>, times: number) {

    let paths = new Array<string>();
    targetModel.schema.eachPath(path => {
      paths.push(path);
    });

    for (let index = 0; index < times; index++) {
      for (let targetPath of paths) {
        const targetSchema = <SchemaTypeExtend>targetModel.schema.path(targetPath);
        const options = targetSchema.options;
        const num = 0;
      }
    }
  }
}

export default MongooseFaker;