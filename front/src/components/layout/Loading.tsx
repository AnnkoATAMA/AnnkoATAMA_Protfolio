import "./css/loading.css";
import teitetsu from "../../assets/teitetsu.svg";

const Loading = () => {
    return (
        <div className="loading-black">
            <img src={teitetsu} alt="Loading" className="loading-svg" />
        </div>
    );
};

export default Loading;
