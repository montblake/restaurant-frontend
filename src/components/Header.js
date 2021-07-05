import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header>
            <div className="topNav">
                <div className="deets">
                    <div className="address">1044 Kinzie Street, Chicago</div>
                    <div className="phone">312-933-4858</div>
                </div>
                <div className="social">
                    <div className="icon">
                        <img className="iconicon" src="./images/icon-fb.svg" alt="facebook icon" />
                    </div>
                    <div className="icon">
                        <img className="iconicon" src="./images/icon-twtr.svg" alt="twitter icon" />
                    </div>

                    <div className="icon">
                        <img className="iconicon" src="./images/icon-insta.svg" alt="instagram icon" />
                    </div>
                </div>
            </div>
            <div className="mainNav">
                <div>Menus</div>
                <div>Hours & Location</div>
                <div>About</div>
                <div>Reservations</div>
            </div>
        </header>
    );
}

export default Header;