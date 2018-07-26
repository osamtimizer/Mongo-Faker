import IGenerator from "../interfaces/IGenerator";
import { Schema } from 'mongoose';

class BufferGenerator implements IGenerator<Buffer>{
  private _schema: Schema.Types.Buffer;

  constructor(schema: Schema.Types.Buffer) {
    this._schema = schema;
  }
  generate(): Buffer {
    const result = new Buffer(0);
    result.fill(0);
    return result;
  }
}

export default BufferGenerator;