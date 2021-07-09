function Visit(props) {
    return (
        <div className="content special">
            <div className="arrow"></div>
            <div className="tinted">
                <h2>hours</h2>
                <p className="visiting-hours">Tuesday – Saturday, 5pm – 11pm</p>
                <p className="visiting-hours">Sundays, 4pm – 10pm</p>
                <h2>location</h2>
                <div className="map-frame">
                    <img src="../images/chimap.jpg" alt="antique map of chicago" className="map"/>
                </div>
           
            </div>
            
            
        </div>
    );
}

export default Visit;