import "./racelist.css";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import teitetsu from "../assets/teitetsu.svg";

const RaceList = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const buttons = document.querySelectorAll(".racelist");
        buttons.forEach((button) => {
            button.addEventListener("animationend", () => {
                button.classList.remove("racelist");
                button.classList.add("racelist-hover");
            });
        });
        return () => {
            buttons.forEach((button) => {
                button.removeEventListener("animationend", () => {
                    button.classList.remove("racelist");
                    button.classList.add("racelist-hover");
                });
            });
        };
    }, []);

    return (
        <div>
            <div className="title-frame">
                <h3>Welcome to my portfolio!</h3>
            </div>
            <div className="raceul">
                <button className="racelist" onClick={() => navigate("/contact")}>
                    <div className="button-top-pink"></div>
                    <div className="button-label">
                        <div className="button-label-num">
                            <div className="button-label-num-pink">8</div>
                        </div>
                        <span>C</span>
                        <span>O</span>
                        <span>N</span>
                        <span>T</span>
                        <span>A</span>
                        <span>C</span>
                        <span>T</span>
                    </div>
                    <img src={teitetsu} className="button-list-hover-anim" alt={"蹄鉄"}/>
                </button>
                <button className="racelist" onClick={() => window.location.href = "https://x.com/Takumi93Ma"}>
                    <div className="button-top-orange"></div>
                    <div className="button-label">
                        <div className="button-label-num">
                            <div className="button-label-num-orange">7</div>
                        </div>
                        <span>T</span>
                        <span>W</span>
                        <span>I</span>
                        <span>T</span>
                        <span>T</span>
                        <span>E</span>
                        <span>R</span>
                    </div>
                    <img src={teitetsu} className="button-list-hover-anim" alt={"蹄鉄"}/>
                </button>
                <button className="racelist" onClick={() => window.location.href = "https://github.com/AnnkoATAMA"}>
                    <div className="button-top-green"></div>
                    <div className="button-label">
                        <div className="button-label-num">
                            <div className="button-label-num-green">6</div>
                        </div>
                        <span>G</span>
                        <span>I</span>
                        <span>T</span>
                        <span>H</span>
                        <span>U</span>
                        <span>B</span>
                    </div>
                    <img src={teitetsu} className="button-list-hover-anim" alt={"蹄鉄"}/>
                </button>
                <button className="racelist" onClick={() => window.location.href = "https://zenn.dev/takuanko"}>
                    <div className="button-top-yellow"></div>
                    <div className="button-label">
                        <div className="button-label-num">
                            <div className="button-label-num-yellow">5</div>
                        </div>
                        <span>Z</span>
                        <span>E</span>
                        <span>N</span>
                        <span>N</span>
                    </div>
                    <img src={teitetsu} className="button-list-hover-anim" alt={"蹄鉄"}/>
                </button>
                <button className="racelist" onClick={() => navigate("/repository")}>
                <div className="button-top-blue"></div>
                    <div className="button-label">
                        <div className="button-label-num">
                            <div className="button-label-num-blue">4</div>
                        </div>
                        <span>R</span>
                        <span>E</span>
                        <span>P</span>
                        <span>O</span>
                        <span>S</span>
                        <span>I</span>
                        <span>T</span>
                        <span>O</span>
                        <span>R</span>
                        <span>Y</span>
                    </div>
                    <img src={teitetsu} className="button-list-hover-anim" alt={"蹄鉄"}/>
                </button>
                <button className="racelist" onClick={() => navigate("/skills")}>
                <div className="button-top-red"></div>
                    <div className="button-label">
                        <div className="button-label-num">
                            <div className="button-label-num-red">3</div>
                        </div>
                        <span>S</span>
                        <span>K</span>
                        <span>I</span>
                        <span>L</span>
                        <span>L</span>
                        <span>S</span>
                    </div>
                    <img src={teitetsu} className="button-list-hover-anim" alt={"蹄鉄"}/>
                </button>
                <button className="racelist" onClick={() => navigate("/profile")}>
                <div className="button-top-black"></div>
                    <div className="button-label">
                        <div className="button-label-num">
                            <div className="button-label-num-black">2</div>
                        </div>
                        <span>P</span>
                        <span>R</span>
                        <span>O</span>
                        <span>F</span>
                        <span>I</span>
                        <span>L</span>
                        <span>E</span>
                    </div>
                    <img src={teitetsu} className="button-list-hover-anim" alt={"蹄鉄"}/>
                </button>
                <button className="racelist" onClick={() => navigate("/")}>
                <div className="button-top-white"></div>
                    <div className="button-label">
                        <div className="button-label-num">
                            <div className="button-label-num-white">1</div>
                        </div>
                        <span>H</span>
                        <span>O</span>
                        <span>M</span>
                        <span>E</span>
                    </div>
                    <img src={teitetsu} className="button-list-hover-anim" alt={"蹄鉄"} />
                </button>
            </div>
        </div>

    )
}
export default RaceList
