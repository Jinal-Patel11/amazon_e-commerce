import React, { useContext } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../Context';

export default function Navbar() {
  const navigate = useNavigate();
  const { state, fnLogged } = useContext(myContext)

  function logout() {
    fnLogged({
      user: "guest user",
      isLogged: false
    })
  }

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      navigate(selectedCategory);
    }
  };
  return (
    <div className='main-navbar'>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container-fluid">
            {/* Logo */}
            <div className="navbar-brand nav-logo">
              <Link to={"/"}><div className="logo"></div></Link>
            </div>

            {/* Toggle button for mobile */}
            {/* Toggle button for mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>


            {/* Navbar items */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav gap-4 mt-1">
                {/* Address */}
                <li className="nav-item">
                  <div className="nav-address">
                    <p className='add-first'>Deliver to</p>
                    <div className='add-icon' >
                      <i className="fa-solid fa-location-dot"></i>
                      <p className='add-sec'>India</p>
                    </div>
                  </div>
                </li>

                {/* Search */}
                <li className="nav-item nav-search d-flex mt-1">
                  <select className="search-select" onChange={handleCategoryChange}>
                    <option value="/"> All</option>
                    <option value="clothes">Clothes</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewellery">Jwellery</option>
                  </select>
                  <input type="text" placeholder='Search Amazon' className="search-input" />
                  <div className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></div>
                </li>

                {/* Sign in */}
                <li className="nav-item">
                  <div className="nav-signin">
                    {
                      state.isLogged ? (
                        <>
                          <div style={{ marginTop: "10px" }}>
                            <span>User: {state.user}</span>
                            <button className="logout-btn" onClick={logout}>Log Out</button>
                          </div>
                        </>
                      ) : (
                        <>
                          <Link to={"/login"} className="text-white" style={{ marginBottom: "-4px", marginTop: "4px" }}>
                            <span>Hello, sign in</span>
                          </Link>
                          <p className='nav-second' style={{ color: "white" }}>Account & Lists</p>
                        </>
                      )
                    }
                  </div>
                </li>

                {/* Returns & Orders */}
                <li className="nav-item">
                  <Link to={"/ordersection"}><div className="nav-return">
                    <p style={{ color: "white", marginTop: "-10px", marginLeft: "13px" }}><span>Returns</span></p>
                    <p className='nav-second' style={{ color: "white", marginTop: "-8px" }}>& Orders</p>
                  </div></Link>
                </li>

                {/* Cart */}
                <li className="nav-item">
                  <div className="nav-cart">
                    <Link to={"/cart"} className="text-white">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Pannel */}
        <div className="pannel" style={{ width: '100%' }}>
          <div className="pannel-all d-flex">
            <span><i className="fa-solid fa-bars"></i></span>
            <Link to={"/"} className="text-white text-decoration-none"><span>All</span></Link>
          </div>

          <div className="pannel-option d-flex">
            <Link to={"/todaysdeal"} className="text-white text-decoration-none mx-2">Today's Deals</Link>
            <Link to={"/customerservice"} className="text-white text-decoration-none mx-2">Customer Service</Link>
            <Link to={"/bestseller"} className="text-white text-decoration-none mx-2">Best Seller</Link>
            <Link to={"/sell"} className="text-white text-decoration-none mx-2">Sell</Link>
            {/* <Link className="text-white text-decoration-none mx-2">Help</Link> */}
          </div>

          <div className="pannel-deals">
            Shop Deals in Electronics
          </div>
        </div>
      </header>
    </div>
  )
}

