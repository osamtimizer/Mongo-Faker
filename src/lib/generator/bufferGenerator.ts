import IGenerator from "../interfaces/IGenerator";
import { Schema } from 'mongoose';

class BufferGenerator implements IGenerator<Buffer>{
  private _schema: Schema.Types.Buffer;

  constructor(schema: Schema.Types.Buffer) {
    this._schema = schema;
  }
  generate(): Buffer {
    return new Buffer('', 'utf-8');
  }
}

export default BufferGenerator;