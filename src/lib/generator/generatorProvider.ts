import mongoose from 'mongoose';
import IGenerator from '../interfaces/IGenerator';
import StringGenerator from './stringGenerator';
import NumberGenerator from './numberGenerator';

class GeneratorProvider {
  static getGenerator(target: string, type: mongoose.SchemaType) {
    if (target == "String") return new StringGenerator(<mongoose.Schema.Types.String>type);
    if (target == "Number") return new NumberGenerator(<mongoose.Schema.Types.Number>type);

    return null;
  }
}

export default GeneratorProvider;