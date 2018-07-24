import IGenerator from "../interfaces/IGenerator";

class BufferGenerator implements IGenerator<Buffer>{
  generate(): Buffer {
    return new Buffer('', 'utf-8');
  }
}

export default BufferGenerator;