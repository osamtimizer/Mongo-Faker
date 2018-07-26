import faker from 'faker';

import IGenerator from "../interfaces/IGenerator";
import { Types, Schema } from 'mongoose';
import ValidatorOptions from '../schema/validatorOptions';
import SchemaValidator from '../schema/SchemaValidator';
import { Decimal128 } from '../../../node_modules/@types/bson';

class DecimalGenerator implements IGenerator<Types.Decimal128>{
  private _schema: Schema.Types.Decimal128;
  constructor(schema: Schema.Types.Decimal128) {
    this._schema = schema;
  }

  generate(): Types.Decimal128 {

    let validatorOptions: ValidatorOptions;
    if (SchemaValidator.isSchemaTypeExtend(this._schema)) {
      validatorOptions = new ValidatorOptions(this._schema);
    }

    const decimalGenerator = new _DecimalGenerator(validatorOptions);
    const result = decimalGenerator.generate();

    return result;
  }
}

class _DecimalGenerator {
  private _MINNUM = 0;
  private _MAXNUM = 999;
  private _validatorOptions: ValidatorOptions;

  constructor(validatorOptions: ValidatorOptions) {
    this._validatorOptions = validatorOptions;
  }

  generate(): Types.Decimal128 {
    if (!this._validatorOptions.required && Math.random() > 0.5) return null;

    const amount = faker.finance.amount(
      this._validatorOptions.min || this._MINNUM,
      this._validatorOptions.max || this._MAXNUM);

    return Types.Decimal128.fromString(amount);
  }
}

export default DecimalGenerator;