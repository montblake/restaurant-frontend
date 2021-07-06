import { Link } from "react-router-dom";

function Menus(props) {
    //  what to do when menu data has loaded
    const loaded = () => {
        return props.dishes.map((dish) => (
            <div key={dish._id} className="dish">
                <Link to={`menus/${dish._id}`}>
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        );
    };


    return (
        <div className="content">
            <h2>Le Menu</h2>
            <Link to="/menus/new">
                <div id="newDishBtn">Add New Dish</div>
            </Link>
            <div className="menu-container">
                { props.dishes ? loaded() : loading() }
            </div>
            
        </div>
    );
}

export default Menus;