import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Jewellery.css'

export default function Jewellery() {
  const [state, setState] = useState([])
  const [ascending, setAscending] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then((res) => res.json())
      .then((data) => {
        setState(data)
      })
  }, [])

  function handleSort() {
    const sortedData = [...state]
    if (ascending) {
      sortedData.sort((a, b) => a.price - b.price)
    } else {
      sortedData.sort((a, b) => b.price - a.price)
    }
    setState(sortedData)
    setAscending(!ascending)
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const filterData = state.filter((el) =>
    el.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="jewellery-container">
      <h3>Jewellery</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Jewellery"
          value={search}
          onChange={handleSearch}
        />
        <button onClick={handleSort}>
          {ascending ? "Sort Descending" : "Sort Ascending"}
        </button>
      </div>
      <div className="product-grid">
        {filterData.map((e, i) => {
          return (
            <div key={i} className="product-card">
              <Link to={`/productDetail/${e.id}`} className="product-title">
                {e.title}
                <img src={e.image} alt="" style={{height:"150px"}} />
              </Link>
              {/* <div className="product-price">${e.price}</div> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}
