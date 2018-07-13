import IGenerator from '../interfaces/IGenerator';
import mongoose from 'mongoose';

class StringGenerator implements IGenerator<string>{
  private _schema: mongoose.Schema.Types.String;

  constructor(schema: mongoose.Schema.Types.String) {
    this._schema = schema;
  }

  generate() {
    return "testdata";
  }

}

export default StringGenerator;