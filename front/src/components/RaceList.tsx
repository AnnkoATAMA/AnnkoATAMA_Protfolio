import "./racelist.css"
import {useNavigate} from "react-router-dom";

const RaceList = () => {

    const navigate = useNavigate();

    return (
        <div className="raceul">
            <button className="racelist" onClick={() => navigate("/")}>
                <div className="button-top-pink"></div>
                <div className="button-label">Home</div>
            </button>
            <button className="racelist" onClick={() => navigate("/")}>
                <div className="button-top-orange"></div>
                <div className="button-label">Home</div>
            </button>
            <button className="racelist" onClick={() => navigate("/")}>
                <div className="button-top-green"></div>
                <div className="button-label">Home</div>
            </button>
            <button className="racelist" onClick={() => navigate("/")}>
                <div className="button-top-yellow"></div>
                <div className="button-label">Home</div>
            </button>
            <button className="racelist" onClick={() => navigate("/")}>
                <div className="button-top-blue"></div>
                <div className="button-label">Home</div>
            </button>
            <button className="racelist" onClick={() => navigate("/")}>
                <div className="button-top-red"></div>
                <div className="button-label">Home</div>
            </button>
            <button className="racelist" onClick={() => navigate("/")}>
                <div className="button-top-black"></div>
                <div className="button-label">Home</div>
            </button>
            <button className="racelist" onClick={() => navigate("/")}>
                <div className="button-top-white"></div>
                <div className="button-label">Home</div>
            </button>
        </div>
    )
}
export default RaceList
