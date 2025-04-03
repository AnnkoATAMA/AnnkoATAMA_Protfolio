import "./css/background.css";
import sakura from "../assets/sakura.png";

const Background = () => {
    return (
        <div className="background">
            {Array.from({ length: 50 }).map((_, index) => {
                const size = Math.random() * 30 + 20;
                return (
                    <img
                        key={index}
                        src={sakura}
                        className="sakura-petal"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                        }}
                        alt="sakura petal"
                    />
                );
            })}
        </div>
    );
};

export default Background;
