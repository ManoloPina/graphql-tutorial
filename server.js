import express from 'express';
import { graphqlExpress } from 'apollo-server-express';
import { graphiqlExpress } from 'apollo-server-express/dist/expressApollo';
import mongoose from 'mongoose';
import schema from './schema';
import bodyParser from 'body-parser';
const server = express();


server.use('/graphiql', graphiqlExpress({
  endpointURL: "graphql"
}));

mongoose.connect('mongodb://localhost/graphqlTutorial', {
  useMongoClient: true
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connection to database was successfull!!');
});

server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));


server.listen(4000, () => {
  console.log('Listening on port 4000');
});