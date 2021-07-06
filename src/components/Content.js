import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Visit from "../pages/Visit";
import About from "../pages/About";
import New from "../pages/New";
import Menus from "../pages/Menus";
import ComingSoon from "../pages/ComingSoon";


function Content(props) {
    const [ dishes, setDishes ] = useState(null);
    const URL = "http://localhost:4000/menu/"; 

    // fetch menu data from the backend
    const getDishes = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setDishes(data);
    };

    // function for creating new menu items
    const createDish = async (dish) => {
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
    useEffect(() => getDishes(), []);


    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route
                    exact path="/menus"
                    render={rp => (
                        <Menus
                            {...rp}
                            dishes={dishes}
                        />
                    )}
                />
                <Route
                    path="/menus/new"
                    render={rp => (
                        <New
                            {...rp}
                            dishes={dishes}
                            createDish={createDish}
                        />
                    )}
                />  
                
                 
                <Route
                    path="/menus/:id"
                    render={rp => (
                        <Show
                            {...rp}
                            dishes={dishes}
                            updateDish={updateDish}
                            deleteDish={deleteDish}
                        />
                    )}
                />
                <Route path="/visit">
                    <Visit />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/comingsoon">
                    <ComingSoon />
                </Route>
                
            </Switch>
        </>
    );
}

export default Content;