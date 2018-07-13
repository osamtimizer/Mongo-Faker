import mongoose from 'mongoose';
export default class SchemaTypeExtend extends mongoose.SchemaType {

  options() {
    return this.options;
  }

  instance() {
    return this.instance;
  }
}