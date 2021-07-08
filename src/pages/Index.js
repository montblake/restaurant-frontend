import { Link } from "react-router-dom";


function Index() {
    return (
        <div className="content">
             <div className="arrow"></div>
            <div id="c1" className="content-child">
                <div className="content-text">
                    <h2>visit chartreuse</h2>
                    <p>Tuesday - Saturday, 5pm – 11pm</p>
                    <p>Sundays, 4pm – 10pm</p>
                    <Link to="/comingsoon">
                        <div>Reserve a table</div>
                    </Link>
                </div>
                <div className="content-image">
                    <img className="content-image-img wider" src="./images/lightscape-YyHu_TneCI0-unsplash.jpg" alt="fancy food" />
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
                    <img className="content-image-img taller" src="./images/jirayu-koontholjinda-wtpibGwNv1k-unsplash.jpg" alt="..."/>
                </div>
                
            </div>
            <div id="c3" className="content-child">
                <div className="content-text">
                    <h2>private events</h2>
                    <p>Raclette health goth letterpress gochujang polaroid asymmetrical farm-to-table tacos readymade. Meggings forage salvia, polaroid XOXO sriracha 3 wolf moon la croix distillery pour-over prism pitchfork. Thundercats church-key tumblr aesthetic, coloring book swag truffaut blog bicycle rights hella vape taxidermy hot chicken.</p>
                    <a href="mailto:events@chartreuse.com"><div>Begin Conversation</div></a>
                </div>
                <div className="content-image">
                    <img className="content-image-img wider" src="./images/mads-eneqvist-izxSMW8I5Ts-unsplash.jpg" alt="..."/>
                </div>
            </div>
       </div>
    );
}

export default Index;