import teitetsu from "../assets/teitetsu.svg";
import "./css/profile.css";

const ProfilePage = () => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>アンコアタマ</h1>
                <p>annkoatama 現役 牡20歳 黒鹿毛</p>
            </div>

            <div className="profile-main">
                <div className="profile-box-left">
                    <img src={teitetsu} alt="Profile" className="profile-image"/>
                    <div className="profile-gallery">
                        <img src={teitetsu} alt="Thumbnail 1" className="profile-thumbnail"/>
                        <img src={teitetsu} alt="Thumbnail 2" className="profile-thumbnail"/>
                        <img src={teitetsu} alt="Thumbnail 3" className="profile-thumbnail"/>
                    </div>
                    <div className="profile-suitability">
                        <h2>適性レビュー</h2>
                        <div className="suitability-item">
                            <span>歴史適性:</span>
                            <div className="suitability-bar history-bar"></div>
                        </div>
                        <div className="suitability-item">
                            <span>競馬適性:</span>
                            <div className="suitability-bar horse-bar"></div>
                        </div>
                    </div>
                </div>

                <div className="profile-box-right">
                    <table className="profile-info-table">
                        <tbody>
                        <tr>
                            <th>生年月日</th>
                            <td>2004年09月03日</td>
                        </tr>
                        <tr>
                            <th>調教師(本名)</th>
                            <td>松原拓己</td>
                        </tr>
                        <tr>
                            <th>産地</th>
                            <td>福岡</td>
                        </tr>
                        <tr>
                            <th>主な趣味</th>
                            <td>競馬</td>
                        </tr>
                        </tbody>
                    </table>
                    <div>
                        <div className={"skill-header"}>
                            血統(スキル早見表)
                        </div>
                        <div className="pedigree-chart">
                            <div className="sire">
                                <div className="parent">react</div>
                                <div className="grandparents">
                                    <div className="grandparent">Swift</div>
                                    <div className="grandparent">Vue</div>
                                </div>
                            </div>
                            <div className="dam">
                                <div className="parent">Java</div>
                                <div className="grandparents">
                                    <div className="grandparent">Python</div>
                                    <div className="grandparent">MySQL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
