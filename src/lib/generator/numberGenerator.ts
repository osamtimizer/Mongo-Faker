import IGenerator from '../interfaces/IGenerator';
import mongoose, { SchemaType } from 'mongoose';

import SchemaValidator from '../schema/SchemaValidator';
import SchemaTypeExtend from '../schema/schemaTypeExtend'
import ILengthValidator from '../interfaces/ILengthValidator';
import ILimitNumberValidator from '../interfaces/ILimitNumberValidator';
import ValidatorOptions from '../schema/validatorOptions';

class NumberGenerator implements IGenerator<number>{
  private _schema: mongoose.Schema.Types.Number;

  constructor(schema: mongoose.Schema.Types.Number) {
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
    return 0;
  }
}

class _NumberGenerator {
  _validatorOptions: ValidatorOptions;
  constructor(validatorOptions: ValidatorOptions) {
    this._validatorOptions = validatorOptions;
  }

  generate(): number {
    if (!this._validatorOptions) return null;

    //This option allows blank data.
    if (this._validatorOptions.required && Math.random() > 0.5) return null;

    const minNum = this._validatorOptions.min || -255;
    const maxNum = this._validatorOptions.max || 255;
    const data = Math.round(Math.random() * (maxNum - minNum)) + minNum;


    if (this._validatorOptions.min || this._validatorOptions.max) {
      if (this._validatorOptions.min) {

      }
      if (this._validatorOptions.max) {

      }
    }

    return data;
  }
}
