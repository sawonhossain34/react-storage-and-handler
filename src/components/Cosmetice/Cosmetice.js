import React from 'react';
import { add, divide } from '../Utilities/Calculate';


const Cosmetice = () => {
    const first = 125;
    const second = 125;
    const total = add(first,second);
    const ivide = divide(first,second);
    return (
        <div>
            <h1>Wellcome to my Cosmetice store</h1>
            <p>Total : {total} and divide : {ivide}</p>
        </div>
    );
};

export default Cosmetice;