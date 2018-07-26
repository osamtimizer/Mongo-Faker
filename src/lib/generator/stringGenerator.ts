import IGenerator from '../interfaces/IGenerator';
import mongoose, { SchemaType } from 'mongoose';
import faker from 'faker';

import SchemaValidator from '../schema/SchemaValidator';
import SchemaTypeExtend from '../schema/schemaTypeExtend'
import ILengthValidator from '../interfaces/ILengthValidator';
import ILimitNumberValidator from '../interfaces/ILimitNumberValidator';
import ValidatorOptions from '../schema/validatorOptions';

class StringGenerator implements IGenerator<string>{
  private _schema: mongoose.Schema.Types.String;

  constructor(schema: mongoose.Schema.Types.String) {
    this._schema = schema;
  }

  generate() {
    let validatorOptions: ValidatorOptions;
    if (SchemaValidator.isSchemaTypeExtend(this._schema)) {
      validatorOptions = new ValidatorOptions(this._schema);
    }

    const _stringGenerator = new _StringGenerator(validatorOptions);
    const data = _stringGenerator.generate();

    return data;
  }

}

class _StringGenerator {
  private readonly _MINNUM;
  private readonly _MAXNUM = 10;

  private _validatorOptions: ValidatorOptions;
  constructor(validatorOptions: ValidatorOptions) {
    this._validatorOptions = validatorOptions;
    if (this._validatorOptions.minlength) {
      this._MINNUM = this._validatorOptions.minlength;
    } else if (this._validatorOptions.required) {
      this._MINNUM = 1;
    } else {
      this._MINNUM = 0;
    }

  }

  generate(): string {
    if (!this._validatorOptions) return "";


    //This option allows blank data.
    if (!this._validatorOptions.required && Math.random() > 0.5) return "";

    let data = "";

    const minlength = this._validatorOptions.minlength || this._MINNUM;
    const maxlength = this._validatorOptions.maxlength || this._MAXNUM;
    const rand = faker.random.number({ max: maxlength, min: minlength });
    data = faker.random.alphaNumeric(rand);

    return data;
  }
}

export default StringGenerator;