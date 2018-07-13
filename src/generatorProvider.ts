import mongoose from 'mongoose';
import IGenerator from './IGenerator';
import StringGenerator from './stringGenerator';

class GeneratorProvider {
  static getGenerator(target: string, type: mongoose.SchemaType) {
    if (target == "String") return new StringGenerator(<mongoose.Schema.Types.String>type);

    return null;
  }
}

export default GeneratorProvider;