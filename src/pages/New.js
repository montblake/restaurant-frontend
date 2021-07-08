import { useState } from "react";
import { Link } from "react-router-dom";

function New(props) {

    // state to hold formData
    const [ newForm, setNewForm ] = useState({
        menuGroup: "",
        name: "",
        description: "",
        price: "",
        dishType: "",
        drinkType: "",
        vegan: "",
        vegetarian: "",
        glutenFree: "",
    });


    // handleChange function for form
    const handleChange = (event) => {
        const restrictions = ["vegan", "vegetarian", "glutenFree"];
        if (!restrictions.includes(event.target.name)) {
            setNewForm({...newForm, [event.target.name]: event.target.value });
        } else {
            if (newForm[event.target.name] === ""){
                newForm[event.target.name] = true;
            } else if (newForm[event.target.name] === false) {
                newForm[event.target.name] = true;
            } else if (newForm[event.target.name] === true ) {
                newForm[event.target.name] = false;
            }
        }
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("this is the first");
        console.log(newForm);
        props.createDish(newForm);
        setNewForm({...newForm, name: "", description: "", price: ""});
    };

    return (
        <div className="content">
            <div className="arrow"></div>
                <h2>add menu item</h2>
                <form onSubmit={handleSubmit} className="menuForm">
                    <fieldset>
                        <div>
                            <label for="mg-drinks">drinks</label>
                            <input 
                                type="radio" name="menuGroup" value="drinks" id="mg-drinks"
                                onChange={handleChange}
                            ></input> 
                        </div>
                        
                        <div>
                            <label for="mg-dinner">dinner</label>
                            <input 
                                type="radio" name="menuGroup" value="dinner" id="mg-dinner"
                                onChange={handleChange}

                            ></input> 
                        </div>
                        
                        <div>
                            <label for="mg-dessert">dessert</label>
                            <input 
                                type="radio" name="menuGroup" value="dessert" id="mg-dessert"
                                onChange={handleChange}
                
                            ></input> 
                        </div>
                        
                    </fieldset>
                    <input
                        type="text"
                        value={newForm.name}
                        name="name"
                        placeholder="Item Name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={newForm.description}
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={newForm.price}
                        name="price"
                        placeholder="Price"
                        onChange={handleChange}
                    />

                    {/* if DINNER then include: */}
                    <div>{newForm.menuGroup === "dinner" ? 
                    <fieldset>
                    <div>
                        <label for="dt-starter">starter</label>
                        <input 
                            type="radio" name="dishType" value="starter" id="dt-starter"
                            onChange={handleChange}
                        ></input> 
                    </div>
                    
                    <div>
                        <label for="dt-main">main</label>
                        <input 
                            type="radio" name="dishType" value="main" id="dt-main"
                            onChange={handleChange}
                        ></input> 
                    </div>
                    
                    <div>
                        <label for="dt-shared">shared</label>
                        <input 
                            type="radio" name="dishType" value="shared" id="dt-shared"
                            onChange={handleChange}
                        ></input> 
                    </div>
                    
                    </fieldset> 
                    
                    : ""}</div>
                    
                    {/* If DRINK, include: */}
                    <div>{newForm.menuGroup === "drinks" ? 
                    <fieldset>
                    <div>
                        <label for="dt-cocktail">cocktail</label>
                        <input 
                            type="radio" name="drinkType" value="cocktail" id="dt-cocktail"
                            onChange={handleChange}
                        ></input> 
                    </div>
                    
                    <div>
                        <label for="dt-wine">wine</label>
                        <input 
                            type="radio" name="drinkType" value="wine" id="dt-wine"
                            onChange={handleChange}
                        ></input> 
                    </div>
                    
                    <div>
                        <label for="dt-zero">zero proof</label>
                        <input 
                            type="radio" name="drinkType" value="zero" id="dt-zero"
                            onChange={handleChange}
                        ></input> 
                    </div>
                    </fieldset> 
                    : ""}</div>

                    <fieldset>
                    <div>
                        <label for="restrict-gluten">gluten-free</label>
                        <input 
                            type="checkbox" name="glutenFree" id="restrict-gluten"
                            onChange={handleChange}
                        ></input> 
                    </div>
                    
                    <div>
                        <label for="restrict-vegan">Vegan</label>
                        <input 
                            type="checkbox" name="vegan" 
                            id="restrict-vegan"
                            onChange={handleChange}
                        ></input> 
                    </div>
                    
                    <div>
                        <label for="restrict-veget">Vegetarian</label>
                        <input 
                            type="checkbox" name="vegetarian" id="restrict-veget"
                            onChange={handleChange}
                        ></input> 
                    </div>
                    </fieldset> 
            
                    <div className="button-group">
                    <input type="submit" value="CREATE MENU ITEM" />
                    </div>
                </form>
                <Link to="/dashboard">
                    <div id="backBtn">BACK TO DASHBOARD</div>
                </Link>
        </div>
    );
}


export default New;


