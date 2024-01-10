// Contoh: Membuat Custom Hooks
// File: useCustomHook.js
import { useState, useEffect } from 'react';

const useCustomHook = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data or perform some async operation
        // Example: Fetch data from an API
        const fetchData = async () => {
            const response = await fetch('https://api.example.com/data');
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    return data;
};

export default useCustomHook;

// File: ComponentUsingCustomHook.js
import React from 'react';
import useCustomHook from './useCustomHook';

const ComponentUsingCustomHook = () => {
    const data = useCustomHook();

    return (
        <div>
            {data ? <p>Data: {data}</p> : <p>Loading...</p>}
        </div>
    );
}
