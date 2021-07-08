import { useState } from "react";
import { Link } from "react-router-dom";

function Show(props) {
    const id = props.match.params.id
    const dish = props.dishes.find(d => d._id === id);
    // state for form
    const [ editForm, setEditForm ] = useState(dish);

    // handleChange function for form
    const handleChange = event => {
        setEditForm({...editForm, [event.target.name]: event.target.value });
    }

    // handleSubmit for form
    const handleSubmit = event => {
        event.preventDefault();
        props.updateDish(editForm, dish._id);
        // redirect people back to menu index
        props.history.push("/dashboard")
    }

    const removeDish = () => {
        props.deleteDish(dish._id);
        props.history.push("/dashboard");
    }
    
    return (
        <div className="content">
            <div className="arrow"></div>
                <h2>edit menu item</h2>
                <form onSubmit={handleSubmit} className="menuForm">
                    <input
                        type="text"
                        value={editForm.name}
                        name="name"
                        placeholder="Item Name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.description}
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.price}
                        name="price"
                        placeholder="Price"
                        onChange={handleChange}
                    />
                    <div className="button-group">
                        <input type="submit" value="UPDATE" />
                        <button id="delete" onClick={removeDish}>DELETE</button> 
                    </div>
                    
                </form>
                
                <Link to="/dashboard">
                    <div id="backBtn">BACK TO DASHBOARD</div>
                </Link>
                
        </div>
    );
   
} 
  
export default Show;