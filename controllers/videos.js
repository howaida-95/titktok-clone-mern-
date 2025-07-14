import Videos from "../models/Video.js";
import Data from "../data/staticData.js";

export const getStaticPosts = (req, res) => {
    res.status(200).send(Data);
};

export const getVideos = async (req, res) => {
    try {
        const videos = await Videos.find();
        res.status(200).send(videos);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const createVideo = async (req, res) => {
    try {
        const dbVideos = req.body;
        const data = await Videos.create(dbVideos);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
};
