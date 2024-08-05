import { useDispatch } from "react-redux";
import dataDishes from "../../data/dataDishes";
import { removeItemFromCart } from "../../Redux/cartSlice";


const CartItem =({cartItem})=>{
    const dishes = dataDishes.find(item=> item.id===cartItem.dishId)
    console.log(dishes)
const dispatch= useDispatch()

    return (
        <div>
            <p>{dishes.name}</p>
           <p className="order">{cartItem.quantity} порция(й)</p>
           <p className="price">Цена: {dishes.price*cartItem.quantity} руб.</p>
           <span onClick={()=> dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
           <img className="icon" src="https://img.icons8.com/parakeet/48/trash.png" alt="trash"/></span>
        </div>
    )
}
export default CartItem;