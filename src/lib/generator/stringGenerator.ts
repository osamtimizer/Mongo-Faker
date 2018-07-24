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
    let validators;
    if (SchemaValidator.isSchemaTypeExtend(this._schema)) {
      validators = this._schema.validators;
    }

    let validatorOptions = new ValidatorOptions();
    validators.forEach(element => {
      if (SchemaValidator.isValidator(element))
        validatorOptions.type = element.type;

      if (validatorOptions.type == "minlength") {
        const validator = <ILengthValidator>element;
        validatorOptions.minlength = validator.minlength;
      } else if (validatorOptions.type == "maxlength") {
        const validator = <ILengthValidator>element;
        validatorOptions.maxlength = validator.maxlength;
      } else if (validatorOptions.type == "required") {
        validatorOptions.required = true;
      }
    });

    const _stringGenerator = new _StringGenerator(validatorOptions);
    const data = _stringGenerator.generate();

    return data;
  }

}

class _StringGenerator {
  private readonly _MINNUM = 0;
  private readonly _MAXNUM = 10;

  private _validatorOptions: ValidatorOptions;
  constructor(validatorOptions: ValidatorOptions) {
    this._validatorOptions = validatorOptions;
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