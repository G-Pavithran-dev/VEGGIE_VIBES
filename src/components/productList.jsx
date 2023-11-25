// ProductList.js
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions'

const ProductList = () => {
  const dispatch = useDispatch()

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    // Add more products as needed
  ]

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
    console.log("dispatch")
  }

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
