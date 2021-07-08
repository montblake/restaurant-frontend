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
            <div className="arrow"></div>
                <h2>add menu item</h2>
                <form onSubmit={handleSubmit} className="menuForm">
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


