import React from 'react';
import { useDispatch } from 'react-redux';
import { itemDeleted, itemIncremented, itemDecremented, totalAmountDecrement, totalAmountIncrement } from '../reducers/cartSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CartItem(props) {
    const dispatch = useDispatch();
    const amt = Math.floor(props.item.price);
    const navigate = useNavigate(); 
    const handleDelete = () => {
        dispatch(totalAmountDecrement(props.item.price * props.item.quantity));
        dispatch(itemDeleted(props.item.id));
        toast.warning("Item deleted successfully");
    };

    const handleIncrement = () => {
        dispatch(itemIncremented(props.item.id));
        dispatch(totalAmountIncrement(amt));  // Increment total amount
    };

    const handleDecrement = () => {
        if (props.item.quantity > 1) {
            dispatch(itemDecremented(props.item.id));
            dispatch(totalAmountDecrement(amt));
        } else {
            handleDelete();
        }
    };
    const handleMakeYours =() =>{
        navigate('/Order')
      }
    return (
        <div className='product-card'>
            <img src={props.item.image} alt={props.item.title} />
            <div className="product-title">{props.item.title}</div>
            <div className="product-price"><span>&#8377;</span> {amt}</div>
            <div className='number-held'>Quantity : {props.item.quantity}</div>

            <div className="item-controls">
                <div>
                <button className='button-19' onClick={handleMakeYours}>Make Yours</button>
                </div>
                <button onClick={handleIncrement} className='button-19'>+</button>
                <button onClick={handleDecrement} className='button-19'>-</button>
            </div>

            <button onClick={handleDelete} className='button-19'>Remove Item</button>
        </div>
    );
}

export default CartItem;
