import mongoose from 'mongoose';
import User from './user';
import IUserDocument from './IUserDocument'
import FakeGenerator from './faker';

const generator = new FakeGenerator();
const faker = generator.getConcreteFaker("mongoose");

faker.generateRand(User, 100);