import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "../Ticker/Ticker";

export const VideoFooter = ({ channel, description, song }) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__TickerContainer">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker>{song}</Ticker>
                </div>
            </div>
            <img src="https://static.thenounproject.com/png/934821-200.png" className="videoFooter__record" />
        </div>
    );
};
