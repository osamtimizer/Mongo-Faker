import IGenerator from "../interfaces/IGenerator";
import { Types, Schema } from 'mongoose';

class ObjectIdGenerator implements IGenerator<Types.ObjectId>{
  private _schema: Schema.Types.ObjectId;
  constructor(schema: Schema.Types.ObjectId) {
    this._schema = schema;
  }

  generate(): Types.ObjectId {
    return new Types.ObjectId();
  }
}

export default ObjectIdGenerator;