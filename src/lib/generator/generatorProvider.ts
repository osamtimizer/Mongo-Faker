import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import SchemaValidator from '../schema/SchemaValidator';

import IGenerator from '../interfaces/IGenerator';
import StringGenerator from './stringGenerator';
import NumberGenerator from './numberGenerator';
import ArrayGenerator from './arrayGenerator';
import BufferGenerator from './bufferGenerator';
import DecimalGenerator from './decimalGenerator';
import MixedGenerator from './mixedGenerator';
import ObjectIdGenerator from './objectIdGenerator';
import MapGenerator from './mapGenerator';

class GeneratorProvider {
  static _getGenerator(type: mongoose.SchemaType) {
    if (SchemaValidator.isSchemaNumber(type)) {
      return new NumberGenerator(<Schema.Types.Number>type);
    } else if (SchemaValidator.isSchemaString(type)) {
      return new StringGenerator(<Schema.Types.String>type);
    } else if (SchemaValidator.isSchemaDecimal(type)) {
      return new DecimalGenerator(<Schema.Types.Decimal128>type);
    }

  };

  static getGenerator(target: string, type: mongoose.SchemaType) {
    if (target == "Buffer") return new BufferGenerator(<Schema.Types.Buffer>type);
    if (target == "Decimal128") return new DecimalGenerator(<Schema.Types.Decimal128>type);
    if (target == "Mixed") return new MixedGenerator(<Schema.Types.Mixed>type);
    if (target == "Number") return new NumberGenerator(<Schema.Types.Number>type);
    if (target == "ObjectId") return new ObjectIdGenerator(<Schema.Types.ObjectId>type);
    if (target == "String") return new StringGenerator(<Schema.Types.String>type);

    //T must be determined.
    if (target == "Array") return new ArrayGenerator(<Schema.Types.Array>type);

    //K,V must be determined.
    //No deifinition of Types.Map found.
    //How should be specified?
    //if (target == "Map") return new MapGenerator(<Schema.Types.Map>type);

    return null;
  }
}

export default GeneratorProvider;