import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";


const Dish =({dish})=> {
const [quantity, setQuantity]= useState(1)
const dispatch= useDispatch()

    return (<div>
        <img src = {`./${dish.img}.jpg`} alt =""/>
        <h2>{dish.name}</h2>
        <p>{dish.price} RUB</p>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={()=> {dispatch(addItemToCart ({dish, quantity}))}} > Добавить в корзину</button>
        

    </div>)
}

export default Dish;