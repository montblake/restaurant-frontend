import { useState } from "react";
import { Link } from "react-router-dom";

function New(props) {
    // state to hold formData
    const [ newForm, setNewForm ] = useState({
        name: "",
        description: "",
        price: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value })
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createDish(newForm);
        setNewForm({
            name: "",
            description: "",
            price: "",
        });
    };

    return (
        <div className="content">
            <section id="addNewDish">
                <h3>Add New Dish</h3>
                <form onSubmit={handleSubmit} >
                    <input
                        type="text"
                        value={newForm.name}
                        name="name"
                        placeholder="name of dish"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={newForm.description}
                        name="description"
                        placeholder="description of dish"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={newForm.price}
                        name="price"
                        placeholder="price"
                        onChange={handleChange}
                    />
                    <input type="submit" value="Create Dish" />
                </form>
                <Link to="/menus">
                    <div id="backBtn">Return to Menu Page</div>
                </Link>
            </section>
        </div>
    );
}


export default New;


