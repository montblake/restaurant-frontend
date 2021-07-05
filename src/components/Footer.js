import { Link } from "react-router-dom";

function Footer(props) {
    return (
        <footer>
            <div className="footer text-limiter">
                <div className="social">
                    <div className="icon">
                        <img className="iconicon" src="../images/icon-fb.svg" alt="facebook icon" />
                    </div>
    
                    <div className="icon">
                        <img className="iconicon" src="../images/icon-twtr.svg" alt="twitter icon" />
                    </div>
    
                    <div className="icon">
                        <img className="iconicon" src="../images/icon-insta.svg" alt="instagram icon" />
                    </div>
                </div>
                <div className="footerNav">
                    <div>Careers</div>
                    <div>Press</div>
                    <div>Contact</div>
                    <div>Gift Cards</div>
                </div>
            </div>
       </footer>
    );
}

export default Footer;