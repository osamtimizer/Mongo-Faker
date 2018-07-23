import chai from 'chai';
import mongoose from 'mongoose';
import User from './user';
import IUserDocument from './IUserDocument'
import FakeGenerator from '../lib/faker/faker';
const expect = chai.expect;

const generator = new FakeGenerator();
const faker = generator.getConcreteFaker("mongoose");

//faker.generateRand(User, 100);

describe('first test', () => {
  it('should be passed', () => {
    expect(1).to.equal(1);
  })
});