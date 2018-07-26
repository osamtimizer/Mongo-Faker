import mongoose from 'mongoose';
import FakeGenerator from '../lib/faker/faker';

//Sample Models
import User from './models/user';
import BankAccount from './models/bankAccount';
import Binary from './models/binary';

const generator = new FakeGenerator();
const faker = generator.getConcreteFaker("mongoose", "mongodb://localhost:37017/testdb");

//string, number
faker.generateRand(User, 10);

//Decimal128
faker.generateRand(BankAccount, 10);

//Buffer
faker.generateRand(Binary, 10);