import mongoose from 'mongoose';
import authorModel from './models/author';
import author from './models/author';

const resolvers = {
  Query: {
    author: () => {
      return authors;
    },
    author: (root, {id}) => {
      return authors.find(author => id === author.id);
    }
  },
  Mutation: {
    addAuthor: (root, {name, age, books}) => {
      const author = new authorModel({name: name, age: age, books: books});
      return author.save();
    },
    deleteAuthor: (root, {id}) => {
      return authorModel.findOneAndRemove({id: id});
    },
    updateAuthor: (root, {id, name, age, books}) => {
      return authorModel.findOneAndUpdate({id: id}, {name, age, books});
    }
  }
};

export default resolvers;