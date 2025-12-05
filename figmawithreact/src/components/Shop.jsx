import Items from "./Items"

function Shop(){

  
  return(
    <>
    <div className="grid grid-cols-4 py-10 text-center  px-5 ">
    <Items itemname="Dublin Dining Chair" price={12} imgsrc="/chairImg.png"/>
    <Items itemname="Wooder Clamp Chair" price={7} imgsrc="/chairImg2.png"/>
    <Items itemname="Arm Chair" price={15.99} imgsrc="/chairImg3.png"/>
    <Items itemname="Wooder Clamp Chair" price={22.49} imgsrc="/chairImg4.png"/>
    </div>
    </>
  )
}

export default Shop