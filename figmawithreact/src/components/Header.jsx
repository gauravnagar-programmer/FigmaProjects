import { Link, NavLink } from "react-router"


function Header() {

  return (
    <>
      <nav className="flex items-center justify-between bg-[#6F81F7] font-bold text-white px-5 py-4">
        <Link to='/' className="text-3xl">ICOM </Link>
        <div className="flex items-center  lg:space-x-20 space-x-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#0A0F2D]" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#0A0F2D]" : "text-white"
            }
          >
            About
          </NavLink>
          <NavLink to="/shop"
          className={({isActive})=>
          isActive ? "text-[#0A0F2D]" : "text-white"
        }
          >Shop</NavLink>
        </div>
        <div>
          <Link to="/cart">
            <i className='bx p-3 bg-[#0A0F2D]  rounded-full bxs-shopping-bag' style={{ color: "#ffffff" }}></i> </Link>

        </div>
      </nav>
    </>
  )

}

export default Header