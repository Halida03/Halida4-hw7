import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";

const List = ({ handleLikeClick, products, likedProduct, userLoggedIn }) => {
  console.log(products);
  return (
    <div>
      <ul className='products'>
        {products.map((product) => (
          <li key={product.id} id='li'>
            <img src={product.image} alt={product.name} className='img'/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <IoIosHeartEmpty
              className="icon-heart"
              style={{ color: likedProduct.includes(product.id) ? 'red' : 'inherit' }}
              onClick={() => handleLikeClick(product.id)}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List; 