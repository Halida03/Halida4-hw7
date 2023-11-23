// Modal.js
import React from 'react';
import { useFavorite } from '../FavoriteContext';

const Modal = () => {
  const { favorites } = useFavorite();

  return (
    <div>
      <h2>Modal</h2>
      <ul>
        {favorites.map((product) => (
          <li key={product.id}>
            {product.title} - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Modal;
