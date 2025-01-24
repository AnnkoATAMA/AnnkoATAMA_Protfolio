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
                            <button className={"gate_button"} onClick={()=>navigate("/")}><p>1</p></button>
                        </li>
                        <li>
                            <button className={"gate_button"}>1</button>
                        </li>
                        <li>
                            <button className={"gate_button"}>1</button>
                        </li>
                        <li>
                            <button className={"gate_button"}>1</button>
                        </li>
                        <li>
                            <button className={"gate_button"}>1</button>
                        </li>
                        <li>
                            <button className={"gate_button"}>1</button>
                        </li>
                        <li>
                            <button className={"gate_button"}>1</button>
                        </li>
                        <li>
                            <button className={"gate_button"}>1</button>
                        </li>
                        <li>
                            <button className={"gate_button"}>1</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header