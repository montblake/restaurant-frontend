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
            <section id="editDish">
                <form onSubmit={handleSubmit} >
                    <input
                        type="text"
                        value={editForm.name}
                        name="name"
                        placeholder="name of dish"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.description}
                        name="description"
                        placeholder="description of dish"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.price}
                        name="price"
                        placeholder="price"
                        onChange={handleChange}
                    />
                    <input type="submit" value="Update Dish" />
                </form>
                <button id="delete" onClick={removeDish}>DELETE</button>
                <Link to="/dashboard">
                <div id="backBtn">Return to Dashboard</div>
            </Link>
            </section>
            
        </div>
    );
   
} 
  
export default Show;