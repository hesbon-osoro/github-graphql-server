import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: ID!
    login: String!
    name: String
    avatar_url: String!
    followers: Int!
    following: Int!
    public_repos: Int!
    company: String
    location: String
    email: String
    bio: String
    blog: String
    twitter_username: String
    created_at: String
    updated_at: String
  }

  type Query {
    users: [User]
    user(username: String!): User!
    followers(username: String!): [User]
    following(username: String!): [User]
  }
`;
