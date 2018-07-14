import IGenerator from "./IGenerator";

export default interface IArrayGenerator<S> extends IGenerator<Array<S>> {
  generate(): Array<S>
}