import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { TbDeviceTabletHeart } from 'react-icons/tb';
import List from './components/list';
import Modal from './components/modal';
import AuthContainer from './AuthContainer';

function App() {
  const [products, setProducts] = useState([]);
  const [likedProduct, setLikedProduct] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching Products:', error);
      }
    };
    fetchData();
  }, []);

  const handleLikeClick = (productId) => {
    console.log('Handle like click called');
    if (likedProduct.includes(productId)) {
      setLikedProduct(likedProduct.filter((id) => id !== productId));
    } else {
      setLikedProduct([...likedProduct, productId]);
    }
  };


  return (
    <Router>
      <div className='App'>
        <h2>Products list</h2>
        <Routes>
          <Route
            path="/"
            element={
              <List
                handleLikeClick={handleLikeClick}
                products={products}
                likedProduct={likedProduct}
              />
            }
          />
          <Route path="/modal" element={<Modal />} />
          <Route
            path="/auth"
            element={
              <AuthContainer onSignIn={() => setUserLoggedIn(true)} />
            }
          />
        </Routes>
        {userLoggedIn && <p>User logged in!</p>}
        <Link to="/modal">
          <TbDeviceTabletHeart className='Liked' />
        </Link>
      </div>
    </Router>
  );
}

export default App;