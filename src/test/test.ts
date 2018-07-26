import chai from 'chai';
import mongoose from 'mongoose';
import User from './models/user';
import IUserDocument from './interfaces/IUserDocument'
import FakeGenerator from '../lib/faker/faker';
import { AsyncResource } from 'async_hooks';
import BankAccount from './models/bankAccount';
const expect = chai.expect;

const generator = new FakeGenerator();
const faker = generator.getConcreteFaker("mongoose", "mongodb://localhost:37017/testdb");

describe('first test', () => {
  it('should be passed', () => {
    expect(1).to.equal(1);
  })
});

describe('User Model', () => {
  it('should finish successfully', async () => {
    return faker.generateRand(User, 10);
  });
});

describe('BankAccount Model', () => {
  it('should finish successfully', async () => {
    return faker.generateRand(BankAccount, 10);
  })
});