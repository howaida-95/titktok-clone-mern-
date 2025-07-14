import mongoose from "mongoose";

/*
schema telling db that we're storing information in 
what kind of data structure to expect 
*/

// tiktok video model
const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: Number,
    messages: String,
    description: String,
    shares: Number,
});

// collection inside the database
export default mongoose.model("tiktokVideos", tiktokSchema);
