function Menus(props) {
    console.log(props.currentMenu);

    // const currentMenuDishes = props.dishes.filter(dish => dish.menuGroup === props.currentMenu.name)
    
 
    
    
        
   //  what to do when menu data has loaded
    const loaded = () => {
        if (props.currentMenu.name === "dinner") {
            const currentMenuDishes = [
                props.dishes.filter(dish => dish.menuGroup === props.currentMenu.name && dish.dishType === "starter"),
                props.dishes.filter(dish => dish.menuGroup === props.currentMenu.name && dish.dishType === "main"),
                props.dishes.filter(dish => dish.menuGroup === props.currentMenu.name && dish.dishType === "shared")
            ]
    
            const first = () => {
                return currentMenuDishes[0].map((menuItem) => (
                <div key={menuItem._id} className="dish">
                    <h3>{menuItem.name}</h3>
                    <h4>{menuItem.description}</h4>
                    <h5>{menuItem.price}</h5>
                </div>
                ));  
            }
        
            const second = () => {
                return currentMenuDishes[1].map((menuItem) => (
                <div key={menuItem._id} className="dish">
                    <h3>{menuItem.name}</h3>
                    <h4>{menuItem.description}</h4>
                    <h5>{menuItem.price}</h5>
                </div>
                ));  
            }
        
            const third = () => {
                return currentMenuDishes[2].map((menuItem) => (
                <div key={menuItem._id} className="dish">
                    <h3>{menuItem.name}</h3>
                    <h4>{menuItem.description}</h4>
                    <h5>{menuItem.price}</h5>
                </div>
                ));  
            }
    
            return (
                <>
                    <div>
                        <h3>to start</h3>
                        { props.dishes ? first() : "none" }
                    </div>
                    <div>
                        <h3>to follow</h3>
                        { props.dishes ? second() : "none" }
                    </div>
                    <div>
                        <h3>for the table</h3>
                        { props.dishes ? third() : "none" }
                    </div>
                </>
            );
        } else if (props.currentMenu.name === "drinks") {
            const currentMenuDishes = [
                props.dishes.filter(dish => dish.menuGroup === props.currentMenu.name && dish.drinkType === "cocktail"),
                props.dishes.filter(dish => dish.menuGroup === props.currentMenu.name && dish.drinkType === "wine"),
                props.dishes.filter(dish => dish.menuGroup === props.currentMenu.name && dish.drinkType === "zero")
            ]
    
            const first = () => {
                return currentMenuDishes[0].map((menuItem) => (
                <div key={menuItem._id} className="dish">
                    <h3>{menuItem.name}</h3>
                    <h4>{menuItem.description}</h4>
                    <h5>{menuItem.price}</h5>
                </div>
                ));  
            }
        
            const second = () => {
                return currentMenuDishes[1].map((menuItem) => (
                <div key={menuItem._id} className="dish">
                    <h3>{menuItem.name}</h3>
                    <h4>{menuItem.description}</h4>
                    <h5>{menuItem.price}</h5>
                </div>
                ));  
            }
        
            const third = () => {
                return currentMenuDishes[2].map((menuItem) => (
                <div key={menuItem._id} className="dish">
                    <h3>{menuItem.name}</h3>
                    <h4>{menuItem.description}</h4>
                    <h5>{menuItem.price}</h5>
                </div>
                ));  
            }
    
            return (
                <>
                    <div>
                        <h3>cocktails</h3>
                        { props.dishes ? first() : "none" }
                    </div>
                    <div>
                        <h3>wine</h3>
                        { props.dishes ? second() : "none" }
                    </div>
                    <div>
                        <h3>zero proof</h3>
                        { props.dishes ? third() : "none" }
                    </div>
                </>
             );
        } else if (props.currentMenu.name === "dessert") {
            const currentMenuDishes = props.dishes.filter(dish => dish.menuGroup === props.currentMenu.name);
            const dessert = () => {
                return currentMenuDishes.map((menuItem) => (
                <div key={menuItem._id} className="dish">
                    <h3>{menuItem.name}</h3>
                    <h4>{menuItem.description}</h4>
                    <h5>{menuItem.price}</h5>
                </div>
                ));  
            }
             
            return (
                    <div>
                        { props.dishes ? dessert() : "none" }
                    </div>
             );
        };      
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
                { props.currentMenu ? loaded() : loading()}
                
                
            </div>
            
        </div>
    );
}

export default Menus;


