import { Schema } from 'mongoose';
import faker from 'faker';

import IGenerator from '../interfaces/IGenerator';
import SchemaValidator from '../schema/SchemaValidator';
import ValidatorOptions from '../schema/validatorOptions';

class NumberGenerator implements IGenerator<number>{
  private _schema: Schema.Types.Number;

  constructor(schema: Schema.Types.Number) {
    this._schema = schema;
  }

  generate() {
    let validatorOptions: ValidatorOptions;
    if (SchemaValidator.isSchemaTypeExtend(this._schema)) {
      validatorOptions = new ValidatorOptions(this._schema);
    }

    const _numberGenerator = new _NumberGenerator(validatorOptions);
    const data = _numberGenerator.generate();
    return data || 0;
  }
}

class _NumberGenerator {
  private readonly _MAXNUM = 255;
  private readonly _MINNUM = 0;
  private _validatorOptions: ValidatorOptions;

  constructor(validatorOptions: ValidatorOptions) {
    this._validatorOptions = validatorOptions;
  }

  generate(): number {
    if (!this._validatorOptions) return null;

    //This option allows blank data.
    if (!this._validatorOptions.required && Math.random() > 0.5) return null;

    const data = faker.random.number({
      min: this._validatorOptions.min || this._MINNUM,
      max: this._validatorOptions.max || this._MAXNUM
    });

    return data;
  }
}

export default NumberGenerator;