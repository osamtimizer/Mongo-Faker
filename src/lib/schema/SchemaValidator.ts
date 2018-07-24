import mongoose, { Schema } from 'mongoose';
import IOptions from '../interfaces/IOptions';
import IValidator from '../interfaces/IValidator'
import SchemaTypeExtend from './schemaTypeExtend';

class SchemaValidator {
  //Type Guards
  static isOptions = (item: any): item is IOptions =>
    item.type !== undefined;

  static isSchemaString = (item: any): item is Schema.Types.String =>
    item.instance == "String";

  static isSchemaNumber = (item: any): item is Schema.Types.Number =>
    item.instance == "Number";

  static isSchemaArray = (item: any): item is Schema.Types.Array =>
    item.instance == "Array"

  static isSchemaBuffer = (item: any): item is Schema.Types.Buffer =>
    item.instance == "Buffer"

  static isSchemaDecimal = (item: any): item is Schema.Types.Decimal128 =>
    item.instance == "Decimal128"

  static isSchemaObjectId = (item: any): item is Schema.Types.ObjectId =>
    item.instance == "ObjectId"

  static isSchemaMixed = (item: any): item is Schema.Types.Mixed =>
    item.instance == "Mixed"

  static isSchemaTypeExtend = (item: any): item is SchemaTypeExtend =>
    item.validators !== undefined;

  static isValidator = (item: any): item is IValidator =>
    item.type !== undefined;

}

export default SchemaValidator;