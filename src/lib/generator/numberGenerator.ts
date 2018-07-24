import IGenerator from '../interfaces/IGenerator';
import { Schema, SchemaType } from 'mongoose';
import faker from 'faker';

import SchemaValidator from '../schema/SchemaValidator';
import SchemaTypeExtend from '../schema/schemaTypeExtend'
import ILengthValidator from '../interfaces/ILengthValidator';
import ILimitNumberValidator from '../interfaces/ILimitNumberValidator';
import ValidatorOptions from '../schema/validatorOptions';

class NumberGenerator implements IGenerator<number>{
  private _schema: Schema.Types.Number;

  constructor(schema: Schema.Types.Number) {
    this._schema = schema;
  }

  generate() {
    let validators;
    if (SchemaValidator.isSchemaTypeExtend(this._schema)) {
      validators = this._schema.validators;
    }

    let validatorOptions = new ValidatorOptions();
    validators.forEach(element => {
      if (SchemaValidator.isValidator(element))
        validatorOptions.type = element.type;

      if (validatorOptions.type == "min" || validatorOptions.type == "max") {
        const validator = <ILimitNumberValidator>element;
        validatorOptions.min = validator.min;
        validatorOptions.max = validator.max;

      } else if (validatorOptions.type == "required") {
        validatorOptions.required = true;
      }
    });

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