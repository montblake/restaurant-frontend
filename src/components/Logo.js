import { Link } from "react-router-dom";

function Logo(props) {
    return (
        <div id="logoLink">
             <Link to="/">
                <h1 id="logo">chartreuse</h1>
            </Link>
        </div>
       
    );
}

export default Logo;