// Content.js
import React from 'react';
import List from './components/list';
import { Link } from 'react-router-dom';
import { useFavorite } from './FavoriteContext';

const Content = ({ products, handleLikeClick, likedProduct }) => {
  const { addFavorite } = useFavorite();

  return (
    <div>
      <h2>Content</h2>
      <List
        handleLikeClick={(productId) => {
          handleLikeClick(productId);
          const likedProduct = products.find((product) => product.id === productId);
          addFavorite(likedProduct);
        }}
        products={products}
        likedProduct={likedProduct}
      />
      <Link to="/modal">Go to Modal</Link>
    </div>
  );
};

export default Content;
