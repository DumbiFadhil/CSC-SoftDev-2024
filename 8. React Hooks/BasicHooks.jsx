// Contoh: Menggunakan Hooks di React
import React, { useState, useRef, useEffect, useContext } from 'react';

const ExampleComponent = () => {
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        // Effect code here
        console.log('Component did mount');

        return () => {
            // Cleanup code here
            console.log('Component will unmount');
        };
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <input ref={inputRef} />
        </div>
    );
}
