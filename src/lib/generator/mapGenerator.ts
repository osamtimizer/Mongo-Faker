import IGenerator from "../interfaces/IGenerator";

class MapGenerator<K, V> implements IGenerator<Map<K, V>>{
  generate(): Map<K, V> {
    return new Map<K, V>();
  }
}