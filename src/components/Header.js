import { Link } from "react-router-dom";

function Header(props) {

    return (
        <header id="header">
            <div className="topNav text-limiter">
                <div className="deets">
                    <div className="address"> 312 Green Street, Fulton Market, Chicago</div>
                    <a className="phone" href="tel:987-654-3210">(987) 654-3210</a>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <img className="iconicon" src="../images/icon-fb.svg" alt="facebook icon" />
                        </div>
                    </a>
                    
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <img className="iconicon" src="../images/icon-twtr.svg" alt="twitter icon" />
                        </div>
                    </a>
                    
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <img className="iconicon" src="../images/icon-insta.svg" alt="instagram icon" />
                        </div>
                    </a>
                </div>
            </div>  
            <nav className="mainNav">
                <Link to="/menus">
                    <div>Menus</div>
                </Link>
                <Link to="/visit">
                    <div>Hours &amp; Location</div>
                </Link>
                <Link to="/about">
                    <div>About</div>
                </Link>
                <Link to="/comingsoon">
                    <div>Reservations</div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;