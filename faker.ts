import MongooseFaker from './mongooseFaker';

class FakerGenerator {
  constructor() {
  }

  getConcreteFaker(target: string) {

    if (target.toLowerCase() == "mongoose") {
      return new MongooseFaker();
    }
  }
}

export default FakerGenerator