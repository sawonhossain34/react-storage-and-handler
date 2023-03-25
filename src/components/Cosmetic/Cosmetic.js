import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    console.log(props);
    const {name,price,id} =props.cosmetic;

    const addToCart = (id) => {
        console.log('add item' , id)
    }
    // const purcheess = () => addToCart(id);
    return (
        <div className='product'>
            <h1>Name : {name}</h1>
            <p>Price :{price}</p>
            <p>Id Name : {id}</p>
            <button onClick={addToCart}>Add To Cart</button>
            <button onClick={() => addToCart(id)}>Purchese</button>
        </div>
    );
};

export default Cosmetic;