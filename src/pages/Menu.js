function Menus(props) {
    console.log(props.currentMenu);
    const currentMenuDishes = props.dishes.filter(dish => dish.menuGroup === props.currentMenu.name);
    
    //  what to do when menu data has loaded
    const loaded = () => {
        return currentMenuDishes.map((menuItem) => (
            <div key={menuItem._id} className="dish">
                <h3>{menuItem.name}</h3>
                <h4>{menuItem.description}</h4>
                <h5>{menuItem.price}</h5>
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
            <h2>menu</h2>
            <nav className="menuNav">
                <div onClick={props.handleMenuRequest} id="drinksBtn">drinks</div>
                <div onClick={props.handleMenuRequest} id="dinnerBtn" className="currentMenu">dinner</div>
                <div onClick={props.handleMenuRequest} id="dessertBtn">dessert</div>
            </nav>
            <div className="menu-container">
                { props.dishes ? loaded() : loading() }
            </div>
            
        </div>
    );
}

export default Menus;


