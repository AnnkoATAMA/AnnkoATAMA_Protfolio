import "./css/background.css";
import sakura from "../assets/sakura.png";

const Background = () => {
    return (
        <div className="background">
            {Array.from({ length: 60 }).map((_, index) => {
                const size = Math.random() * 50 + 20;
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
                    />
                );
            })}
        </div>
    );
};

export default Background;
