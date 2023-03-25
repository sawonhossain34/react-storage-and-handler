import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../Utilities/Fackdb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    // console.log(props);
    const {name,price,id} =props.cosmetic;

    const addToCart = (id) => {
        addToDb(id);
        // const purcheess = () => addToCart(id);
    }

    const removeFromCart = (id) => {
        removeFromDb(id);
    }

    return (
        <div className='product'>
            <h1>Name : {name}</h1>
            <p>Price :{price}</p>
            <p>Id Name : {id}</p>
            <button onClick={() => addToCart(id)}>Add To Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={deleteShoppingCart}>All Cart Remove</button>
            
        </div>
    );
};

export default Cosmetic;