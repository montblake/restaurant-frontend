import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Visit from "../pages/Visit";
import About from "../pages/About";
import New from "../pages/New";
import Menu from "../pages/Menu";
import ComingSoon from "../pages/ComingSoon";
import Dashboard from "../pages/Dashboard";


function Content(props) {
    const [ dishes, setDishes ] = useState([]);
    const [ currentMenu, setCurrentMenu ] = useState({name: "dinner"});

    const URL = "https://protected-garden-18741.herokuapp.com/menu/"; 
    // const URL = "http://localhost:4000/menu/"; 

    // fetch menu data from the backend
    const getDishes = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setDishes(data);
        
    };

     //  links buttons to changing state: currentMenu
     const handleMenuRequest = (event) => {
         const drinksBtn = document.querySelector("#drinksBtn");
         const dinnerBtn = document.querySelector("#dinnerBtn");
         const dessertBtn = document.querySelector("#dessertBtn");
         
        const menuName = event.target.textContent;
        setCurrentMenu({name: menuName});

        if (menuName === "drinks") {
            drinksBtn.classList.add("currentMenu");
            dinnerBtn.classList.remove("currentMenu");
            dessertBtn.classList.remove("currentMenu");

        }
        if (menuName === "dinner") {
            drinksBtn.classList.remove("currentMenu");
            dinnerBtn.classList.add("currentMenu");
            dessertBtn.classList.remove("currentMenu");
        }
        if (menuName === "dessert") {
            drinksBtn.classList.remove("currentMenu");
            dinnerBtn.classList.remove("currentMenu");
            dessertBtn.classList.add("currentMenu");
        }


    };



    // function for creating new menu items
    const createDish = async (dish) => {

        // if  (dish.vegan === "on") dish.vegan = true;
        // if (dish.vegetarian === "on") dish.vegetarian = true;
        // if (dish.glutenFree === "on") dish.glutenFree = true;
        if (dish.menuGroup === "dinner") dish.drinkType = "";
        if (dish.menuGroup === "drinks") dish.dishType = "";

        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(dish),
        });
        getDishes();
    };

    // function to update an existing dish
    const updateDish = async (dish, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(dish),
        });
        getDishes();
    };

    // function to delete dishes from database
    const deleteDish = async id => {
        await fetch(URL + id, {
            method: "DELETE",
        });
        getDishes();
    };

    // On loading, call for data
    useEffect(() => {
        getDishes(); 
    }, []);


    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route path="/visit">
                    <Visit />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/comingsoon">
                    <ComingSoon />
                </Route>
                <Route
                    path="/menu"
                    render={rp => (
                        <Menu
                            {...rp}
                            dishes={dishes}
                            currentMenu={currentMenu}
                            handleMenuRequest={handleMenuRequest}
                            setCurrentMenu={setCurrentMenu}
                
                        />
                    )}
                />
                <Route
                    exact path="/dashboard"
                    render={rp => (
                        <Dashboard
                            {...rp}
                            dishes={dishes}
                            currentMenu={currentMenu}
                            handleMenuRequest={handleMenuRequest}
                            setCurrentMenu={setCurrentMenu}
                        />
                    )}
                />
                <Route
                    path="/dashboard/new"
                    render={rp => (
                        <New
                            {...rp}
                            dishes={dishes}
                            createDish={createDish}
                        />
                    )}
                />  
                <Route
                    path="/dashboard/:id"
                    render={rp => (
                        <Show
                            {...rp}
                            dishes={dishes}
                            updateDish={updateDish}
                            deleteDish={deleteDish}
                        />
                    )}
                />
                
            </Switch>
        </>
    );
}

export default Content;