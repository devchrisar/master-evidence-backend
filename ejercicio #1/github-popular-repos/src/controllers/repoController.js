import { getPopularRepos as _getPopularRepos } from "../services/repoService.js";

const getPopularRepos = async (req, res) => {
  try {
    const repos = await _getPopularRepos("google");
    res.json(repos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getPopularRepos };
