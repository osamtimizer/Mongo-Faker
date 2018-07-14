import mongoose from 'mongoose';

import SchemaTypeExtend from '../schema/schemaTypeExtend';
import SchemaValidator from '../schema/SchemaValidator';
import GeneratorProvider from '../generator/generatorProvider';

import IGenerator from '../interfaces/IGenerator';
import IOptions from '../interfaces/IOptions';
import IFaker from '../interfaces/IFaker';

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

    const instance = new targetModel();
    for (let targetPath of paths) {
      const targetSchema = targetModel.schema.path(targetPath);

      //Validation
      if (SchemaValidator.isSchemaString(targetSchema)) {
        console.log('String');
        const generator = GeneratorProvider.getGenerator("String", targetSchema);
        const value = generator.generate();
        instance.set(targetPath, value);
        const num = 0;
      } else if (SchemaValidator.isSchemaNumber(targetSchema)) {
        console.log('Number');
        const generator = GeneratorProvider.getGenerator("Number", targetSchema);
        const value = generator.generate();
        instance.set(targetPath, value);
      } else {
        console.log('invalid schema');
      }
    }
  }
}


export default MongooseFaker;