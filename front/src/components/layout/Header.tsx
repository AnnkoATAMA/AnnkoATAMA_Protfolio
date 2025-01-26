import "./header.css"
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <button className={"gate_button"} onClick={()=>navigate("/contact")}><p>8</p></button>
                        </li>
                        <li>
                            <button className={"gate_button"} onClick={() => window.location.href ="https://x.com/Takumi93Ma"}><p>7</p></button>
                        </li>
                        <li>
                            <button className={"gate_button"} onClick={() => window.location.href ="https://github.com/AnnkoATAMA"}><p>6</p></button>
                        </li>
                        <li>
                            <button className={"gate_button"} onClick={() => window.location.href ="https://zenn.dev/takuanko"}><p>5</p></button>
                        </li>
                        <li>
                            <button className={"gate_button"} onClick={() => navigate("/repository")}><p>4</p></button>
                        </li>
                        <li>
                            <button className={"gate_button"} onClick={() => navigate("/skills")}><p>3</p></button>
                        </li>
                        <li>
                            <button className={"gate_button"} onClick={() => navigate("/profile")}><p>2</p></button>
                        </li>
                        <li>
                            <button className={"gate_button"} onClick={() => navigate("/")}><p>1</p></button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header