import "./header.css"
import {useNavigate} from "react-router-dom";
import { FaXTwitter, FaGithub, FaEnvelope, FaRegWindowMaximize, FaUser, FaHouse} from "react-icons/fa6";
import {SiZenn} from "react-icons/si";
import {RiGitRepositoryFill} from "react-icons/ri";

const Header = () => {

    const navigate = useNavigate();

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <button className={"gate_button"} onClick={()=>navigate("/contact")}><FaEnvelope size={"36px"}/></button>
                        </li>
                        <li>
                            <button className={"gate_button"} onClick={() => window.location.href ="https://x.com/Takumi93Ma"}><FaXTwitter size={"36px"}/></button>
                        </li>
                        <li>
                            <button className={"gate_button"} onClick={() => window.location.href ="https://github.com/AnnkoATAMA"}><FaGithub size={"36px"}/></button>
                        </li>
                        <li>
                            <button className={"gate_button"} onClick={() => window.location.href ="https://zenn.dev/takuanko"}><SiZenn size={"36px"}/></button>
                        </li>
                        <li>
                            <button className={"gate_button"} onClick={() => navigate("/repository")}><RiGitRepositoryFill size={"36px"}/></button>
                        </li>
                        <li>
                            <button className={"gate_button"} onClick={() => navigate("/skills")}><FaRegWindowMaximize size={"36px"}/></button>
                        </li>
                        <li>
                            <button className={"gate_button"} onClick={() => navigate("/profile")}><FaUser size={"36px"}/></button>
                        </li>
                        <li>
                            <button className={"gate_button"} onClick={() => navigate("/")}><FaHouse size={"36px"}/></button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header