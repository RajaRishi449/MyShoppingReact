import { useNavigate } from "react-router-dom"
const Order = ()=>{
  
    const navigate = useNavigate();
    const continueShopping =() =>{
        navigate('/Products')
    }
    const x = Math.floor((Math.random() * 10) + 1);
    return(
        <div className="centered-container">
      <div className="centered-content">
        <h1>Order successful...</h1>
        <h1>Your Order will reach you in {x} days</h1>
        <button className='button-18' onClick={continueShopping}>Continue Shopping</button>
      </div>
    </div>
    )
}
export default Order