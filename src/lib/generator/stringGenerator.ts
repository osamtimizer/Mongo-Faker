import IGenerator from '../interfaces/IGenerator';
import mongoose, { SchemaType } from 'mongoose';

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

      if (validatorOptions.type == "minlength" || validatorOptions.type == "maxlength") {
        const validator = <ILengthValidator>element;
        validatorOptions.minlength = validator.minlength;
        validatorOptions.maxlength = validator.maxlength;

      } else if (validatorOptions.type == "required") {
        validatorOptions.required = true;
      }
    });

    const _stringGenerator = new _StringGenerator(validatorOptions);
    const data = _stringGenerator.generate();

    return data || "empty";
  }

}

class _StringGenerator {
  _validatorOptions: ValidatorOptions;
  constructor(validatorOptions: ValidatorOptions) {
    this._validatorOptions = validatorOptions;
  }

  generate(): string {
    if (!this._validatorOptions) return "";

    //This option allows blank data.
    if (this._validatorOptions.required && Math.random() > 0.5) return "";

    let data: string;
    if (this._validatorOptions.minlength || this._validatorOptions.maxlength) {
      if (this._validatorOptions.minlength) {
      }
      if (this._validatorOptions.maxlength) {

      }
    }

    return data;
  }
}

export default StringGenerator;