import IGenerator from "../interfaces/IGenerator";
import { Schema } from 'mongoose';

class MixedGenerator implements IGenerator<any>{
  private _schema: Schema.Types.Mixed;
  constructor(schema: Schema.Types.Mixed) {
    this._schema = schema;
  }

  generate(): any {
    return new Object();
  }
}

export default MixedGenerator;