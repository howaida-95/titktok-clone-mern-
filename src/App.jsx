import axios from "./axios";
import "./App.css";
import Video from "./components/Video/Video";
import { useEffect, useState } from "react";

export default function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await axios.get("v2/posts");
            setVideos(response?.data);
            return response;
        }
        fetchPosts();
    }, []);

    return (
        <div className="app">
            <div className="app__videos">
                {videos?.map((item) => {
                    return (
                        <Video
                            key={item?._id}
                            url={item?.url}
                            channel={item?.channel}
                            description={item?.description}
                            song={item?.song}
                            likes={item?.likes}
                            shares={item?.shares}
                            messages={item?.messages}
                        />
                    );
                })}
            </div>
        </div>
    );
}
// 3.41
