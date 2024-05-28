import axios from "axios";
import { API_BASE_URL } from "../config/apiConfig.js";
import Repo from "../models/repoModel.js";

const getPopularRepos = async (username) => {
  let page = 1;
  let allRepos = [];
  let repos;

  do {
    const response = await axios.get(
      `${API_BASE_URL}/users/${username}/repos`,
      {
        params: {
          per_page: 100,
          page: page,
        },
      }
    );
    repos = response.data;
    allRepos = allRepos.concat(repos);
    page++;
  } while (repos.length === 100);

  const popularRepos = allRepos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .map((repo) => new Repo(repo.name, repo.stargazers_count, repo.html_url));

  return popularRepos;
};

export { getPopularRepos };
