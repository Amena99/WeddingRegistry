import React, {useState} from 'react';
import ItemTable from "./tables/ItemTable";
import AddItemForm from "./forms/AddItemForm";

const App = () => {
  //Create object to store state data
  const itemsData = [
    {id:1, itemName: "Wool Throw", category: "Linens", quantity: 2},
    {id:1, itemName: "Foam Support Pillows", category: "Linens", quantity: 6},
    {id:1, itemName: "Chrome Design Toolbox", category: "Home Improvement", quantity: 1},
    {id:1, itemName: "Custom Stationary", category: "Office", quantity: 1},
  ]

  //Using "useState" to declare and set state 
  const [items, setItems] = useState(itemsData)

  const addUser = item => {
    item.id = items.length + 1;
    setItems([...items, item]);
  }

  return (
    <div className="container">
      <h1>Wedding Registry</h1>
      <p>An example of using React Hooks.</p>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Item</h2>
          <AddItemForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View Items</h2>
          {/* passing items from state as prop to UserTable component */}
          <ItemTable items={items}/>
        </div>
      </div>
    </div>
  );
}

export default App;
