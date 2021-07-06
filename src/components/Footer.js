import { Link } from "react-router-dom";

function Footer(props) {
    return (
        <footer>
            <div className="footer text-limiter">
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
                <div className="footerNav">
                    <Link to="/comingsoon">
                        <div>Careers</div>
                    </Link>
                    <Link to="/comingsoon">
                        <div>Press</div>
                    </Link>
                    <Link to="/comingsoon">
                        <div>Contact</div>
                    </Link>
                    <Link to="/comingsoon">
                        <div>Gift Cards</div>
                    </Link>
                </div>
            </div>
       </footer>
    );
}

export default Footer;