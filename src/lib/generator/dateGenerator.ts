import IGenerator from "../interfaces/IGenerator";

class DateGenerator implements IGenerator<Date>{
  generate(): Date {
    return new Date();
  }
}