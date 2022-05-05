import sadEmoji from "../../assets/sad-emoji.svg";
import "./EndMessage.scss";

function EndMessage() {
    return (
        <div className="end-msg">
            <img src={sadEmoji} alt="Sad Smiley Face" width={200} />
            <p>There are no more cars</p>
        </div>
    );
}

export default EndMessage;