import mongoose from 'mongoose';

import SchemaTypeExtend from '../schema/schemaTypeExtend';
import SchemaValidator from '../schema/SchemaValidator';
import GeneratorProvider from '../generator/generatorProvider';

import IGenerator from '../interfaces/IGenerator';
import IOptions from '../interfaces/IOptions';
import IFaker from '../interfaces/IFaker';

class MongooseFaker implements IFaker {
  constructor(url: string) {
    mongoose.connect(url);
  }

  //Generate fake data which is filling the schema of the model.
  async generateRand<T extends mongoose.Model<mongoose.Document>>
    (targetModel: mongoose.Model<mongoose.Document>, times: number) {

    let paths = new Array<string>();
    targetModel.schema.eachPath(path => {
      paths.push(path);
    });

    for (let i = 0; i < times; i++) {
      const instance = new targetModel();

      for (let targetPath of paths) {

        //These items are not related to schema itself.
        if (targetPath == '_id' || targetPath == '__v') continue;

        const targetSchema = targetModel.schema.path(targetPath);

        //Validation
        //GeneratorProvider will handle any types of schema.
        const generator = GeneratorProvider._getGenerator(targetSchema);
        const value = generator.generate();
        instance.set(targetPath, value);
      }
      instance.save((err, result) => {
        if (err) {
          console.error(err);
          return false;
        }
      });
    }
    return true;
  }
}

export default MongooseFaker;