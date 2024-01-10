// Contoh: Passing Prop
// File: Greeting.js
import React from 'react';

const Greeting = (props) => {
    return <p>Hello, {props.name}!</p>;
}

export default Greeting;