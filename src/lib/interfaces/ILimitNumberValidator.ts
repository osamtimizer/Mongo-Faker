import IValidator from './IValidator';

export default interface ILimitNumberValidator extends IValidator {
  min: number
  max: number
}