import "./Video.css";
import { useState, useRef } from "react";
import { VideoSidebar } from "../VideoSidebar/VideoSidebar";
import { VideoFooter } from "../VideoFooter/VideoFooter";

const VideoPlayer = ({ url, likes, shares, messages, channel, description, song }) => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handleVideoPress = () => {
        // if the video is playing stop it otherwise play it
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };
    return (
        <div className="video">
            <video
                onClick={handleVideoPress}
                ref={videoRef}
                className="video__player"
                src={url}
                // poster={poster}
                // autoPlay={autoPlay}
                // loop={loop}
                // controls={controls}
                // muted={muted}
            >
                Your browser does not support the video tag.
            </video>
            {/* video sidebar */}
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
            {/* video footer */}
            <VideoFooter channel={channel} description={description} song={song} />
        </div>
    );
};

export default VideoPlayer;
