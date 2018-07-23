import mongoose from 'mongoose';
import User from './user';
import IUserDocument from './IUserDocument'
import FakeGenerator from '../lib/faker/faker';

const generator = new FakeGenerator();
const faker = generator.getConcreteFaker("mongoose", "mongodb://localhost:37017/testdb");

faker.generateRand(User, 100);