import IGenerator from "../interfaces/IGenerator";
import { Schema } from 'mongoose';

class DateGenerator implements IGenerator<Date>{
  private _schema: Schema.Types.Date;
  constructor(schema: Schema.Types.Date) {
    this._schema = schema;
  }

  generate(): Date {
    return new Date();
  }
}

export default DateGenerator;