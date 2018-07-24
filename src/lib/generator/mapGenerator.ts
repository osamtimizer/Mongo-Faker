import IGenerator from "../interfaces/IGenerator";
import { Schema } from 'mongoose';

class MapGenerator<K, V> implements IGenerator<Map<K, V>>{
  generate(): Map<K, V> {
    return new Map<K, V>();
  }
}

export default MapGenerator;
