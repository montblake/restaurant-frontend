import { Link } from "react-router-dom";


function Index() {
    return (
        <div className="content">
            <div id="c1" className="content-child">
                <div className="content-text">
                    <h2>visit chartreuse</h2>
                    <p>Tuesday - Saturday, 5PM–11PM</p>
                    <p>Sundays, 4PM–10PM</p>
                    <a href="https://www.opentable.com" target="_blank" rel="noreferrer"><div>Reserve a table</div></a>
                </div>
                <div className="content-image">
                    <img className="content-image-img taller" src="./images/forge-science.jpeg" alt="" />
                </div>
            </div>
            <div id="c2" className="content-child">
                <div className="content-text">
                    <h2>our story</h2>
                    <p>Seitan man braid freegan semiotics glossier mlkshk, etsy raw denim bitters distillery polaroid. Ethical selfies small batch raw denim, beard readymade street art irony activated charcoal vice tumblr salvia williamsburg forage meditation. You probably haven't heard of them keytar kogi street art af, salvia organic hexagon offal tilde scenester XOXO echo park quinoa.</p>
                    <Link to="/about">
                        <div>Meet the team</div>
                    </Link>
                </div>
                <div className="content-image">
                    <img className="content-image-img wider" src="./images/forge-interior.jpeg" alt=""/>
                </div>
            </div>
            <div id="c3" className="content-child">
                <div className="content-text">
                    <h2>private events</h2>
                    <p>Raclette health goth letterpress gochujang polaroid asymmetrical farm-to-table tacos readymade. Meggings forage salvia, polaroid XOXO sriracha 3 wolf moon la croix distillery pour-over prism pitchfork. Thundercats church-key tumblr aesthetic, coloring book swag truffaut blog bicycle rights hella vape taxidermy hot chicken.</p>
                    <a href="mailto:events@chartreuse.com"><div>Begin Conversation</div></a>
                </div>
                <div className="content-image">
                    <img className="content-image-img wider" src="./images/forge-feast.jpeg" alt=""/>
                </div>
            </div>
       </div>
    );
}

export default Index;