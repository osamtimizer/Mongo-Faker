import mongoose, { SchemaType } from 'mongoose';

import IGenerator from '../interfaces/IGenerator';
import ILengthValidator from '../interfaces/ILengthValidator';
import ILimitNumberValidator from '../interfaces/ILimitNumberValidator';
import IArrayGenerator from '../interfaces/IArrayGenerator';

import SchemaValidator from '../schema/SchemaValidator';
import SchemaTypeExtend from '../schema/schemaTypeExtend'
import ValidatorOptions from '../schema/validatorOptions';
import StringGenerator from './stringGenerator';


class ArrayGenerator<T> implements IArrayGenerator<T>{
  private _schema: mongoose.Schema.Types.Array;

  constructor(schema: mongoose.Schema.Types.Array) {
    this._schema = schema;
  }

  generate(): Array<T> {
    return new Array<T>();
  }
}

class _arrayGenerator {

}

export default ArrayGenerator;