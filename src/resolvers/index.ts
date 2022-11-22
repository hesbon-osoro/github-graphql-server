import axios from 'axios';

const GITHUB_API = 'https://api.github.com/users';

export const resolvers = {
  Query: {
    user: async (_: any, { username }: { username: string }) => {
      const { data } = await axios.get(`${GITHUB_API}/${username}`);
      return data;
    },
    users: async () => {
      const { data } = await axios.get(`${GITHUB_API}`);
      return data;
    },
    followers: async (_: any, { username }: { username: string }) => {
      const { data } = await axios.get(`${GITHUB_API}/${username}/followers`);
      return data;
    },
    following: async (_: any, { username }: { username: string }) => {
      const { data } = await axios.get(`${GITHUB_API}/${username}/following`);
      return data;
    },
  },
};
