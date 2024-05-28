import { getPopularRepos } from "../../services/repoService.js";

const resolvers = {
  Query: {
    popularRepos: async (_, { username }) => {
      return await getPopularRepos(username);
    },
  },
};

export { resolvers };
