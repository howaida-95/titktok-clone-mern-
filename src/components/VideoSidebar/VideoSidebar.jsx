import "./VideoSidebar.css";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const VideoSidebar = ({ likes, shares, messages }) => {
    const [liked, setLiked] = useState(false);

    const favToggler = () => {
        setLiked(!liked);
    };
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteIcon fontSize="large" onClick={favToggler} />
                ) : (
                    <FavoriteBorderIcon fontSize="large" onClick={favToggler} />
                )}
                <span>{liked ? likes + 1 : likes}</span>
            </div>

            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <span>{messages}</span>
            </div>

            <div className="videoSidebar__button">
                <ShareIcon />
                <span>{shares}</span>
            </div>
        </div>
    );
};
