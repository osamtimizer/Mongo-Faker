import IValidator from './IValidator';

export default interface ILengthValidator extends IValidator {
  minlength: number
  maxlength: number
}