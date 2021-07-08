function About(props) {
    function revealInformation(event) {
        const chef = document.querySelector("#chef-img");
        const chefP = document.querySelector("#chef-para");
        const partner = document.querySelector("#partner-img");
        const partnerP = document.querySelector("#partner-para");
        const pastry = document.querySelector("#pastry-img");
        const pastryP = document.querySelector("#pastry-para");


        if (event.target.closest('div').id === "chef") {
            chef.style.filter = "none";
            chefP.style.display = "block";
            partner.style.filter = "grayscale(100%)";
            partnerP.style.display = "none";
            pastry.style.filter = "grayscale(100%)";
            pastryP.style.display = "none";
        } else if (event.target.closest('div').id === "partner") {
            chef.style.filter = "grayscale(100%)";
            chefP.style.display = "none";
            partner.style.filter = "none";
            partnerP.style.display = "block";
            pastry.style.filter = "grayscale(100%)";
            pastryP.style.display = "none";
        } else if (event.target.closest('div').id === "pastry") {
            chef.style.filter = "grayscale(100%)";
            chefP.style.display = "none";
            partner.style.filter = "grayscale(100%)";
            partnerP.style.display = "none";
            pastry.style.filter = "none";
            pastryP.style.display = "block";
        }
    

    }


    return (
        <div className="content special">
            <div className="arrow"></div>
            <h2>story</h2>
            <p className="tinted">Lyft godard, gochujang air plant everyday carry tumblr bitters wolf cloud bread hexagon mlkshk 8-bit tote bag. Kale chips messenger bag forage, vice fashion axe synth disrupt echo park wayfarers celiac yuccie hell of cloud bread. Blue bottle chicharrones activated charcoal, succulents kitsch banjo vegan chartreuse. Lyft distillery chillwave raw denim hexagon pour-over banjo tilde put a bird on it ugh affogato. Asymmetrical iceland hammock cornhole microdosing green juice. Crucifix cold-pressed kombucha cardigan semiotics wolf moon polaroid. Artisan ramps iPhone deep v iceland. Mumblecore farm-to-table chia green juice, vinyl gochujang lomo sriracha tacos cliche literally pour-over. </p>
    
            <h2>team</h2>
            <div className="team">
                <div className="team-member" onClick={revealInformation} id="partner">
                    <img src="./images/rui-silvestre-jCeVRUQslTs-unsplash.jpg" alt="Rui Silvestre"id="partner-img"/>
                    <h3>Rui Silvestre</h3>
                    <h4>Partner/General Manager</h4>
                </div>
                <div className="team-member" onClick={revealInformation} id="chef">
                    <img src="./images/vadim-markin-BFtIlGdWKbk-unsplash.jpg" alt="Vadin Markin" id="chef-img" />
                    <h3>Vadin Markin</h3>
                    <h4>Chef/Owner</h4>
                </div>
                
                <div className="team-member" onClick={revealInformation} id="pastry">
                    <img src="./images/anastasia-mihalkova-EFUABKVppR4-unsplash.jpg"  alt="Anastasia Mihalkova" id="pastry-img"/>
                    <h3>Anastasia Mihalkova</h3>
                    <h4>Pastry Chef</h4>
                </div>
            </div>
            <div id="team-paras">
                <p id="chef-para">Lyft XOXO godard, gochujang air plant everyday carry tumblr bitters wolf cloud bread hexagon mlkshk 8-bit tote bag. Kale chips messenger bag forage, vice fashion axe synth disrupt echo park wayfarers celiac yuccie hell of cloud bread XOXO. Blue bottle chicharrones activated charcoal, succulents kitsch banjo vegan chartreuse. Plaid venmo cold-pressed pitchfork direct trade cronut, raw denim celiac keffiyeh forage gentrify pinterest unicorn.</p>
                <p id="partner-para">I'm baby viral quinoa everyday carry sartorial taxidermy 90's lyft try-hard hot chicken tumblr. Blue bottle post-ironic hammock, DIY umami four dollar toast roof party vaporware banjo health goth yuccie. Poke offal gastropub lomo chambray selvage wayfarers meggings mixtape post-ironic chicharrones four dollar toast activated charcoal chia. Offal fashion axe tousled, hashtag fam asymmetrical neutra edison bulb. Cliche XOXO kale chips hexagon.</p>
                <p id="pastry-para">Coloring book 3 wolf moon godard, celiac fashion axe snackwave enamel pin intelligentsia copper mug thundercats. Intelligentsia roof party vice 3 wolf moon tilde. Crucifix normcore echo park fixie keffiyeh banh mi yuccie blue bottle. Keytar drinking vinegar farm-to-table master cleanse street art polaroid viral ugh organic.Distillery biodiesel gastropub master cleanse banjo irony helvetica meh locavore neutra paleo tilde tousled readymade. Flannel fanny pack gluten-free, put a bird on it fingerstache green juice.</p>
            </div>
        </div>
    )
}

export default About;