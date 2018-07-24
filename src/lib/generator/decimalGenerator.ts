import IGenerator from "../interfaces/IGenerator";
import { Types, Schema } from 'mongoose';
import faker from 'faker';

class DecimalGenerator implements IGenerator<Types.Decimal128>{
  private _schema: Schema.Types.Decimal128;
  constructor(schema: Schema.Types.Decimal128) {
    this._schema = schema;
  }

  generate(): Types.Decimal128 {
    const amount = faker.finance.amount();
    return Types.Decimal128.fromString(amount);
  }
}

export default DecimalGenerator;