import React from 'react';
import List from './components/list';
import { Link } from 'react-router-dom';

const Content = ({ products, handleLikeClick, likedProduct }) => {
  return (
    <div>
      <h2>Content</h2>
      <List handleLikeClick={handleLikeClick} products={products} likedProduct={likedProduct} />
      <Link to="/modal">Go to Modal</Link>
    </div>
  );
};

export default Content;
