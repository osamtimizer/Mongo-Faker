import SchemaTypeExtend from "./schemaTypeExtend";
import SchemaValidator from './SchemaValidator';
import ILengthValidator from '../interfaces/ILengthValidator';

class ValidatorOptions {
  type: string
  min: number
  max: number
  minlength: number
  maxlength: number
  required: boolean

  constructor(schemaType: SchemaTypeExtend) {
    let validators;
    validators = schemaType.validators;

    validators.forEach(element => {
      if (SchemaValidator.isValidator(element))
        this.type = element.type;

      if (this.type == "minlength") {
        const validator = <ILengthValidator>element;
        this.minlength = validator.minlength;
      } else if (this.type == "maxlength") {
        const validator = <ILengthValidator>element;
        this.maxlength = validator.maxlength;
      } else if (this.type == "required") {
        this.required = true;
      }
    });

  }
}

export default ValidatorOptions;