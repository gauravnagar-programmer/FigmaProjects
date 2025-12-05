import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const UseCartContext = ()=>{
  return useContext(CartContext)
}

export const ContextProvider = ({children}) =>{

  const [cartValue,setCartValue] = useState([])

return(
  <CartContext.Provider value={{cartValue,setCartValue}}>
    {children}
  </CartContext.Provider>
)
}