import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const useFavorite = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const removeFavorite = (productId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((product) => product.id !== productId));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
