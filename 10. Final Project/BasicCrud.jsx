// Contoh: Operasi CRUD dengan ReactJS & Tailwind
import React, { useState } from 'react';

const CrudDashboard = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const addNewItem = () => {
        // Add new item to the list
        setItems([...items, newItem]);
        setNewItem('');
    };

    const deleteItem = (index) => {
        // Remove item from the list
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <div>
            <h2>CRUD Dashboard</h2>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={addNewItem}>Add</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteItem(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CrudDashboard;
