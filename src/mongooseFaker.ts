import IFaker from './IFaker';
import mongoose from 'mongoose';
import SchemaTypeExtend from './schemaTypeExtend';
import IOptions from './IOptions';


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
        const instance = targetSchema.instance;
        const options = targetSchema.options;
        if (isOptions(options)) {
        }
        const num = 0;
      }
    }
  }
}

//Type Guards
const isOptions = (item: any): item is IOptions =>
  item.type !== undefined;


export default MongooseFaker;