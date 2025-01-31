import "./css/background.css";

const Background = () => {
    return (
        <div className="background">
            {Array.from({ length: 50 }).map((_, index) => {
                const size = Math.random() * 150 + 20;
                return (
                    <div
                        key={index}
                        className="circle"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                    />
                );
            })}
        </div>
    );
};

export default Background;
