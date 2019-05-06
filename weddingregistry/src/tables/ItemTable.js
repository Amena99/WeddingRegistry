import React from 'react';

const ItemTable = props => {
  return (
    <table>
        <thead>
        <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
        </tr>     
        </thead> 
        <tbody>
            {props.items.length > 0 ? (
                props.items.map(item =>(
                    <tr>
                        <td>{item.itemName}</td>
                        <td>{item.category}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <button className="button muted-button">Edit</button>
                            <button className="button muted-button">Delete</button>
                        </td>
                    </tr>   
                )) 
            ):
            (
                    <tr>
                        <td>No item to display</td>
                        <td>No category to display</td>
                        <td>0</td>
                        <td>
                            <button className="button muted-button">Edit</button>
                            <button className="button muted-button">Delete</button>
                        </td>
                    </tr>   
            )}
        
        </tbody>
    </table>
  );
}

export default ItemTable;
