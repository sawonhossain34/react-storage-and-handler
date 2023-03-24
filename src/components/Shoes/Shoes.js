import React from 'react';
import { add, divide, multiply } from '../Utilities/Calculate';

const Shoes = () => {
    const first = 200;
    const second = 2;
    const result = multiply(first,second);
    const sum = add(first,second);
    const sivide = divide(first, second);
    return (
        <div>
            <h2>This is shoes Compo</h2>
            <p>Result : {result} and Sum :{sum} and divide :{sivide}</p>
        </div>
    );
};

export default Shoes;