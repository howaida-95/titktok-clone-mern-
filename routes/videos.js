import express from "express";
import { getStaticPosts, getVideos, createVideo } from "../controllers/videos.js";

const router = express.Router();

router.get("/v1/posts", getStaticPosts);
router.get("/v2/posts", getVideos);
router.post("/v2/posts", createVideo);

export default router;
