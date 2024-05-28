import { Router } from "express";
const router = Router();
import { getPopularRepos } from "../controllers/repoController.js";

router.get("/repos", getPopularRepos);

export default router;
