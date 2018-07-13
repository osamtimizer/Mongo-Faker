import mongoose from 'mongoose';
import IOptions from '../interfaces/IOptions';

class SchemaValidator {
  //Type Guards
  static isOptions = (item: any): item is IOptions =>
    item.type !== undefined;

  static isSchemaString = (item: any): item is mongoose.Schema.Types.String =>
    item.instance == "String";

  static isSchemaNumber = (item: any): item is mongoose.Schema.Types.Number =>
    item.instance == "Number";
}

export default SchemaValidator;