import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Electronics.css'

export default function Electronic() {
  const [state, setState] = useState([])
  const [ascending, setAscending] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then((res) => res.json())
      .then((data) => {
        setState(data)
      })
  }, [])

  function handlesort() {
    const sortData = [...state]
    if (ascending) {
      sortData.sort((a, b) => a.price - b.price)
    } else {
      sortData.sort((a, b) => b.price - a.price)
    }
    setAscending(!ascending)
    setState(sortData)
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const filterProduct = state.filter((el) =>
    el.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="electronic-container">
      <h4>Electronic Products</h4>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Electronics"
          value={search}
          onChange={handleSearch}
        />
        <button onClick={handlesort}>
          {ascending ? "Sort Descending" : "Sort Ascending"}
        </button>
      </div>
      <div className="product-grid">
        {filterProduct.map((e, i) => {
          return (
            <div key={i} className="product-card">
              <Link to={`/productDetail/${e.id}`} className="product-title">
                {e.title}
              <img src={e.image} alt="" style={{height:"200px"}}/>
              {/* <div className="product-price">${e.price}</div> */}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
