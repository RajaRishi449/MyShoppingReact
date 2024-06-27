// Cart.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
    const items = useSelector((state) => state.cart.items);
    const Amount = useSelector((state)=>state.cart.totalAmount);

    return (
        <>
            <div className="products-list">
                {items.map((item, index) => (
                    <CartItem key={index} item={item} />
                ))}
            </div>
            <div><center><button className="button-18">Total Amount : <span>&#8377;</span>{Amount}</button></center></div>
        </>
    );
}

export default Cart;