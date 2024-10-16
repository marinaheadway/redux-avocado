import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";



const Cart=()=> {
    const cartItems=useSelector(getCartItems);
    const totalPrice=useSelector(getTotalPrice);
    return (<div>
        <img className="cartIcon" src="https://img.icons8.com/?size=100&id=J5gNAFBW697b&format=png&color=000000" alt =""/>
        {cartItems.map(cartItem=> <CartItem  key={cartItem.id}cartItem={cartItem}/>)}
        <h2>ВСЕГО: {totalPrice} руб.</h2>
       
        </div>)
}

export default Cart;