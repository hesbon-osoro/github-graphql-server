import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

server.graphqlPath = '/api/graphql';

server.listen().then(({ url }) => console.log(`Server started at ${url}`));
