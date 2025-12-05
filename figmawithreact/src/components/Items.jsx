import { UseCartContext } from "../contexts/CartContext"


function Items(props){

  const randomId = (Math.random() *1000000).toFixed(0)

  const useCart = UseCartContext();
  console.log(useCart)
  return(
      <div className="flex flex-col space-y-3 w-46 items-center justify-around  text-[#292929] bg-[#EAEAEA] rounded-md bg font-bold">
        <img src={props.imgsrc} alt="" />
        <div>

        <p>{props.itemname}</p>
        <p>Price - ${props.price}</p>
        </div>
        <button
        onClick={()=>useCart.setCartValue([...useCart.cartValue,{itemname : props.itemname , price : props.price , imgsrc : props.imgsrc, randomID : randomId}])}
        
        className="hover:bg-[#6F81F7] hover:text-[#0A0F2D] active:w-[65%] transition duration-300 bg-[#0A0F2D] cursor-pointer  text-[#6F81F7] py-2 w-[55%] text-sm mb-2 rounded-full">Add to Cart</button>

      </div>
  )
}

export default Items