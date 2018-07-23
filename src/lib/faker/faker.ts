import MongooseFaker from './mongooseFaker';

class FakerGenerator {
  constructor() {
  }

  getConcreteFaker(target: string, storage: string) {

    if (!target || !storage) return null;
    if (target.toLowerCase() == "mongoose") {
      return new MongooseFaker(storage);
    }
  }
}

export default FakerGenerator