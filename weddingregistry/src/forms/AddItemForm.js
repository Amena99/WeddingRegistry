import {React, useState} from 'react';

const AddItemForm = props => {
    
    const initialState = {
        id: null,
        itemname: "",
        category: "",
        quantity: 0
    }
    const [item, setItem] = useState(initialState);
  
return (
    <form>
       <label>Item Name</label>
        <input type="text" name="itemname" value="" />
        <label>Category</label>
        <input type="text" name="category" value="" />
        <label>Quantity</label>
        <input type="number" name="quantity" value="" />
        <button>Add new item</button> 
    </form>
  );
}

export default AddItemForm;