import mongoose from 'mongoose';
import IOptions from '../interfaces/IOptions';
import IValidator from '../interfaces/IValidator'
import SchemaTypeExtend from './schemaTypeExtend';

class SchemaValidator {
  //Type Guards
  static isOptions = (item: any): item is IOptions =>
    item.type !== undefined;

  static isSchemaString = (item: any): item is mongoose.Schema.Types.String =>
    item.instance == "String";

  static isSchemaNumber = (item: any): item is mongoose.Schema.Types.Number =>
    item.instance == "Number";

  static isSchemaTypeExtend = (item: any): item is SchemaTypeExtend =>
    item.validators !== undefined;

  static isValidator = (item: any): item is IValidator =>
    item.type !== undefined;

}

export default SchemaValidator;