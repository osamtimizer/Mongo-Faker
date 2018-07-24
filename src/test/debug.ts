import mongoose from 'mongoose';
import User from './user';
import BankAccount from './bankAccount';
import FakeGenerator from '../lib/faker/faker';

const generator = new FakeGenerator();
const faker = generator.getConcreteFaker("mongoose", "mongodb://localhost:37017/testdb");

//string, number
faker.generateRand(User, 10);

//Decimal128
faker.generateRand(BankAccount, 10);