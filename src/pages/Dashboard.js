import { Link } from "react-router-dom";

function Menus(props) {
    //  what to do when menu data has loaded
    const loaded = () => {
        return props.dishes.map((dish) => (
            <div key={dish._id} className="dish">
                <Link to={`dashboard/${dish._id}`}>
                    <h3>{dish.name}</h3>
                </Link>
                <h4>{dish.description}</h4>
                <h5>{dish.price}</h5>
            </div>
        ));
    };

    // what to do if menu data HAS NOT loaded
    const loading = () => {
        return (
            <div className="addMarginBottom">
                <h3>Loading...</h3>
            </div>
        );
    };


    return (
        <div className="content">
            <div className="arrow"></div>
            <h2>dashboard</h2>
            <Link to="/dashboard/new">
                <div id="newDishBtn">ADD MENU ITEM</div>
            </Link>
            <nav className="menuNav">
                <div>Drinks</div>
                <div>Dinner</div>
                <div>Dessert</div>
            </nav>
            <div className="menu-container">
                { props.dishes ? loaded() : loading() }
            </div>
            
        </div>
    );
}

export default Menus;