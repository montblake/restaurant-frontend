import { Link } from "react-router-dom";

function Dashboard(props) {


      //  what to do when menu data has loaded
      const loaded = () => {
        if (props.currentMenu.name === "dinner") {
            const currentMenuDishes = [
                props.dishes.filter(dish => dish.menuGroup === props.currentMenu.name && dish.dishType === "starter"),
                props.dishes.filter(dish => dish.menuGroup === props.currentMenu.name && dish.dishType === "main"),
                props.dishes.filter(dish => dish.menuGroup === props.currentMenu.name && dish.dishType === "shared")
            ]
    
            const first = () => {
                return currentMenuDishes[0].map((dish) => (
                <div key={dish._id} className="dish">
                    <Link to={`dashboard/${dish._id}`}>
                        <h3>{dish.name}</h3>
                    </Link>
                    <h4>{dish.description}</h4>
                    <h5>{dish.price}</h5>
                </div>
                ));  
            }
        
            const second = () => {
                return currentMenuDishes[1].map((dish) => (
                <div key={dish._id} className="dish">
                    <Link to={`dashboard/${dish._id}`}>
                        <h3>{dish.name}</h3>
                    </Link>
                    <h4>{dish.description}</h4>
                    <h5>{dish.price}</h5>
                </div>
                ));  
            }
        
            const third = () => {
                return currentMenuDishes[2].map((dish) => (
                <div key={dish._id} className="dish">
                    <Link to={`dashboard/${dish._id}`}>
                        <h3>{dish.name}</h3>
                    </Link>
                    <h4>{dish.description}</h4>
                    <h5>{dish.price}</h5>
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
                return currentMenuDishes[0].map((dish) => (
                <div key={dish._id} className="dish">
                    <Link to={`dashboard/${dish._id}`}>
                        <h3>{dish.name}</h3>
                    </Link>
                    
                    <h4>{dish.description}</h4>
                    <h5>{dish.price}</h5>
                </div>
                ));  
            }
        
            const second = () => {
                return currentMenuDishes[1].map((dish) => (
                <div key={dish._id} className="dish">
                    <Link to={`dashboard/${dish._id}`}>
                        <h3>{dish.name}</h3>
                    </Link>
                    <h4>{dish.description}</h4>
                    <h5>{dish.price}</h5>
                </div>
                ));  
            }

// <div key={dish._id} className="dish">
            // //         <Link to={`dashboard/${dish._id}`}>
            // //             <h3>{dish.name}</h3>
            // //         </Link>



        
            const third = () => {
                return currentMenuDishes[2].map((dish) => (
                <div key={dish._id} className="dish">
                    <Link to={`dashboard/${dish._id}`}>
                        <h3>{dish.name}</h3>
                    </Link>
                    <h4>{dish.description}</h4>
                    <h5>{dish.price}</h5>
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
                return currentMenuDishes.map((dish) => (
                <div key={dish._id} className="dish">
                    <Link to={`dashboard/${dish._id}`}>
                        <h3>{dish.name}</h3>
                    </Link>
                    <h4>{dish.description}</h4>
                    <h5>{dish.price}</h5>
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
            <h2>dashboard</h2>
            <Link to="/dashboard/new">
                <div id="newDishBtn">ADD MENU ITEM</div>
            </Link>
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

export default Dashboard;


// return currentMenuDishes.map((dish) => (
//     <div key={dish._id} className="dish">
//         <Link to={`dashboard/${dish._id}`}>
//             <h3>{dish.name}</h3>
//         </Link>
//         <h4>{dish.description}</h4>
//         <h5>{dish.price}</h5>
//     </div>
// ));
// };