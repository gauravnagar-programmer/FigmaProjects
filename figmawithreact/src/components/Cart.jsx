import { UseCartContext } from "../contexts/CartContext"

function Cart(){

  function cartDelete(){


    
  }

  const useCart = UseCartContext();

  const Total = (useCart.cartValue.reduce((a,b)=> a + b.price,0)).toFixed(2)
  
  return(
    <div className="flex flex-col mt-5 space-y-15 px-5">
      <h1 className="text-center text-[#6F81F7] font-bold text-3xl ">Cart</h1>
      {

        useCart.cartValue.length === 0 ?(
          <p className="text-center font-bold text-2xl">cart is empty</p>
        ) :(


        useCart.cartValue.map((item,index)=>{
          return(
           
            <div key={index} className="flex flex-col space-y-5 w-sm ">
        <div className="bg-[#EAEAEA]  px-3 py-3 rounded-md flex justify-between items-center">
          <img className="rounded-full bg-[#282828]/20 w-20" src={item.imgsrc} alt="" />
          <section className="flex flex-col text-center space-y-3 mr-10 font-bold text-[#000000]/80">
            <h3>{item.itemname}</h3>
            <p>Price - ${item.price}</p>
            <button 
            onClick={()=>
              useCart.setCartValue(useCart.cartValue.filter((cardItem)=> cardItem.randomID !== item.randomID))}
            className="bg-blue-500 rounded-full p-2">delete</button>
          </section>
        </div>
      </div>
          )
        })
      )
    }
    {
      useCart.cartValue.length===0 ?(
        <p></p>
      ):(

        <h1 className="text-center mb-5 text-2xl  font-semibold ">Total Bill - ${Total}</h1>
      )
    }
      </div>
  )
}

export default Cart