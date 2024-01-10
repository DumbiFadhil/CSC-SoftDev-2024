// Contoh: API Integration dan Mengolah Data
import React, { useEffect, useState } from 'react';

const ApiExample = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from API
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Data from API</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ApiExample;
