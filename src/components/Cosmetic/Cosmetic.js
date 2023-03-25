import React from 'react';

const Cosmetic = (props) => {
    console.log(props);
    const {name,price,id} =props.cosmetic;
    return (
        <div>
            <h1>Name : {name}</h1>
            <p>Price :{price}</p>
            <p>Id Name : {id}</p>
        </div>
    );
};

export default Cosmetic;