import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { itemsAdded, totalAmountIncrement } from "../reducers/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { themeContext } from '../contexts/theme';

const ProductCard = (props) => {
  const { title, price, image } = props.Product || {};
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const amt = Math.floor(price);
  const { Theme } = useContext(themeContext);

  const handleMakeYours = () => {
    navigate('/Order');
  };

  const addItems = () => {
    dispatch(itemsAdded(props.Product));
    dispatch(totalAmountIncrement(amt));
    toast.success("Item added");
  };

  return (
    <div className={`product-card ${Theme}`}>
      <img src={image} alt={title} />
      <div className="product-title">{title}</div>
      <div className="product-price"><span>&#8377;</span> {amt} </div>
      <div>
        <center>
          <button className='button-19' onClick={handleMakeYours}>Make Yours</button>
          <button onClick={addItems} className="button-19">Add to Cart</button>
        </center>
      </div>
    </div>
  );
};

export default ProductCard;
