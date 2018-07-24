import IGenerator from "../interfaces/IGenerator";
import { Types, Schema } from 'mongoose';

class DecimalGenerator implements IGenerator<Types.Decimal128>{
  private _schema: Schema.Types.Decimal128;
  constructor(schema: Schema.Types.Decimal128) {
    this._schema = schema;
  }

  generate(): Types.Decimal128 {
    return new Types.Decimal128(new Buffer('', 'utf-8'));
  }
}

export default DecimalGenerator;