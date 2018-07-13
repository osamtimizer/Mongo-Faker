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

    validators.forEach(element => {
      let validatorOptions = new ValidatorOptions();
      if (SchemaValidator.isValidator(element))
        validatorOptions.type = element.type;

      if (validatorOptions.type == "min" || validatorOptions.type == "max") {
        const validator = <ILimitNumberValidator>element;
        validatorOptions.min = validator.min;
        validatorOptions.max = validator.max;

      } else if (validatorOptions.type == "minlength" || validatorOptions.type == "maxlength") {
        const validator = <ILengthValidator>element;
        validatorOptions.minlength = validator.minlength;
        validatorOptions.maxlength = validator.maxlength;

      } else if (validatorOptions.type == "required") {
        validatorOptions.required = true;
      }
    });


    return "testdata";
  }

}

export default StringGenerator;